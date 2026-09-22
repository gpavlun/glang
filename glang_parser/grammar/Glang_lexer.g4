lexer grammar Glang_lexer;


// the prose helpers

DCOMM: ',,';
DDOT: '..';


COMMA: ',';
SEMI: ';';
COLON: ':';
DOT: '.';

LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
LBRACK: '[';
RBRACK: ']';




ARR: '->';
DPLUS: '++';
DMIN: '--';

PLUS: '+';
MINUS: '-';
STAR: '*';
SLASH: '/';
PERCENT: '%';

DAMP: '&&';
DPIPE: '||';
DCART: '^^';
AMP: '&';
PIPE: '|';
CARET: '^';

BANG: '!';
TILDE: '~';
QUEST: '?';

// assign symbols
ANDEQ: '&=';
OREQ: '|=';
XOREQ: '^=';

LSEQ: '<<=';
RSEQ: '>>=';
ADDEQ: '+=';
SUBEQ: '-=';
MULEQ: '*=';
DIVEQ: '/=';

LT: '<';
GT: '>';
LTE: '<=';
GTE: '>=';
EQ: '==';
NE: '!=';
ASSIGN: '=';
QUOTE: '"';
APOST: '\'';

BACKTICK: '`';

RETURN: 'return';
IF: 'if';
ELSE: 'else';
WHILE: 'while';
FOR: 'for';
SWITCH: 'switch';

STRUCT: 'struct';


LINE_COMMENT: '//' ~[\r\n]*;
BLOCK_COMMENT: '/*' .*? '*/';

WS: [ \t\r\n]+ -> channel(HIDDEN);

NUMBER: '-'? [0-9]+ ('.' [0-9]+)?;

OBJ_IDENT
    : [a-zA-Z0-9_#$]* [a-zA-Z_#$] [a-zA-Z0-9_#$]*
    ;
IDENT: [a-zA-Z0-9_#$]+;



ESCAPED_PROSE: '`' (~[`])* '`';

AT: '@';
HASH: '#';
BACKSLASH: '\\';