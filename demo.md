# G Language demo document

Check out my new programming language G

This G source file is simultaneously both the documentation
and valid code in G

I think that G is pretty unique among languages because
of this

Lets get into some of the features 

## prose

Prose is one of the fundamental concepts of G
Plain text can be recognized and ignored by the parser
thus allowing comments to go directly next to code with
no issues

in order to facilitate this,, prose cannot contain any 
operators used by G.. You can get around this with the
backtick,, so `int: x = x + 5` is still prose.. If you
want you can also do the triple backtick like markdown,,
but that does not do anything special

```text 
One funny thing to notice is that double punctuation is 
fine, so your G prose will start looking a bit wonky if you 
want to inline punctuation. I am considering alternatives
(such as having the double punction be access for the code),
but this is a programming language first, so the code gets
the priority.
```

## declarations
### objects
An object declaration in G is denoted `<type>:<identifier>;`
and since the colon is used as a type delimiter,, it means 
that there are no traditional reserved words,, only context
repecifc reservations in G

With that in mind,, I could let you declare a type called
`else` or `if`,, but I am not sure I want to do that yet
  
Declarations also chain int: a, b, c; and instantiation is
also allowed int: a = 5, b, c = 6;

## functions
### declarations and definitions
Same general idea for functions,, plus one unique thing to G

    int: add(int: x; int: y){
        the args are separated by a semi colon and do
        not allow for multi declarations like `int: x, y;`
        return(x + y);
    }

So instead you can do int: add(int: x; int: y) return(x + y);  
And this is valid G

    void: foo(){
        int: add(int: x; int: y){ functions can also be scoped
            return(x + y); 
        }
        so you can make a call from within
        print(add(6, 7));
    }

since declarations chain ....

    int:add(int: x; int: y), 
        sub(int: x; int: y),
        mul(int: x; int: y); is perfectly valid,, though 
        I wouldnt recommend this beyond prototypes

Oh and dont forget modifiers static, const, int: x, y, z;  
Scoped types allow nesting declarations

    private:{
        int:{
            these guys all have the type `private, int:`
            add(int: x; int: y);
            sub(int: x; int: y);
            mul(int: x; int: y);
        }
        where as this is `private, float`
        float: x, y, z;
    }
    
    int:{
        these all are declared with type int
        a = 1; 
        b = 2;
        c = 3;
        foo();
    }

### calls
You can call a function with the same basic syntax you would expect

    foo();
    foo(x,y,z);
    foo(bar(baz()));
    int: x = add(y, z);
    foo(y = 5); the assignment is evaluated before the call

## conditionals
### if statements
Everyone knows what an if statement is,, and they are pretty easy to follow
    
    if()if()if();
    if() 5;
    if() 5,6,7;
    if(){}
    if(){3, 3;} if statements bodies must contain a valid statement
    if(){3;}    which essentially means it must terminate in a semicolon
    if(){
        prose can go inside a scoped statement
        3;4;5,6;
        if(){
            3;4;5,6;
        }
    }else{
        prose can be contained in an if statement no problem
    }

### if expressions
If expressions are conditionals that always return a value much like the
ternary operator in C  
With this in mind they do need to have a gauranteed value,, meaning every
if expression must have an else  

    if() 5 else 6;  therefore these do not need a semicolon
                    in the body of their expression
    if(){          
    but they can
    have one if you
    like 5;
    }else 6;

    the cool part about these is that they have a value so
    int: x = if() 5 else 4; is perfectly valid

Prose,, in if expressions specifically,, needs careful attention

    if(x > 5){
    It can be rather tricky to tell sometimes
    since in this case X will be returned X;
    }else{
    this is currently only possible because the null
    statement `;` has been removed for general purpose
    though it still exists in some contexts like if();

    that basically just means you cannot use a lone `;`
    without an operation or expression
    
    It should also be known that prose cannot be
    the last line of an if expression so some kind
    of statement has to be between this and the 
    final value int: x = 5;
    expression_value
    };

## structures
structs are the users way of creating types or containers in G  
A struct is delineated as `struct: <identifier> <delcaration>` 

    struct: mytype{ 
        int: var; 
        void: method(); G has methods,, yay
    }                   for OO programmers

    a type can also be defined inline
    struct: mytype 
        int: a, b, c;

    and dont forget prototypes

    struct: proto;

## comments
There may come a time when you desire to suppress a segment of code
and this can be achieved with comments  

While it may seem redundant to have comments in a language that
already has prose and prose escapes,, it is still a nice thing to
have  

    // double slash indicates single line comments
    /*
        block comments can be done with slash star,
        this is all pretty standard. Due to how G is
        structured, you could just use a prose escape.
        The reason you would not do this is because
        a comment is explicitely meant to be code that
        is not currently being used, whereas prose is
        actual documentation.
    */


## ROT13 in G

    char: rot13(char: c) {
        if(c >= 'a' && c <= 'z')
            return('a' + (c - 'a' + 13) % 26);

        if(c >= 'A' && c <= 'Z')
            return('A' + (c - 'A' + 13) % 26);

        return(c);
    }

    int: main(){
        int: c;

        while((c = getchar()) != EOF)
            putchar(rot13(c));
        
        return(0);
    }

## Some weird ass function chatgpt made

```C
    int: process(int: x; int: limit){
        if(x < 0) return(-1);
        
        int: i = 0, value = 
            while(i < x; int: result = 0){
                if(i == limit)
                    break;

                if(i % 2 == 0)
                    result += i;
                else
                    result -= i;

                i+=1;

                if(x > 100)
                    return(x);
            } else {
                x;
            };

        return(value);
    }
````


```C
#include <stdio.h>

char rot13(char c) {
    if (c >= 'a' && c <= 'z')
        return 'a' + (c - 'a' + 13) % 26;

    if (c >= 'A' && c <= 'Z')
        return 'A' + (c - 'A' + 13) % 26;

    return c;
}

int main(void) {
    char c;

    while ((c = getchar()) != EOF)
        putchar(rot13(c));

    return 0;
}
```















