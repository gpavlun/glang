// Generated from grammar/Glang_parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./Glang_parser";
import { CategoryContext } from "./Glang_parser";
import { ElementContext } from "./Glang_parser";
import { Func_bodyContext } from "./Glang_parser";
import { Func_callContext } from "./Glang_parser";
import { Func_arg_listContext } from "./Glang_parser";
import { DeclarationContext } from "./Glang_parser";
import { Untyped_declContext } from "./Glang_parser";
import { Decl_scopeContext } from "./Glang_parser";
import { Decl_scope_bodyContext } from "./Glang_parser";
import { Obj_declContext } from "./Glang_parser";
import { Unt_obj_declContext } from "./Glang_parser";
import { Obj_decl_listContext } from "./Glang_parser";
import { Obj_decl_itemContext } from "./Glang_parser";
import { Func_declContext } from "./Glang_parser";
import { Unt_func_declContext } from "./Glang_parser";
import { Func_decl_listContext } from "./Glang_parser";
import { Func_defContext } from "./Glang_parser";
import { Unt_func_defContext } from "./Glang_parser";
import { Func_siteContext } from "./Glang_parser";
import { Param_listContext } from "./Glang_parser";
import { Param_declContext } from "./Glang_parser";
import { Param_decl_itemContext } from "./Glang_parser";
import { Struct_defContext } from "./Glang_parser";
import { Stuct_bodyContext } from "./Glang_parser";
import { Struct_declContext } from "./Glang_parser";
import { StatementContext } from "./Glang_parser";
import { ExpressionContext } from "./Glang_parser";
import { AssignmentContext } from "./Glang_parser";
import { Logical_orContext } from "./Glang_parser";
import { Logical_andContext } from "./Glang_parser";
import { Bitwise_orContext } from "./Glang_parser";
import { Bitwise_xorContext } from "./Glang_parser";
import { Bitwise_andContext } from "./Glang_parser";
import { EqualityContext } from "./Glang_parser";
import { RelationalContext } from "./Glang_parser";
import { AdditiveContext } from "./Glang_parser";
import { MultiplicativeContext } from "./Glang_parser";
import { PrimaryContext } from "./Glang_parser";
import { Resv_exprContext } from "./Glang_parser";
import { Resv_stateContext } from "./Glang_parser";
import { Stat_condContext } from "./Glang_parser";
import { Expr_condContext } from "./Glang_parser";
import { Cond_siteContext } from "./Glang_parser";
import { Cond_bodyContext } from "./Glang_parser";
import { State_cond_bodyContext } from "./Glang_parser";
import { Stat_whilContext } from "./Glang_parser";
import { Expr_whilContext } from "./Glang_parser";
import { Expr_whil_siteContext } from "./Glang_parser";
import { Expr_whil_returnContext } from "./Glang_parser";
import { ReturContext } from "./Glang_parser";
import { Unbound_stateContext } from "./Glang_parser";
import { Cond_identContext } from "./Glang_parser";
import { Func_identContext } from "./Glang_parser";
import { Whil_identContext } from "./Glang_parser";
import { Obj_identContext } from "./Glang_parser";
import { ProseContext } from "./Glang_parser";
import { Type_listContext } from "./Glang_parser";
import { Type_identContext } from "./Glang_parser";
import { NumberContext } from "./Glang_parser";
import { Unres_identContext } from "./Glang_parser";
import { Res_identContext } from "./Glang_parser";
import { Prose_identContext } from "./Glang_parser";
import { Uni_identContext } from "./Glang_parser";
import { CommentContext } from "./Glang_parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Glang_parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Glang_parserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Glang_parser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.category`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCategory?: (ctx: CategoryContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.func_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_body?: (ctx: Func_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.func_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_call?: (ctx: Func_callContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.func_arg_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_arg_list?: (ctx: Func_arg_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.untyped_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUntyped_decl?: (ctx: Untyped_declContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.decl_scope`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl_scope?: (ctx: Decl_scopeContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.decl_scope_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecl_scope_body?: (ctx: Decl_scope_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.obj_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj_decl?: (ctx: Obj_declContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.unt_obj_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnt_obj_decl?: (ctx: Unt_obj_declContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.obj_decl_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj_decl_list?: (ctx: Obj_decl_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.obj_decl_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj_decl_item?: (ctx: Obj_decl_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.func_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_decl?: (ctx: Func_declContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.unt_func_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnt_func_decl?: (ctx: Unt_func_declContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.func_decl_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_decl_list?: (ctx: Func_decl_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.func_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_def?: (ctx: Func_defContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.unt_func_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnt_func_def?: (ctx: Unt_func_defContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.func_site`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_site?: (ctx: Func_siteContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.param_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_list?: (ctx: Param_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.param_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_decl?: (ctx: Param_declContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.param_decl_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_decl_item?: (ctx: Param_decl_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.struct_def`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_def?: (ctx: Struct_defContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.stuct_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStuct_body?: (ctx: Stuct_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.struct_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStruct_decl?: (ctx: Struct_declContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.logical_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_or?: (ctx: Logical_orContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.logical_and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogical_and?: (ctx: Logical_andContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.bitwise_or`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_or?: (ctx: Bitwise_orContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.bitwise_xor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_xor?: (ctx: Bitwise_xorContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.bitwise_and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitwise_and?: (ctx: Bitwise_andContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.equality`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquality?: (ctx: EqualityContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.relational`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelational?: (ctx: RelationalContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.additive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditive?: (ctx: AdditiveContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.multiplicative`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicative?: (ctx: MultiplicativeContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.resv_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResv_expr?: (ctx: Resv_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.resv_state`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResv_state?: (ctx: Resv_stateContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.stat_cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_cond?: (ctx: Stat_condContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.expr_cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_cond?: (ctx: Expr_condContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.cond_site`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCond_site?: (ctx: Cond_siteContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.cond_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCond_body?: (ctx: Cond_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.state_cond_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitState_cond_body?: (ctx: State_cond_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.stat_whil`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStat_whil?: (ctx: Stat_whilContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.expr_whil`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_whil?: (ctx: Expr_whilContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.expr_whil_site`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_whil_site?: (ctx: Expr_whil_siteContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.expr_whil_return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_whil_return?: (ctx: Expr_whil_returnContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.retur`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRetur?: (ctx: ReturContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.unbound_state`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnbound_state?: (ctx: Unbound_stateContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.cond_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCond_ident?: (ctx: Cond_identContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.func_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_ident?: (ctx: Func_identContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.whil_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhil_ident?: (ctx: Whil_identContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.obj_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObj_ident?: (ctx: Obj_identContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.prose`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProse?: (ctx: ProseContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.type_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_list?: (ctx: Type_listContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.type_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType_ident?: (ctx: Type_identContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.unres_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnres_ident?: (ctx: Unres_identContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.res_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRes_ident?: (ctx: Res_identContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.prose_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProse_ident?: (ctx: Prose_identContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.uni_ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUni_ident?: (ctx: Uni_identContext) => Result;

	/**
	 * Visit a parse tree produced by `Glang_parser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;
}

