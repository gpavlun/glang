import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";

import { Glang_parserVisitor } from "../generated/grammar/Glang_parserVisitor";
import { Glang_lexer } from "../generated/grammar/Glang_lexer";

import {
    Type_listContext,
    Func_siteContext,
    Func_callContext,
    Param_decl_itemContext,
    Obj_identContext,
    Cond_identContext,
    Expr_condContext,
    Stat_condContext,
    ReturContext,
    Expr_whilContext,
    Stat_whilContext,
    Whil_identContext,
    NumberContext
} from "../generated/grammar/Glang_parser";


export type GTokenType =
    | "type"
    | "primitive"
    | "modifier"
    | "keyword"
    | "function"
    | "parameter"
    | "variable"
    | "number"
    | "control"
    | "comment"
    ;


export interface GHighlight {
    start: number;
    length: number;
    type: GTokenType;
}


export class GSyntaxVisitor
    extends AbstractParseTreeVisitor<void>
    implements Glang_parserVisitor<void> {

    public readonly highlights: GHighlight[] = [];


    protected defaultResult(): void {
    }


    /*
     * Types
     *
     * type_list
     *     : IDENT (COMMA IDENT)*
     *     ;
     *
     * Every identifier here is a type name.
     *
     * This intentionally only catches IDENT. If you write:
     *
     *     while: foo;
     *
     * the `while` token is not an IDENT at the lexer level, so
     * the current grammar does not allow it as a type_list entry.
     */
    visitType_list(ctx: Type_listContext): void {
        for (const typeIdent of ctx.type_ident()) {
            const token = typeIdent.IDENT() ?? typeIdent.OBJ_IDENT();

            if (token) {
                this.highlight(token, "type");
            }
        }

        this.visitChildren(ctx);
    }



    /*
     * Function declarations / definitions
     *
     * func_site
     *     : func_ident LPAREN param_list? RPAREN
     *     ;
     *
     * The function name is highlighted as a function.
     */
    visitFunc_site(ctx: Func_siteContext): void {

        this.highlightToken(
            ctx.func_ident().start,
            "function"
        );

        this.visitChildren(ctx);
    }


    /*
     * Function calls
     *
     * func_call
     *     : IDENT LPAREN func_arg_list? RPAREN
     *     ;
     *
     * Unlike func_ident, calls currently require IDENT specifically.
     */
visitFunc_call(ctx: Func_callContext): void {
    this.highlight(
        ctx.func_ident().OBJ_IDENT(),
        "function"
    );

    this.visitChildren(ctx);
}



    visitParam_decl_item(
        ctx: Param_decl_itemContext
    ): void {

        const objIdent = ctx.obj_ident();
        let token: TerminalNode | undefined;

        if (objIdent.OBJ_IDENT()) {
            token = objIdent.OBJ_IDENT();
        }

        if (token) {
            this.highlight(token, "parameter");
        }

        this.visitChildren(ctx);
    }







    /*
     * Object / variable identifiers
     *
     * obj_ident
     *     : uni_ident
     *     ;
     *
     * uni_ident deliberately allows things such as IF, WHILE,
     * RETURN, etc. to be used as identifiers.
     *
     * Therefore we highlight the token according to this context,
     * rather than treating those lexer token types as keywords.
     */
    visitObj_ident(ctx: Obj_identContext): void {

        this.highlightToken(
            ctx.start,
            "variable"
        );

        this.visitChildren(ctx);
    }


    /*
     * Reserved condition identifier
     *
     * cond_ident
     *     : IF
     *     ;
     *
     * This is an actual language keyword use.
     */
    visitCond_ident(ctx: Cond_identContext): void {

        this.highlightToken(
            ctx.start,
            "control"
        );



        this.visitChildren(ctx);
    }


    /*
     * Conditional expression
     *
     * expr_cond
     *     : cond_ident cond_site expr_cond_body? ELSE expr_cond_body
     *     ;
     *
     * cond_ident is already highlighted by visitCond_ident().
     * ELSE is highlighted here because it does not have its own
     * parser rule.
     */
    visitExpr_cond(ctx: Expr_condContext): void {

        const elseToken = ctx.ELSE();

        if (elseToken) {
            this.highlight(
                elseToken,
                "control"
            );
        }

        this.visitChildren(ctx);
    }


    /*
     * Conditional statement
     *
     * stat_cond
     *     : cond_ident cond_site (state_cond_body|SEMI)
     *     ;
     *
     * cond_ident is handled by visitCond_ident().
     */
    visitStat_cond(ctx: Stat_condContext): void {
          const elseToken = ctx.ELSE();

        if (elseToken) {
            this.highlight(
                elseToken,
                "control"
            );
        }
        this.visitChildren(ctx);
    }



    // while loop (yes while has an else in this lang)

    visitWhil_ident(ctx: Whil_identContext): void {

        this.highlightToken(
            ctx.start,
            "control"
        );

        this.visitChildren(ctx);
    }

    visitExpr_whil(ctx: Expr_whilContext): void {
        const elseToken = ctx.ELSE();

        if (elseToken)
            this.highlight(elseToken,"control");

        this.visitChildren(ctx);
    }

    visitStat_whil(ctx: Stat_whilContext): void {
        this.visitChildren(ctx);
    }



    /*
     * Return statement
     *
     * retur
     *     : RETURN LPAREN unbound_state? RPAREN SEMI
     *     ;
     *
     * RETURN is only a keyword here. Elsewhere, because uni_ident
     * permits RETURN, it can be treated as an identifier.
     */
    visitRetur(ctx: ReturContext): void {

        this.highlight(
            ctx.RETURN(),
            "control"
        );

        this.visitChildren(ctx);
    }

    


    /*
     * Numbers
     *
     * NUMBER is not wrapped in a parser rule, so this is the one
     * place where we still need terminal-level inspection.
     *
     * We deliberately do NOT inspect IF/WHILE/FOR/RETURN here.
     * Their meaning comes from parser context.
     */
    visitTerminal(node: TerminalNode): void {

        if (node.symbol.type === Glang_lexer.NUMBER) {
            this.highlight(node, "number");
        }else if(
            node.symbol.type === Glang_lexer.LINE_COMMENT ||
            node.symbol.type === Glang_lexer.BLOCK_COMMENT
        ){
            this.highlight(node, "comment");
        }
    }


    visitNumber(ctx: NumberContext): void {
        const numberToken = ctx.NUMBER();

        if (numberToken) {
            this.highlight(
                numberToken,
                "number"
            );
        } else {
            const start = ctx.start;
            const stop = ctx.stop;

            if (start && stop) {
                this.highlights.push({
                    start: start.startIndex,
                    length: stop.stopIndex - start.startIndex + 1,
                    type: "number"
                });
            }
        }

        this.visitChildren(ctx);
    }


    /*
     * Highlight a parser terminal.
     */
    private highlight(
        node: TerminalNode,
        type: GTokenType
    ): void {

        if (!node.text) {
            return;
        }

        this.highlights.push({
            start: node.symbol.startIndex,
            length: node.text.length,
            type
        });
    }


    /*
     * Highlight the first token of a parser rule.
     *
     * Useful for wrapper rules such as:
     *
     *     obj_ident
     *     func_ident
     *
     * because their first token may be IDENT, RETURN, IF, etc.
     */
    private highlightToken(
    token: {
        startIndex: number;
        text?: string;
    },
    type: GTokenType
): void {

    if (!token.text) {
        return;
    }

    this.highlights.push({
        start: token.startIndex,
        length: token.text.length,
        type
    });
}
}