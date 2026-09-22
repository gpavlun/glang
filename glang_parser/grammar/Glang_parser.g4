parser grammar Glang_parser;

options {
    tokenVocab = Glang_lexer;
}

program
    : category* EOF
    ;

category
    : element
    | prose
    | comment
    ;

element
    : declaration
    | statement
    ;


    
// body
func_body
    : LBRACE (category)* RBRACE
    | element (COMMA element)*
    ;
func_call
    : func_ident LPAREN func_arg_list? RPAREN
    ;
func_arg_list
    : expression (COMMA expression)*
    ;

/*** declarations ***/

declaration
    : decl_scope
    | obj_decl
    | func_decl
    | struct_decl
    | func_def
    | struct_def
    ;

untyped_decl
    : unt_obj_decl
    | unt_func_decl
    | unt_func_def
    ;

decl_scope
    : type_list COLON decl_scope_body
    ; 
decl_scope_body
    : LBRACE (declaration|untyped_decl|prose )* RBRACE 
    ;
    

/* object declaration */
obj_decl
    : type_list COLON obj_decl_list SEMI 
    ;
unt_obj_decl    
    : obj_decl_list SEMI 
    ;
obj_decl_list
    : obj_decl_item (COMMA obj_decl_item)*
    ;

obj_decl_item
    : obj_ident (ASSIGN expression)?
    ;

/* function declaration */
func_decl
    : type_list COLON func_decl_list SEMI
    ;
unt_func_decl
    : func_decl_list SEMI
    ;
func_decl_list
    : func_site (COMMA func_site)*
    ;
func_def
    : type_list COLON func_site func_body
    ;
unt_func_def
    : func_site func_body
    ;
func_site
    : func_ident LPAREN param_list? RPAREN
    ;
    
// parameters
param_list
    : param_decl (SEMI param_decl)*
    ;
param_decl
    : type_list COLON param_decl_item 
    ;
param_decl_item
    : obj_ident
    ;

/* structure declaration */

struct_def
    : STRUCT COLON obj_ident stuct_body
    ;
stuct_body
    : LBRACE prose* declaration (prose | declaration)* RBRACE
    | declaration
    ;

struct_decl
    : STRUCT COLON obj_ident SEMI
    ;



 /*** statements ***/
statement
    : (expression (COMMA expression)*) SEMI
    | resv_state
    ;

// lowest precedence
expression
    : assignment
    ;

// assignment
assignment
    : obj_ident (
        ASSIGN  |
        ANDEQ   |
        OREQ    |
        XOREQ   |
        LSEQ    |
        RSEQ    |
        ADDEQ   |
        SUBEQ   |
        MULEQ   |
        DIVEQ
      )assignment
    | logical_or
    ;

// logical OR
logical_or
    : logical_and (DPIPE logical_and)*
    ;

// logical AND
logical_and
    : bitwise_or (DAMP bitwise_or)*
    ;

// bitwise OR
bitwise_or
    : bitwise_xor (PIPE bitwise_xor)*
    ;

// bitwise XOR
bitwise_xor
    : bitwise_and (CARET bitwise_and)*
    ;

// bitwise AND
bitwise_and
    : equality (AMP equality)*
    ;

// equality
equality
    : relational ((EQ | NE) relational)*
    ;

// relational
relational
    : additive ((LT | GT | LTE | GTE) additive)*
    ;

// additive
additive
    : multiplicative ((PLUS | MINUS) multiplicative)*
    ;

// multiplicative
multiplicative
    : primary ((STAR | SLASH | PERCENT) primary)*
    ;

// primary
primary
    : resv_expr
    | func_call
    | obj_ident
    | number
    | LPAREN expression RPAREN
    ;
    


/*** reserved ***/
resv_expr
    : expr_cond
    | expr_whil
    ;
resv_state
    : stat_cond
    | stat_whil
    | retur
    ;

/* conditions */

stat_cond
    : cond_ident cond_site state_cond_body
    | cond_ident cond_site cond_body? ELSE state_cond_body
    ;
expr_cond
    : cond_ident cond_site cond_body? ELSE cond_body
    ;
cond_site
    : LPAREN expression? RPAREN
    ;
    
// body
cond_body
    : LBRACE ((prose* element)* (unbound_state)?) RBRACE
    | unbound_state
    | statement
    ;
state_cond_body
    : LBRACE category* RBRACE
    | statement
    | SEMI
    ;
    
/* while loop */
stat_whil
    : whil_ident cond_site state_cond_body
    | whil_ident cond_site cond_body? ELSE state_cond_body
    ;
expr_whil
    : whil_ident expr_whil_site cond_body? ELSE cond_body
    ;
expr_whil_site
    : LPAREN expression? SEMI expr_whil_return RPAREN
    ;
expr_whil_return
    : type_list COLON obj_ident (ASSIGN expression)?;  

    
/* return */
retur
    : RETURN LPAREN unbound_state? RPAREN SEMI
    ;
unbound_state
    : expression (COMMA expression)*
    ;   



cond_ident: IF;

func_ident: OBJ_IDENT;

whil_ident: WHILE;

obj_ident
    : OBJ_IDENT
//    | res_ident
    ;

prose: prose_ident;



type_list
    : type_ident (COMMA type_ident)*
    ;
type_ident: IDENT | OBJ_IDENT;
   
   
   
number
    : NUMBER
    | APOST uni_ident APOST
    ;
    
unres_ident
    : IDENT
    ;
    
res_ident
    : SWITCH
    | RETURN
    | IF
    | WHILE
    | FOR
    | ELSE
    | STRUCT
    ;
prose_ident
    : uni_ident
    | ESCAPED_PROSE
    | DDOT
    | DCOMM
    ;

uni_ident
    : res_ident
    | unres_ident
    | NUMBER
    | OBJ_IDENT
    ;
    
comment: LINE_COMMENT | BLOCK_COMMENT;

    
