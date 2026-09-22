# G Language — Grammar & Language Design

## 1. Overview

G is a programming language designed around a small set of composable grammatical concepts:

* declarations
* definitions
* assignments
* expressions
* chains
* scopes
* operators
* prose

A defining feature of G is that ordinary prose can exist directly inside source code without comment markers. Prose is ignored by the compiler, while G syntax remains explicit and strongly delimited.

The language is intentionally permissive about whitespace and prose placement, while being strict about punctuation. G punctuation is always syntactically meaningful unless explicitly escaped or contained within a comment.

This document describes the grammar and language structure of G. Runtime behavior and implementation details are outside its scope.

---

# 2. Source Structure

A G source file consists of some combination of:

1. prose
2. code
3. comments

These may appear throughout the source.

For example:

```g
This is prose before the program

int: x = 5;

This is prose between statements

x = x + 1;

More prose
```

Prose does not need a comment marker.

Comments are still available when discussing G syntax or when arbitrary punctuation is required.

```g
// line comment

/*
block comment
*/
```

---

# 3. Lexical Modes

G source can be understood as operating in three textual modes.

## 3.1 Prose

Prose is unregistered text that has no meaning to the G program.

```g
This is ordinary prose
The compiler ignores this text
```

Prose cannot contain G-reserved punctuation.

For example:

```g
you add two numbers with +
```

is not prose. The `+` begins G syntax, so the surrounding text must be interpreted as code. Since the resulting syntax is invalid, the source is invalid.

Likewise:

```g
This is prose.
```

is not valid prose because `.` is a G operator.

Therefore punctuation is not generally available for natural-language prose.

---

## 3.2 Code

When G-reserved syntax is encountered, the source is interpreted as code.

Code follows the grammar defined throughout this document.

For example:

```g
int: x = 5;
x = x + 2;
```

---

## 3.3 Comments

Comments explicitly suppress parsing.

Line comments:

```g
// this can contain + punctuation, function() calls, and anything else
```

Block comments:

```g
/*
This can contain arbitrary punctuation:
a+b=c;
foo(bar);
"hello"
*/
```

Comments may therefore contain text that would otherwise be invalid prose.

---

# 4. Reserved Punctuation

G reserves punctuation for its grammar.

The current reserved punctuation set is:

```text
! % ^ & * ( ) + = { } [ ] : ; " ' | ? / > < , . ~
```

Reserved punctuation cannot appear literally in prose.

The characters currently available in ordinary prose include:

```text
@ # ` \
```

The backtick has special meaning as a prose escape.

---

# 5. Prose Escaping

Backticks allow G syntax to be discussed literally inside prose.

For example:

```g
you use `+` to add numbers
```

Here `+` is treated as prose rather than as the addition operator.

This allows source files to explain their own syntax naturally.

For example:

```g
The `int:` declaration creates an integer
The `+` operator performs addition
```

Without escaping, the punctuation would cause the text to be interpreted as code.

---

# 6. Statements, Expressions, and Chains

G is organized around expressions and chains rather than traditional statement blocks.

A chain is a sequence of expressions connected by the comma operator.

```g
a = 5, b = 10, c = a + b;
```

The comma means that the chain continues.

The semicolon terminates the chain.

Conceptually:

```g
a = 5;
b = 10;
c = a + b;
```

The semicolon does not itself require a preceding chain.

Therefore redundant semicolons are valid:

```g
int: x = 5;;;;;;;
```

---

# 7. Chain Requirements

A chain consists of multiple expressions connected by a chain operator.

For the primary chain syntax, that operator is `,`.

A single expression followed by a semicolon is simply an expression terminated by a semicolon; it is not considered a multi-expression chain.

```g
x = 5;
```

is valid.

```g
x = 5, y = 10;
```

is a chain.

A semicolon may terminate the current chain at any point where the grammar permits termination.

---

# 8. Declaration

A declaration introduces an identifier.

The basic form is:

```g
type: identifier;
```

Examples:

```g
int: x;
float: value;
my_type: object;
```

The identifier may represent an object or function.

Function declarations can include parameters:

```g
int: add(int: x, int: y);
```

---

# 9. Declaration Context

Declaration qualifiers apply forward through a chain.

For example:

```g
int: a, b;
```

is equivalent to:

```g
int: a;
int: b;
```

Likewise:

```g
int: a, b, c;
```

means:

```g
int: a;
int: b;
int: c;
```

Declaration context propagates forward through the current declaration chain.

It does not propagate backward.

Therefore:

```g
a, int: b, c;
```

means:

```g
a;
int: b;
int: c;
```

It does not mean:

```g
int: a;
int: b;
int: c;
```

---

# 10. Declaration Scopes

A declaration context may be applied to a scope.

These are equivalent:

```g
int:{
    a;
    b;
}
```

and:

```g
int: a, b;
```

A more complex example:

```g
static, int:{
    x;
    const:{
        y;
    }
    int: z;
}
```

Conceptually expands to:

```g
static, int: x;
static, int, const: y;
static, int: z;
```

Declaration context therefore propagates into nested declaration scopes.

The context is inherited from the point at which it is established.

---

# 11. Assignment

Assignment associates a value with an object.

```g
x = 5;
```

The left side is the assignment target and the right side is the assigned expression.

A declaration and assignment may be combined:

```g
int: x = 5;
```

This is one complete expression consisting of a declaration followed by an assignment.

---

# 12. Assignment Does Not Propagate

Unlike declaration context, assignment does not propagate through a chain.

For example:

```g
a = 5, 6;
```

means:

```g
a = 5;
6;
```

It does not mean:

```g
a = 5;
a = 6;
```

The comma continues the chain, but does not duplicate the preceding assignment target.

---

# 13. Expressions

Expressions may contain values, identifiers, function calls, operators, assignments, declarations, scopes, and other grammatical constructs permitted by the surrounding context.

Operators have defined precedence and associativity.

For example:

```g
int: b = a + 10 * 2;
```

is interpreted as:

```text
a + (10 * 2)
```

rather than:

```text
(a + 10) * 2
```

Operators are therefore part of the expression grammar rather than being treated as textual separators.

---

# 14. Function Calls

A function call consists of an identifier followed by an argument list.

```g
add(a, b);
```

Arguments are expressions.

Function calls can participate in chains:

```g
a = foo(), bar(), int: b = baz(), c;
```

This is conceptually equivalent to:

```g
a = foo();
bar();
int: b = baz();
int: c;
```

---

# 15. Definitions

A definition establishes the contents or implementation of an identifier.

Definitions are not themselves chainable as a whole.

A definition may contain declarations, expressions, scopes, function definitions, and other definitions according to the surrounding grammar.

---

# 16. Structure Definitions

A structure/type may be defined with:

```g
struct: mytype{
    int: x;
    int: y;
};
```

`struct` is a reserved G construct used to establish a user-defined type.

User-defined types may subsequently be used in declarations:

```g
user_defined_type: var;
```

---

# 17. Function Definitions

A function definition consists of a return type, function identifier, parameter list, and body.

```g
int: add(int: x, int: y){
    return(x + y);
};
```

The body may contain a scope:

```g
int: foo(){
    int: x = 5;
    return(x);
};
```

A function may also have an unscoped chain body:

```g
int: foo(int: a) a = a * 2, return(a);
```

The chain becomes the function body.

---

# 18. Nested Definitions

Definitions may occur inside other definitions.

For example:

```g
int: foo(){
    int: bar(){
        return(1);
    };

    return(2);
};
```

A nested definition is lexically scoped to the definition containing it.

In this example, `bar` belongs to the scope of `foo` and is not available outside that scope.

---

# 19. Scope

A scope is delimited by `{` and `}`.

```g
{
    expression;
}
```

Scopes create lexical boundaries.

They may contain declarations, definitions, expressions, and nested scopes.

A scope can also produce a value.

For example:

```g
int: a = {
    int: b = 5;
    b;
};
```

The scope evaluates to `5`, which is then assigned to `a`.

Scopes are therefore valid value-producing expressions.

---

# 20. Scope and Chains

A scope has a special relationship with chains.

A scope terminates the chain currently being consumed at its grammatical level.

It does not necessarily terminate every surrounding construct.

For example:

```g
if(x) foo(), {
    bar();
}, baz();
```

is interpreted as:

```g
if(x){
    foo();

    {
        bar();
    }
}

baz();
```

The scope terminates the chain belonging to the conditional.

Parsing then resumes in the enclosing context.

Thus the scope is not simply equivalent to an arbitrary expression enclosed in braces; it is also a grammatical boundary for the chain currently being consumed.

---

# 21. Conditional Chains

A conditional may consume an expression or chain.

```g
if(age) result = 6;
```

A scope may be used as the conditional body:

```g
if(age){
    result = 6;
}
```

A conditional can also consume multiple chain elements:

```g
if(age) result = 6, hasID = 6;
```

This means conceptually:

```g
if(age){
    result = 6;
    hasID = 6;
}
```

The conditional governs the chain it consumes.

---

# 22. Conditional Chain Termination

A scope terminates the chain being consumed by a conditional.

For example:

```g
if(age) {
    result = 6;
}, hasID = 6;
```

means:

```g
if(age){
    result = 6;
}

hasID = 6;
```

The `hasID` assignment is outside the conditional because the scope terminated the conditional's chain.

---

# 23. Chain Context

The meaning of a comma depends on the construct currently consuming the chain.

For example:

```g
a = 10, if(a == 10) a = 4, a = a * 2;
```

is interpreted as:

```g
a = 10;

if(a == 10){
    a = 4;
}

a = a * 2;
```

The conditional consumes the chain fragment belonging to it. Once that construct's chain ends, parsing resumes in the surrounding chain context.

This allows G to express both grouped and ungrouped control flow.

---

# 24. Operators

Operators are grammatical elements of G expressions.

Examples include:

```text
+
-
*
/
%
=
==
>
<
.
```

and the other reserved operators defined by the language.

The period `.` is an operator used for structure/member access.

For example:

```g
object.member
```

Because `.` is an operator, it cannot appear literally in prose.

---

# 25. Punctuation as Syntax

G treats punctuation as syntax rather than allowing punctuation to freely exist in source text.

This creates an intentional distinction:

```g
This is prose
```

is prose.

But:

```g
This is prose.
```

is not prose because `.` is syntactically meaningful.

Likewise:

```g
The result is x + y
```

cannot be interpreted as prose because `+` is an operator.

To discuss the syntax directly, punctuation must be escaped:

```g
The result is `x + y`
```

---

# 26. Comments Versus Prose

Prose and comments serve different purposes.

Prose is part of the source text and is recognized implicitly when it contains no reserved punctuation.

Comments explicitly suppress parsing and may contain arbitrary characters.

Therefore:

```g
This is prose
```

is prose.

Whereas:

```g
// This can contain arbitrary syntax: x + y;
```

is a comment.

And:

```g
This is prose
`x + y`
```

uses backticks to discuss G syntax inside prose.

---

# 27. Example Complete Source

The following demonstrates the major grammatical features together:

```g
I want to show off my new programming language G
G is cool because plain text is not registered and can
be written without comment indicators

int: add(int: x, int: y){
    return(x + y);
}

int: num0 = 5 + x;

user_defined_type: var;

you can nest type qualifiers

int:{
    a;
    b;
}

static, int:{
    x;
    const:{
        y;
    }
    int: z;
}

function calls

int: result = add(a, b);

// array declarations are not currently supported

float: foo(int: x, int: y){

    int:{
        a;
        b;
        c;
    }

    a = x + y;

    if(a > 10){
        b = y;
        c = a / 2;
    }

    return(a + b + c);
}
```

The source may freely move between prose and G constructs as long as reserved punctuation is respected.

---

# 28. Core Grammar Principles

The grammar can be summarized by the following principles:

1. G source may contain ordinary prose without comment indicators.
2. G-reserved punctuation cannot occur literally in prose.
3. Backticks escape G syntax into literal prose.
4. Comments may contain arbitrary text and punctuation.
5. Commas continue chains.
6. Semicolons terminate chains.
7. Extra semicolons are valid.
8. Declaration context propagates forward through a chain.
9. Declaration context does not propagate backward.
10. Assignment targets do not propagate through a chain.
11. Scopes establish lexical boundaries.
12. Scopes may produce values.
13. A scope terminates the chain currently being consumed at its grammatical level.
14. Control structures may consume chains.
15. Definitions may contain nested definitions.
16. Nested definitions are lexically scoped.
17. Function definitions may use either scoped or unscoped chain bodies.
18. Operators are grammatical elements and therefore also delimit prose.
19. Punctuation is reserved rather than freely available as natural-language text.
20. The grammar is based on composable expressions and chains rather than a traditional statement-only model.

---

# 29. Design Philosophy

G is designed around the idea that code and explanation should be able to coexist naturally.

A G source file can read like:

```g
This function adds two numbers

int: add(int: x, int: y){
    return(x + y);
}

The function can now be used

int: result = add(5, 10);
```

The language does not need a special documentation mode or comment syntax for ordinary explanations.

At the same time, G avoids ambiguity by reserving punctuation. Once G punctuation appears, the source is understood as potentially meaningful syntax rather than arbitrary prose.

This gives G two complementary properties:

* natural-language source can exist without comment markers;
* G syntax remains lexically unambiguous because its punctuation is reserved.

The result is a language in which prose, declarations, expressions, chains, scopes, and definitions can coexist within one source representation without requiring separate documentation constructs.

