// Generated from grammar/Glang_parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `Glang_parser`.
 */
export interface Glang_parserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Glang_parser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.category`.
	 * @param ctx the parse tree
	 */
	enterCategory?: (ctx: CategoryContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.category`.
	 * @param ctx the parse tree
	 */
	exitCategory?: (ctx: CategoryContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.func_body`.
	 * @param ctx the parse tree
	 */
	enterFunc_body?: (ctx: Func_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.func_body`.
	 * @param ctx the parse tree
	 */
	exitFunc_body?: (ctx: Func_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.func_call`.
	 * @param ctx the parse tree
	 */
	enterFunc_call?: (ctx: Func_callContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.func_call`.
	 * @param ctx the parse tree
	 */
	exitFunc_call?: (ctx: Func_callContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.func_arg_list`.
	 * @param ctx the parse tree
	 */
	enterFunc_arg_list?: (ctx: Func_arg_listContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.func_arg_list`.
	 * @param ctx the parse tree
	 */
	exitFunc_arg_list?: (ctx: Func_arg_listContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.untyped_decl`.
	 * @param ctx the parse tree
	 */
	enterUntyped_decl?: (ctx: Untyped_declContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.untyped_decl`.
	 * @param ctx the parse tree
	 */
	exitUntyped_decl?: (ctx: Untyped_declContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.decl_scope`.
	 * @param ctx the parse tree
	 */
	enterDecl_scope?: (ctx: Decl_scopeContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.decl_scope`.
	 * @param ctx the parse tree
	 */
	exitDecl_scope?: (ctx: Decl_scopeContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.decl_scope_body`.
	 * @param ctx the parse tree
	 */
	enterDecl_scope_body?: (ctx: Decl_scope_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.decl_scope_body`.
	 * @param ctx the parse tree
	 */
	exitDecl_scope_body?: (ctx: Decl_scope_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.obj_decl`.
	 * @param ctx the parse tree
	 */
	enterObj_decl?: (ctx: Obj_declContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.obj_decl`.
	 * @param ctx the parse tree
	 */
	exitObj_decl?: (ctx: Obj_declContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.unt_obj_decl`.
	 * @param ctx the parse tree
	 */
	enterUnt_obj_decl?: (ctx: Unt_obj_declContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.unt_obj_decl`.
	 * @param ctx the parse tree
	 */
	exitUnt_obj_decl?: (ctx: Unt_obj_declContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.obj_decl_list`.
	 * @param ctx the parse tree
	 */
	enterObj_decl_list?: (ctx: Obj_decl_listContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.obj_decl_list`.
	 * @param ctx the parse tree
	 */
	exitObj_decl_list?: (ctx: Obj_decl_listContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.obj_decl_item`.
	 * @param ctx the parse tree
	 */
	enterObj_decl_item?: (ctx: Obj_decl_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.obj_decl_item`.
	 * @param ctx the parse tree
	 */
	exitObj_decl_item?: (ctx: Obj_decl_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.func_decl`.
	 * @param ctx the parse tree
	 */
	enterFunc_decl?: (ctx: Func_declContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.func_decl`.
	 * @param ctx the parse tree
	 */
	exitFunc_decl?: (ctx: Func_declContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.unt_func_decl`.
	 * @param ctx the parse tree
	 */
	enterUnt_func_decl?: (ctx: Unt_func_declContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.unt_func_decl`.
	 * @param ctx the parse tree
	 */
	exitUnt_func_decl?: (ctx: Unt_func_declContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.func_decl_list`.
	 * @param ctx the parse tree
	 */
	enterFunc_decl_list?: (ctx: Func_decl_listContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.func_decl_list`.
	 * @param ctx the parse tree
	 */
	exitFunc_decl_list?: (ctx: Func_decl_listContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.func_def`.
	 * @param ctx the parse tree
	 */
	enterFunc_def?: (ctx: Func_defContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.func_def`.
	 * @param ctx the parse tree
	 */
	exitFunc_def?: (ctx: Func_defContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.unt_func_def`.
	 * @param ctx the parse tree
	 */
	enterUnt_func_def?: (ctx: Unt_func_defContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.unt_func_def`.
	 * @param ctx the parse tree
	 */
	exitUnt_func_def?: (ctx: Unt_func_defContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.func_site`.
	 * @param ctx the parse tree
	 */
	enterFunc_site?: (ctx: Func_siteContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.func_site`.
	 * @param ctx the parse tree
	 */
	exitFunc_site?: (ctx: Func_siteContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.param_list`.
	 * @param ctx the parse tree
	 */
	enterParam_list?: (ctx: Param_listContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.param_list`.
	 * @param ctx the parse tree
	 */
	exitParam_list?: (ctx: Param_listContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.param_decl`.
	 * @param ctx the parse tree
	 */
	enterParam_decl?: (ctx: Param_declContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.param_decl`.
	 * @param ctx the parse tree
	 */
	exitParam_decl?: (ctx: Param_declContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.param_decl_item`.
	 * @param ctx the parse tree
	 */
	enterParam_decl_item?: (ctx: Param_decl_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.param_decl_item`.
	 * @param ctx the parse tree
	 */
	exitParam_decl_item?: (ctx: Param_decl_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.struct_def`.
	 * @param ctx the parse tree
	 */
	enterStruct_def?: (ctx: Struct_defContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.struct_def`.
	 * @param ctx the parse tree
	 */
	exitStruct_def?: (ctx: Struct_defContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.stuct_body`.
	 * @param ctx the parse tree
	 */
	enterStuct_body?: (ctx: Stuct_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.stuct_body`.
	 * @param ctx the parse tree
	 */
	exitStuct_body?: (ctx: Stuct_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.struct_decl`.
	 * @param ctx the parse tree
	 */
	enterStruct_decl?: (ctx: Struct_declContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.struct_decl`.
	 * @param ctx the parse tree
	 */
	exitStruct_decl?: (ctx: Struct_declContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.logical_or`.
	 * @param ctx the parse tree
	 */
	enterLogical_or?: (ctx: Logical_orContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.logical_or`.
	 * @param ctx the parse tree
	 */
	exitLogical_or?: (ctx: Logical_orContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.logical_and`.
	 * @param ctx the parse tree
	 */
	enterLogical_and?: (ctx: Logical_andContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.logical_and`.
	 * @param ctx the parse tree
	 */
	exitLogical_and?: (ctx: Logical_andContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.bitwise_or`.
	 * @param ctx the parse tree
	 */
	enterBitwise_or?: (ctx: Bitwise_orContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.bitwise_or`.
	 * @param ctx the parse tree
	 */
	exitBitwise_or?: (ctx: Bitwise_orContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.bitwise_xor`.
	 * @param ctx the parse tree
	 */
	enterBitwise_xor?: (ctx: Bitwise_xorContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.bitwise_xor`.
	 * @param ctx the parse tree
	 */
	exitBitwise_xor?: (ctx: Bitwise_xorContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.bitwise_and`.
	 * @param ctx the parse tree
	 */
	enterBitwise_and?: (ctx: Bitwise_andContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.bitwise_and`.
	 * @param ctx the parse tree
	 */
	exitBitwise_and?: (ctx: Bitwise_andContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.equality`.
	 * @param ctx the parse tree
	 */
	enterEquality?: (ctx: EqualityContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.equality`.
	 * @param ctx the parse tree
	 */
	exitEquality?: (ctx: EqualityContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.relational`.
	 * @param ctx the parse tree
	 */
	enterRelational?: (ctx: RelationalContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.relational`.
	 * @param ctx the parse tree
	 */
	exitRelational?: (ctx: RelationalContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.additive`.
	 * @param ctx the parse tree
	 */
	enterAdditive?: (ctx: AdditiveContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.additive`.
	 * @param ctx the parse tree
	 */
	exitAdditive?: (ctx: AdditiveContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.multiplicative`.
	 * @param ctx the parse tree
	 */
	enterMultiplicative?: (ctx: MultiplicativeContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.multiplicative`.
	 * @param ctx the parse tree
	 */
	exitMultiplicative?: (ctx: MultiplicativeContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.primary`.
	 * @param ctx the parse tree
	 */
	enterPrimary?: (ctx: PrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.primary`.
	 * @param ctx the parse tree
	 */
	exitPrimary?: (ctx: PrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.resv_expr`.
	 * @param ctx the parse tree
	 */
	enterResv_expr?: (ctx: Resv_exprContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.resv_expr`.
	 * @param ctx the parse tree
	 */
	exitResv_expr?: (ctx: Resv_exprContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.resv_state`.
	 * @param ctx the parse tree
	 */
	enterResv_state?: (ctx: Resv_stateContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.resv_state`.
	 * @param ctx the parse tree
	 */
	exitResv_state?: (ctx: Resv_stateContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.stat_cond`.
	 * @param ctx the parse tree
	 */
	enterStat_cond?: (ctx: Stat_condContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.stat_cond`.
	 * @param ctx the parse tree
	 */
	exitStat_cond?: (ctx: Stat_condContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.expr_cond`.
	 * @param ctx the parse tree
	 */
	enterExpr_cond?: (ctx: Expr_condContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.expr_cond`.
	 * @param ctx the parse tree
	 */
	exitExpr_cond?: (ctx: Expr_condContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.cond_site`.
	 * @param ctx the parse tree
	 */
	enterCond_site?: (ctx: Cond_siteContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.cond_site`.
	 * @param ctx the parse tree
	 */
	exitCond_site?: (ctx: Cond_siteContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.cond_body`.
	 * @param ctx the parse tree
	 */
	enterCond_body?: (ctx: Cond_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.cond_body`.
	 * @param ctx the parse tree
	 */
	exitCond_body?: (ctx: Cond_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.state_cond_body`.
	 * @param ctx the parse tree
	 */
	enterState_cond_body?: (ctx: State_cond_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.state_cond_body`.
	 * @param ctx the parse tree
	 */
	exitState_cond_body?: (ctx: State_cond_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.stat_whil`.
	 * @param ctx the parse tree
	 */
	enterStat_whil?: (ctx: Stat_whilContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.stat_whil`.
	 * @param ctx the parse tree
	 */
	exitStat_whil?: (ctx: Stat_whilContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.expr_whil`.
	 * @param ctx the parse tree
	 */
	enterExpr_whil?: (ctx: Expr_whilContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.expr_whil`.
	 * @param ctx the parse tree
	 */
	exitExpr_whil?: (ctx: Expr_whilContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.expr_whil_site`.
	 * @param ctx the parse tree
	 */
	enterExpr_whil_site?: (ctx: Expr_whil_siteContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.expr_whil_site`.
	 * @param ctx the parse tree
	 */
	exitExpr_whil_site?: (ctx: Expr_whil_siteContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.expr_whil_return`.
	 * @param ctx the parse tree
	 */
	enterExpr_whil_return?: (ctx: Expr_whil_returnContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.expr_whil_return`.
	 * @param ctx the parse tree
	 */
	exitExpr_whil_return?: (ctx: Expr_whil_returnContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.retur`.
	 * @param ctx the parse tree
	 */
	enterRetur?: (ctx: ReturContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.retur`.
	 * @param ctx the parse tree
	 */
	exitRetur?: (ctx: ReturContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.unbound_state`.
	 * @param ctx the parse tree
	 */
	enterUnbound_state?: (ctx: Unbound_stateContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.unbound_state`.
	 * @param ctx the parse tree
	 */
	exitUnbound_state?: (ctx: Unbound_stateContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.cond_ident`.
	 * @param ctx the parse tree
	 */
	enterCond_ident?: (ctx: Cond_identContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.cond_ident`.
	 * @param ctx the parse tree
	 */
	exitCond_ident?: (ctx: Cond_identContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.func_ident`.
	 * @param ctx the parse tree
	 */
	enterFunc_ident?: (ctx: Func_identContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.func_ident`.
	 * @param ctx the parse tree
	 */
	exitFunc_ident?: (ctx: Func_identContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.whil_ident`.
	 * @param ctx the parse tree
	 */
	enterWhil_ident?: (ctx: Whil_identContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.whil_ident`.
	 * @param ctx the parse tree
	 */
	exitWhil_ident?: (ctx: Whil_identContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.obj_ident`.
	 * @param ctx the parse tree
	 */
	enterObj_ident?: (ctx: Obj_identContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.obj_ident`.
	 * @param ctx the parse tree
	 */
	exitObj_ident?: (ctx: Obj_identContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.prose`.
	 * @param ctx the parse tree
	 */
	enterProse?: (ctx: ProseContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.prose`.
	 * @param ctx the parse tree
	 */
	exitProse?: (ctx: ProseContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.type_list`.
	 * @param ctx the parse tree
	 */
	enterType_list?: (ctx: Type_listContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.type_list`.
	 * @param ctx the parse tree
	 */
	exitType_list?: (ctx: Type_listContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.type_ident`.
	 * @param ctx the parse tree
	 */
	enterType_ident?: (ctx: Type_identContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.type_ident`.
	 * @param ctx the parse tree
	 */
	exitType_ident?: (ctx: Type_identContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.unres_ident`.
	 * @param ctx the parse tree
	 */
	enterUnres_ident?: (ctx: Unres_identContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.unres_ident`.
	 * @param ctx the parse tree
	 */
	exitUnres_ident?: (ctx: Unres_identContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.res_ident`.
	 * @param ctx the parse tree
	 */
	enterRes_ident?: (ctx: Res_identContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.res_ident`.
	 * @param ctx the parse tree
	 */
	exitRes_ident?: (ctx: Res_identContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.prose_ident`.
	 * @param ctx the parse tree
	 */
	enterProse_ident?: (ctx: Prose_identContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.prose_ident`.
	 * @param ctx the parse tree
	 */
	exitProse_ident?: (ctx: Prose_identContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.uni_ident`.
	 * @param ctx the parse tree
	 */
	enterUni_ident?: (ctx: Uni_identContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.uni_ident`.
	 * @param ctx the parse tree
	 */
	exitUni_ident?: (ctx: Uni_identContext) => void;

	/**
	 * Enter a parse tree produced by `Glang_parser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `Glang_parser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;
}

