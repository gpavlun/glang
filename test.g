# G Language test document

## prose
 
  one two three four
  1 2 3 4
  one,, two,,,, three,, four..
  `int: x = x + 5 ()` 
  `one 
   two 
   three 
   four`


## conditionals
### if statements
if()if()if();

this is gating the if below it
if() 
if();
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
}

### if expressions
if expressions are conditionals that always return a get_value
much like the ternary operator in C
with this in mind they do need to have a gauranteed value
meaning every if expression must have an else

if() 5 else 6;  therefore these do not need a semicolon
                in the body of their expression
if(){          
  but they can
  have one if you
  like 5;
}else{
  6
};

the cool part of these is that they have a value so
int: x = if() 5 else 4; is perfectly valid

if(x > 5){
 It can be rather tricky to tell sometimes
 since in this case X will be returned X;
}else{
 this is currently only possible becuse the null
 statement `;` has been removed for general purpose
 though it still exists in some contexts like if();
 
 It should also be known that prose cannot be
 the last line of an if expression so some kind
 of statement has to be between this and the 
 final value int: x = 5;
 expression_value
};



foo(a=2);

if() ;

if() 5, 6;
if() 5 else 6;

before int: foo(int: b; const, int:b) int: a, b; after

void: func1(), func2();
int: b = b = 5, c;

//int: get_value() return(value)

int: add(){
    foo();
    return(if(x) 5 else 6);
}

a;
words static, int: a, b; more words
prose
static, int: a = 5, b = 6;

some stress testing

should be valid
hello world int: x; more prose here
hello x + y; more prose
foo(bar); ordinary prose
a + b * c == d;
a, b, c;
a = b = c;
static, const, int: x = foo(a + b);


should be invalid
x +;
x =;
+ x;
foo(;
foo(x +);
int:;