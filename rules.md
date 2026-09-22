# G Language — Foundational Language Model

## 1. Core Philosophy

G is built around a small number of composable concepts rather than a large collection of special-purpose constructs.

The language should prefer structural meaning over reserved words. A construct should be special because of the context in which it appears, not merely because a particular word has been globally reserved.

The goal is for declarations, definitions, expressions, scopes, functions, conditionals, and sequencing to emerge from a small set of common mechanisms.

## 2. Fundamental Actions

G has five fundamental actions:

* Declare
* Define
* Assign
* Operate
* Chain

### Declare

Declaration introduces a named entity and establishes its type or other defining information.

```g
int: x;
```

The declaration establishes `x` as an `int`.

### Define

Definition supplies the implementation or contents of something that has been declared as definable.

```g
int: foo() {
    return(5);
}
```

A function definition is therefore conceptually a declaration followed by a definition, rather than an entirely separate kind of language object.

### Assign

Assignment gives a value to an existing target.

```g
x = 5;
```

Declaration and assignment can naturally occur together:

```g
int: x = 5;
```

This is still conceptually a declaration with initialization/assignment.

### Operate

An operation evaluates operands using an operation such as `+`, `-`, `/`, comparison, assignment, or another operator.

For example:

```g
x + y;
```

is a valid operation even when its result is discarded.

The fact that an operation may be pointless does not make it syntactically invalid.

### Chain

Comma creates a chain.

```g
x = 5, x = x + 1, foo(x);
```

A chain evaluates its elements in order.

The result of a chain is the result of its final element.

For example:

```g
x = 5, x + 1
```

produces the value of `x + 1`.

Chain is therefore distinct from operation. An operation performs an operation on operands; a chain sequences actions.

## 3. Operands

G treats a relatively small set of things as operands.

Among them are:

* identifiers
* literals
* function calls
* grouped expressions
* conditionals
* scopes

The important consequence is that a scope is itself an operand.

This allows scopes to participate anywhere an operand is valid rather than requiring separate "block" constructs for every context.

## 4. Scopes Are Objects

A scope is created by braces:

```g
{
    int: x = 5;
}
```

A scope has two fundamental properties:

1. It establishes a visibility boundary.
2. It produces a value.

The value of a scope is the value produced by its final action.

Therefore:

```g
{
    int: x = 5;
}
```

produces `5`.

This means scopes can be used as objects/values:

```g
x = {
    int: y = 5;
    y + 1;
};
```

The outer `x` receives `6`, while `y` remains local to the scope.

The braces are what establish the scope boundary. Merely being part of a chain does not inherently create a scope.

## 5. Chains and Scope Are Separate Concepts

A chain controls evaluation order.

A scope controls visibility and lifetime.

They are therefore independent concepts.

A chain does not inherently create a scope:

```g
x = 5, x = x + 1;
```

Both operations occur in the surrounding scope.

A scope can contain a chain:

```g
{
    int: x = 5, x = x + 1;
}
```

and a scope can itself participate in a chain:

```g
foo(), {
    int: x = 5;
    x;
}, bar();
```

assuming the surrounding context permits those operands.

## 6. Conditionals

`if` is a conditional construct rather than a conventional globally reserved keyword.

A conditional evaluates a condition and then selects an operand.

Conceptually:

```g
if (condition) value
```

and:

```g
if (condition) value else value
```

Because scopes are operands, conditional branches can naturally be scopes:

```g
if (x > 10) {
    x + 1;
}
```

and:

```g
if (x > 10) {
    x + 1;
} else {
    0;
}
```

The conditional itself produces the value of the selected operand.

## 7. The Condition Is an Implicit Scope

The condition of an `if` is evaluated in an implicit scope.

For example:

```g
if (
    int: x = 5,
    x > 3
) {
    ...
}
```

The declaration of `x` is local to the condition's implicit scope.

The important distinction is that the condition is not explicitly surrounded by braces. Its scope is established by the semantics of the conditional construct.

This means it is possible, in principle, for an entire program to exist within the implicit scope of a top-level condition. This is unusual, but it follows naturally from the rule rather than requiring an arbitrary special restriction.

## 8. Condition Chains and Argument Chains

Chains used as conditions and function arguments are still chains. They are not fundamentally different kinds of sequencing.

Their contexts impose restrictions on what actions are meaningful.

A condition is an evaluative context. It can perform operations, assignments, function calls, and other value-producing actions, but declarations may be constrained according to the scope rules governing the condition.

Function arguments are likewise evaluative:

```g
foo(x = 5, x + 1);
```

The arguments produce values.

Parameters are different. A parameter list describes declarations:

```g
foo(int: x, float: y)
```

Thus parameters are constrained to declarations rather than arbitrary expressions.

This is a contextual restriction, not a fundamentally different notion of chaining.

## 9. Functions

Functions follow the general declaration/definition model.

A function declaration has a return type, a function target, and parameters:

```g
int: foo(int: x, int: y)
```

A function definition supplies its body:

```g
int: foo(int: x, int: y) {
    return(x + y);
}
```

Because a scope is an operand and produces a value, the function body can naturally be understood as an object supplied to the function definition.

G may also permit a definition without explicit braces where the resulting syntax remains unambiguous:

```g
int: foo() int: x = 5, return(x);
```

This is conceptually a declaration of `foo()` followed by its definition.

The definition/assignment distinction remains important. A function invocation is not an assignable storage location merely because functions and variables share a declaration syntax.

## 10. Type Definitions

A named scope can naturally represent a type-like object:

```g
mytype: {
    int a;
    int b;
}
```

This follows directly from scopes being objects.

Type aliases do not need to overload the ordinary declaration syntax. They can instead be represented by a dedicated operation such as:

```g
typedef(mytype, int);
```

This keeps type aliasing explicit without requiring constructions such as:

```g
mytype: int:
```

to acquire special meaning.

The exact syntax of `typedef` remains open.

## 11. `else` Is Contextual

`else` is deliberately treated differently from ordinary globally reserved keywords.

Outside a conditional context, `else` is simply an ordinary identifier/prose element.

Within a conditional chain, `else` acts as the conditional continuation/operator.

Thus:

```g
this is prose containing the word else
```

does not give `else` special meaning.

But:

```g
if (x) foo() else bar()
```

recognizes `else` as the continuation of the preceding `if`.

Likewise:

```g
int: else
```

is not a valid declaration target merely because `else` can otherwise appear as ordinary text. Its role is determined by the grammar/context in which it occurs.

This is an important example of G's general philosophy: syntax should be interpreted structurally rather than relying on a large globally reserved keyword set.

## 12. Reserved Words and Structural Meaning

G should minimize globally reserved words.

A name becomes special because its surrounding structure gives it special meaning.

For example:

```g
int
```

is recognizable as a primitive type because it occupies a type-producing position.

```g
foo()
```

is recognizable as a function call because of its call structure.

```g
{
    ...
}
```

is recognizable as a scope because of its delimiters.

`else` becomes an operator only when it occurs as the continuation of an `if`.

This approach keeps the identifier space broad while allowing the language to retain precise semantics.

## 13. The Emerging Model

The current conceptual model can be summarized as:

```text
G
│
├── Actions
│   ├── declare
│   ├── define
│   ├── assign
│   ├── operate
│   └── chain
│
├── Operands
│   ├── identifier
│   ├── literal
│   ├── function call
│   ├── conditional
│   ├── grouped expression
│   └── scope
│
└── Scope
    ├── establishes visibility
    └── produces a value
```

The central relationships are:

```text
chain
    → orders evaluation

scope
    → establishes visibility
    → produces a value

operand
    → participates in evaluation

action
    → describes what evaluation does
```

This gives G a relatively small conceptual foundation from which declarations, definitions, assignments, functions, conditionals, objects, and expressions can be composed rather than each requiring an independent language mechanism.

## 14. Design Principle

The guiding principle emerging from this model is:

> G should have a small number of fundamental mechanisms that compose freely, with contextual restrictions applied only where semantics actually require them.

The grammar should therefore avoid creating special cases merely because two constructs are conventionally called different things.

A function body can be a scope.

A conditional branch can be a scope.

A scope can be a value.

A declaration can be combined with assignment.

A sequence of actions can be a chain.

A chain can produce a value.

The remaining complexity should primarily come from determining what those compositions mean, rather than from continually adding new syntactic categories.

