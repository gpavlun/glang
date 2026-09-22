// Generated from grammar/Glang_parser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { Glang_parserListener } from "./Glang_parserListener";
import { Glang_parserVisitor } from "./Glang_parserVisitor";


export class Glang_parser extends Parser {
	public static readonly DCOMM = 1;
	public static readonly DDOT = 2;
	public static readonly COMMA = 3;
	public static readonly SEMI = 4;
	public static readonly COLON = 5;
	public static readonly DOT = 6;
	public static readonly LPAREN = 7;
	public static readonly RPAREN = 8;
	public static readonly LBRACE = 9;
	public static readonly RBRACE = 10;
	public static readonly LBRACK = 11;
	public static readonly RBRACK = 12;
	public static readonly ARR = 13;
	public static readonly DPLUS = 14;
	public static readonly DMIN = 15;
	public static readonly PLUS = 16;
	public static readonly MINUS = 17;
	public static readonly STAR = 18;
	public static readonly SLASH = 19;
	public static readonly PERCENT = 20;
	public static readonly DAMP = 21;
	public static readonly DPIPE = 22;
	public static readonly DCART = 23;
	public static readonly AMP = 24;
	public static readonly PIPE = 25;
	public static readonly CARET = 26;
	public static readonly BANG = 27;
	public static readonly TILDE = 28;
	public static readonly QUEST = 29;
	public static readonly ANDEQ = 30;
	public static readonly OREQ = 31;
	public static readonly XOREQ = 32;
	public static readonly LSEQ = 33;
	public static readonly RSEQ = 34;
	public static readonly ADDEQ = 35;
	public static readonly SUBEQ = 36;
	public static readonly MULEQ = 37;
	public static readonly DIVEQ = 38;
	public static readonly LT = 39;
	public static readonly GT = 40;
	public static readonly LTE = 41;
	public static readonly GTE = 42;
	public static readonly EQ = 43;
	public static readonly NE = 44;
	public static readonly ASSIGN = 45;
	public static readonly QUOTE = 46;
	public static readonly APOST = 47;
	public static readonly BACKTICK = 48;
	public static readonly RETURN = 49;
	public static readonly IF = 50;
	public static readonly ELSE = 51;
	public static readonly WHILE = 52;
	public static readonly FOR = 53;
	public static readonly SWITCH = 54;
	public static readonly STRUCT = 55;
	public static readonly LINE_COMMENT = 56;
	public static readonly BLOCK_COMMENT = 57;
	public static readonly WS = 58;
	public static readonly NUMBER = 59;
	public static readonly OBJ_IDENT = 60;
	public static readonly IDENT = 61;
	public static readonly ESCAPED_PROSE = 62;
	public static readonly AT = 63;
	public static readonly HASH = 64;
	public static readonly BACKSLASH = 65;
	public static readonly RULE_program = 0;
	public static readonly RULE_category = 1;
	public static readonly RULE_element = 2;
	public static readonly RULE_func_body = 3;
	public static readonly RULE_func_call = 4;
	public static readonly RULE_func_arg_list = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_untyped_decl = 7;
	public static readonly RULE_decl_scope = 8;
	public static readonly RULE_decl_scope_body = 9;
	public static readonly RULE_obj_decl = 10;
	public static readonly RULE_unt_obj_decl = 11;
	public static readonly RULE_obj_decl_list = 12;
	public static readonly RULE_obj_decl_item = 13;
	public static readonly RULE_func_decl = 14;
	public static readonly RULE_unt_func_decl = 15;
	public static readonly RULE_func_decl_list = 16;
	public static readonly RULE_func_def = 17;
	public static readonly RULE_unt_func_def = 18;
	public static readonly RULE_func_site = 19;
	public static readonly RULE_param_list = 20;
	public static readonly RULE_param_decl = 21;
	public static readonly RULE_param_decl_item = 22;
	public static readonly RULE_struct_def = 23;
	public static readonly RULE_stuct_body = 24;
	public static readonly RULE_struct_decl = 25;
	public static readonly RULE_statement = 26;
	public static readonly RULE_expression = 27;
	public static readonly RULE_assignment = 28;
	public static readonly RULE_logical_or = 29;
	public static readonly RULE_logical_and = 30;
	public static readonly RULE_bitwise_or = 31;
	public static readonly RULE_bitwise_xor = 32;
	public static readonly RULE_bitwise_and = 33;
	public static readonly RULE_equality = 34;
	public static readonly RULE_relational = 35;
	public static readonly RULE_additive = 36;
	public static readonly RULE_multiplicative = 37;
	public static readonly RULE_primary = 38;
	public static readonly RULE_resv_expr = 39;
	public static readonly RULE_resv_state = 40;
	public static readonly RULE_stat_cond = 41;
	public static readonly RULE_expr_cond = 42;
	public static readonly RULE_cond_site = 43;
	public static readonly RULE_cond_body = 44;
	public static readonly RULE_state_cond_body = 45;
	public static readonly RULE_stat_whil = 46;
	public static readonly RULE_expr_whil = 47;
	public static readonly RULE_expr_whil_site = 48;
	public static readonly RULE_expr_whil_return = 49;
	public static readonly RULE_retur = 50;
	public static readonly RULE_unbound_state = 51;
	public static readonly RULE_cond_ident = 52;
	public static readonly RULE_func_ident = 53;
	public static readonly RULE_whil_ident = 54;
	public static readonly RULE_obj_ident = 55;
	public static readonly RULE_prose = 56;
	public static readonly RULE_type_list = 57;
	public static readonly RULE_type_ident = 58;
	public static readonly RULE_number = 59;
	public static readonly RULE_unres_ident = 60;
	public static readonly RULE_res_ident = 61;
	public static readonly RULE_prose_ident = 62;
	public static readonly RULE_uni_ident = 63;
	public static readonly RULE_comment = 64;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "category", "element", "func_body", "func_call", "func_arg_list", 
		"declaration", "untyped_decl", "decl_scope", "decl_scope_body", "obj_decl", 
		"unt_obj_decl", "obj_decl_list", "obj_decl_item", "func_decl", "unt_func_decl", 
		"func_decl_list", "func_def", "unt_func_def", "func_site", "param_list", 
		"param_decl", "param_decl_item", "struct_def", "stuct_body", "struct_decl", 
		"statement", "expression", "assignment", "logical_or", "logical_and", 
		"bitwise_or", "bitwise_xor", "bitwise_and", "equality", "relational", 
		"additive", "multiplicative", "primary", "resv_expr", "resv_state", "stat_cond", 
		"expr_cond", "cond_site", "cond_body", "state_cond_body", "stat_whil", 
		"expr_whil", "expr_whil_site", "expr_whil_return", "retur", "unbound_state", 
		"cond_ident", "func_ident", "whil_ident", "obj_ident", "prose", "type_list", 
		"type_ident", "number", "unres_ident", "res_ident", "prose_ident", "uni_ident", 
		"comment",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "',,'", "'..'", "','", "';'", "':'", "'.'", "'('", "')'", "'{'", 
		"'}'", "'['", "']'", "'->'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", 
		"'%'", "'&&'", "'||'", "'^^'", "'&'", "'|'", "'^'", "'!'", "'~'", "'?'", 
		"'&='", "'|='", "'^='", "'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", 
		"'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'='", "'\"'", "'''", "'`'", 
		"'return'", "'if'", "'else'", "'while'", "'for'", "'switch'", "'struct'", 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		"'@'", "'#'", "'\\'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "DCOMM", "DDOT", "COMMA", "SEMI", "COLON", "DOT", "LPAREN", 
		"RPAREN", "LBRACE", "RBRACE", "LBRACK", "RBRACK", "ARR", "DPLUS", "DMIN", 
		"PLUS", "MINUS", "STAR", "SLASH", "PERCENT", "DAMP", "DPIPE", "DCART", 
		"AMP", "PIPE", "CARET", "BANG", "TILDE", "QUEST", "ANDEQ", "OREQ", "XOREQ", 
		"LSEQ", "RSEQ", "ADDEQ", "SUBEQ", "MULEQ", "DIVEQ", "LT", "GT", "LTE", 
		"GTE", "EQ", "NE", "ASSIGN", "QUOTE", "APOST", "BACKTICK", "RETURN", "IF", 
		"ELSE", "WHILE", "FOR", "SWITCH", "STRUCT", "LINE_COMMENT", "BLOCK_COMMENT", 
		"WS", "NUMBER", "OBJ_IDENT", "IDENT", "ESCAPED_PROSE", "AT", "HASH", "BACKSLASH",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(Glang_parser._LITERAL_NAMES, Glang_parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return Glang_parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Glang_parser.g4"; }

	// @Override
	public get ruleNames(): string[] { return Glang_parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return Glang_parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(Glang_parser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, Glang_parser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Glang_parser.DCOMM) | (1 << Glang_parser.DDOT) | (1 << Glang_parser.LPAREN))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.RETURN - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.ELSE - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.FOR - 47)) | (1 << (Glang_parser.SWITCH - 47)) | (1 << (Glang_parser.STRUCT - 47)) | (1 << (Glang_parser.LINE_COMMENT - 47)) | (1 << (Glang_parser.BLOCK_COMMENT - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)) | (1 << (Glang_parser.IDENT - 47)) | (1 << (Glang_parser.ESCAPED_PROSE - 47)))) !== 0)) {
				{
				{
				this.state = 130;
				this.category();
				}
				}
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 136;
			this.match(Glang_parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public category(): CategoryContext {
		let _localctx: CategoryContext = new CategoryContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, Glang_parser.RULE_category);
		try {
			this.state = 141;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 138;
				this.element();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 139;
				this.prose();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 140;
				this.comment();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, Glang_parser.RULE_element);
		try {
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 143;
				this.declaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 144;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_body(): Func_bodyContext {
		let _localctx: Func_bodyContext = new Func_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, Glang_parser.RULE_func_body);
		let _la: number;
		try {
			let _alt: number;
			this.state = 163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Glang_parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 147;
				this.match(Glang_parser.LBRACE);
				this.state = 151;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Glang_parser.DCOMM) | (1 << Glang_parser.DDOT) | (1 << Glang_parser.LPAREN))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.RETURN - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.ELSE - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.FOR - 47)) | (1 << (Glang_parser.SWITCH - 47)) | (1 << (Glang_parser.STRUCT - 47)) | (1 << (Glang_parser.LINE_COMMENT - 47)) | (1 << (Glang_parser.BLOCK_COMMENT - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)) | (1 << (Glang_parser.IDENT - 47)) | (1 << (Glang_parser.ESCAPED_PROSE - 47)))) !== 0)) {
					{
					{
					this.state = 148;
					this.category();
					}
					}
					this.state = 153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 154;
				this.match(Glang_parser.RBRACE);
				}
				break;
			case Glang_parser.LPAREN:
			case Glang_parser.APOST:
			case Glang_parser.RETURN:
			case Glang_parser.IF:
			case Glang_parser.WHILE:
			case Glang_parser.STRUCT:
			case Glang_parser.NUMBER:
			case Glang_parser.OBJ_IDENT:
			case Glang_parser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 155;
				this.element();
				this.state = 160;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 156;
						this.match(Glang_parser.COMMA);
						this.state = 157;
						this.element();
						}
						}
					}
					this.state = 162;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_call(): Func_callContext {
		let _localctx: Func_callContext = new Func_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, Glang_parser.RULE_func_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 165;
			this.func_ident();
			this.state = 166;
			this.match(Glang_parser.LPAREN);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Glang_parser.LPAREN || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)))) !== 0)) {
				{
				this.state = 167;
				this.func_arg_list();
				}
			}

			this.state = 170;
			this.match(Glang_parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_arg_list(): Func_arg_listContext {
		let _localctx: Func_arg_listContext = new Func_arg_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, Glang_parser.RULE_func_arg_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 172;
			this.expression();
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Glang_parser.COMMA) {
				{
				{
				this.state = 173;
				this.match(Glang_parser.COMMA);
				this.state = 174;
				this.expression();
				}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, Glang_parser.RULE_declaration);
		try {
			this.state = 186;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 180;
				this.decl_scope();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 181;
				this.obj_decl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 182;
				this.func_decl();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 183;
				this.struct_decl();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 184;
				this.func_def();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 185;
				this.struct_def();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public untyped_decl(): Untyped_declContext {
		let _localctx: Untyped_declContext = new Untyped_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, Glang_parser.RULE_untyped_decl);
		try {
			this.state = 191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.unt_obj_decl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
				this.unt_func_decl();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 190;
				this.unt_func_def();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decl_scope(): Decl_scopeContext {
		let _localctx: Decl_scopeContext = new Decl_scopeContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, Glang_parser.RULE_decl_scope);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.type_list();
			this.state = 194;
			this.match(Glang_parser.COLON);
			this.state = 195;
			this.decl_scope_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public decl_scope_body(): Decl_scope_bodyContext {
		let _localctx: Decl_scope_bodyContext = new Decl_scope_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, Glang_parser.RULE_decl_scope_body);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.match(Glang_parser.LBRACE);
			this.state = 203;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Glang_parser.DCOMM || _la === Glang_parser.DDOT || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (Glang_parser.RETURN - 49)) | (1 << (Glang_parser.IF - 49)) | (1 << (Glang_parser.ELSE - 49)) | (1 << (Glang_parser.WHILE - 49)) | (1 << (Glang_parser.FOR - 49)) | (1 << (Glang_parser.SWITCH - 49)) | (1 << (Glang_parser.STRUCT - 49)) | (1 << (Glang_parser.NUMBER - 49)) | (1 << (Glang_parser.OBJ_IDENT - 49)) | (1 << (Glang_parser.IDENT - 49)) | (1 << (Glang_parser.ESCAPED_PROSE - 49)))) !== 0)) {
				{
				this.state = 201;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 198;
					this.declaration();
					}
					break;

				case 2:
					{
					this.state = 199;
					this.untyped_decl();
					}
					break;

				case 3:
					{
					this.state = 200;
					this.prose();
					}
					break;
				}
				}
				this.state = 205;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 206;
			this.match(Glang_parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obj_decl(): Obj_declContext {
		let _localctx: Obj_declContext = new Obj_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, Glang_parser.RULE_obj_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 208;
			this.type_list();
			this.state = 209;
			this.match(Glang_parser.COLON);
			this.state = 210;
			this.obj_decl_list();
			this.state = 211;
			this.match(Glang_parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unt_obj_decl(): Unt_obj_declContext {
		let _localctx: Unt_obj_declContext = new Unt_obj_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, Glang_parser.RULE_unt_obj_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.obj_decl_list();
			this.state = 214;
			this.match(Glang_parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obj_decl_list(): Obj_decl_listContext {
		let _localctx: Obj_decl_listContext = new Obj_decl_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, Glang_parser.RULE_obj_decl_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 216;
			this.obj_decl_item();
			this.state = 221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Glang_parser.COMMA) {
				{
				{
				this.state = 217;
				this.match(Glang_parser.COMMA);
				this.state = 218;
				this.obj_decl_item();
				}
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obj_decl_item(): Obj_decl_itemContext {
		let _localctx: Obj_decl_itemContext = new Obj_decl_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, Glang_parser.RULE_obj_decl_item);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			this.obj_ident();
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Glang_parser.ASSIGN) {
				{
				this.state = 225;
				this.match(Glang_parser.ASSIGN);
				this.state = 226;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_decl(): Func_declContext {
		let _localctx: Func_declContext = new Func_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, Glang_parser.RULE_func_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.type_list();
			this.state = 230;
			this.match(Glang_parser.COLON);
			this.state = 231;
			this.func_decl_list();
			this.state = 232;
			this.match(Glang_parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unt_func_decl(): Unt_func_declContext {
		let _localctx: Unt_func_declContext = new Unt_func_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, Glang_parser.RULE_unt_func_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			this.func_decl_list();
			this.state = 235;
			this.match(Glang_parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_decl_list(): Func_decl_listContext {
		let _localctx: Func_decl_listContext = new Func_decl_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, Glang_parser.RULE_func_decl_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.func_site();
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Glang_parser.COMMA) {
				{
				{
				this.state = 238;
				this.match(Glang_parser.COMMA);
				this.state = 239;
				this.func_site();
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_def(): Func_defContext {
		let _localctx: Func_defContext = new Func_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, Glang_parser.RULE_func_def);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.type_list();
			this.state = 246;
			this.match(Glang_parser.COLON);
			this.state = 247;
			this.func_site();
			this.state = 248;
			this.func_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unt_func_def(): Unt_func_defContext {
		let _localctx: Unt_func_defContext = new Unt_func_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, Glang_parser.RULE_unt_func_def);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			this.func_site();
			this.state = 251;
			this.func_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_site(): Func_siteContext {
		let _localctx: Func_siteContext = new Func_siteContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, Glang_parser.RULE_func_site);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 253;
			this.func_ident();
			this.state = 254;
			this.match(Glang_parser.LPAREN);
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Glang_parser.OBJ_IDENT || _la === Glang_parser.IDENT) {
				{
				this.state = 255;
				this.param_list();
				}
			}

			this.state = 258;
			this.match(Glang_parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param_list(): Param_listContext {
		let _localctx: Param_listContext = new Param_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, Glang_parser.RULE_param_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.param_decl();
			this.state = 265;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Glang_parser.SEMI) {
				{
				{
				this.state = 261;
				this.match(Glang_parser.SEMI);
				this.state = 262;
				this.param_decl();
				}
				}
				this.state = 267;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param_decl(): Param_declContext {
		let _localctx: Param_declContext = new Param_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, Glang_parser.RULE_param_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 268;
			this.type_list();
			this.state = 269;
			this.match(Glang_parser.COLON);
			this.state = 270;
			this.param_decl_item();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public param_decl_item(): Param_decl_itemContext {
		let _localctx: Param_decl_itemContext = new Param_decl_itemContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, Glang_parser.RULE_param_decl_item);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 272;
			this.obj_ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_def(): Struct_defContext {
		let _localctx: Struct_defContext = new Struct_defContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, Glang_parser.RULE_struct_def);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 274;
			this.match(Glang_parser.STRUCT);
			this.state = 275;
			this.match(Glang_parser.COLON);
			this.state = 276;
			this.obj_ident();
			this.state = 277;
			this.stuct_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stuct_body(): Stuct_bodyContext {
		let _localctx: Stuct_bodyContext = new Stuct_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, Glang_parser.RULE_stuct_body);
		let _la: number;
		try {
			let _alt: number;
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Glang_parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.match(Glang_parser.LBRACE);
				this.state = 283;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 280;
						this.prose();
						}
						}
					}
					this.state = 285;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
				}
				this.state = 286;
				this.declaration();
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Glang_parser.DCOMM || _la === Glang_parser.DDOT || ((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (Glang_parser.RETURN - 49)) | (1 << (Glang_parser.IF - 49)) | (1 << (Glang_parser.ELSE - 49)) | (1 << (Glang_parser.WHILE - 49)) | (1 << (Glang_parser.FOR - 49)) | (1 << (Glang_parser.SWITCH - 49)) | (1 << (Glang_parser.STRUCT - 49)) | (1 << (Glang_parser.NUMBER - 49)) | (1 << (Glang_parser.OBJ_IDENT - 49)) | (1 << (Glang_parser.IDENT - 49)) | (1 << (Glang_parser.ESCAPED_PROSE - 49)))) !== 0)) {
					{
					this.state = 289;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						this.state = 287;
						this.prose();
						}
						break;

					case 2:
						{
						this.state = 288;
						this.declaration();
						}
						break;
					}
					}
					this.state = 293;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 294;
				this.match(Glang_parser.RBRACE);
				}
				break;
			case Glang_parser.STRUCT:
			case Glang_parser.OBJ_IDENT:
			case Glang_parser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 296;
				this.declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public struct_decl(): Struct_declContext {
		let _localctx: Struct_declContext = new Struct_declContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, Glang_parser.RULE_struct_decl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 299;
			this.match(Glang_parser.STRUCT);
			this.state = 300;
			this.match(Glang_parser.COLON);
			this.state = 301;
			this.obj_ident();
			this.state = 302;
			this.match(Glang_parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, Glang_parser.RULE_statement);
		let _la: number;
		try {
			this.state = 315;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 304;
				this.expression();
				this.state = 309;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === Glang_parser.COMMA) {
					{
					{
					this.state = 305;
					this.match(Glang_parser.COMMA);
					this.state = 306;
					this.expression();
					}
					}
					this.state = 311;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				this.state = 312;
				this.match(Glang_parser.SEMI);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 314;
				this.resv_state();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, Glang_parser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.assignment();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, Glang_parser.RULE_assignment);
		let _la: number;
		try {
			this.state = 324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 319;
				this.obj_ident();
				this.state = 320;
				_la = this._input.LA(1);
				if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (Glang_parser.ANDEQ - 30)) | (1 << (Glang_parser.OREQ - 30)) | (1 << (Glang_parser.XOREQ - 30)) | (1 << (Glang_parser.LSEQ - 30)) | (1 << (Glang_parser.RSEQ - 30)) | (1 << (Glang_parser.ADDEQ - 30)) | (1 << (Glang_parser.SUBEQ - 30)) | (1 << (Glang_parser.MULEQ - 30)) | (1 << (Glang_parser.DIVEQ - 30)) | (1 << (Glang_parser.ASSIGN - 30)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 321;
				this.assignment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 323;
				this.logical_or();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logical_or(): Logical_orContext {
		let _localctx: Logical_orContext = new Logical_orContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, Glang_parser.RULE_logical_or);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 326;
			this.logical_and();
			this.state = 331;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 327;
					this.match(Glang_parser.DPIPE);
					this.state = 328;
					this.logical_and();
					}
					}
				}
				this.state = 333;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 24, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public logical_and(): Logical_andContext {
		let _localctx: Logical_andContext = new Logical_andContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, Glang_parser.RULE_logical_and);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.bitwise_or();
			this.state = 339;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 335;
					this.match(Glang_parser.DAMP);
					this.state = 336;
					this.bitwise_or();
					}
					}
				}
				this.state = 341;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwise_or(): Bitwise_orContext {
		let _localctx: Bitwise_orContext = new Bitwise_orContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, Glang_parser.RULE_bitwise_or);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 342;
			this.bitwise_xor();
			this.state = 347;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 343;
					this.match(Glang_parser.PIPE);
					this.state = 344;
					this.bitwise_xor();
					}
					}
				}
				this.state = 349;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwise_xor(): Bitwise_xorContext {
		let _localctx: Bitwise_xorContext = new Bitwise_xorContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, Glang_parser.RULE_bitwise_xor);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.bitwise_and();
			this.state = 355;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 351;
					this.match(Glang_parser.CARET);
					this.state = 352;
					this.bitwise_and();
					}
					}
				}
				this.state = 357;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public bitwise_and(): Bitwise_andContext {
		let _localctx: Bitwise_andContext = new Bitwise_andContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, Glang_parser.RULE_bitwise_and);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 358;
			this.equality();
			this.state = 363;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 359;
					this.match(Glang_parser.AMP);
					this.state = 360;
					this.equality();
					}
					}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public equality(): EqualityContext {
		let _localctx: EqualityContext = new EqualityContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, Glang_parser.RULE_equality);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.relational();
			this.state = 371;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 367;
					_la = this._input.LA(1);
					if (!(_la === Glang_parser.EQ || _la === Glang_parser.NE)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 368;
					this.relational();
					}
					}
				}
				this.state = 373;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public relational(): RelationalContext {
		let _localctx: RelationalContext = new RelationalContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, Glang_parser.RULE_relational);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 374;
			this.additive();
			this.state = 379;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 375;
					_la = this._input.LA(1);
					if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (Glang_parser.LT - 39)) | (1 << (Glang_parser.GT - 39)) | (1 << (Glang_parser.LTE - 39)) | (1 << (Glang_parser.GTE - 39)))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 376;
					this.additive();
					}
					}
				}
				this.state = 381;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public additive(): AdditiveContext {
		let _localctx: AdditiveContext = new AdditiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, Glang_parser.RULE_additive);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 382;
			this.multiplicative();
			this.state = 387;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 383;
					_la = this._input.LA(1);
					if (!(_la === Glang_parser.PLUS || _la === Glang_parser.MINUS)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 384;
					this.multiplicative();
					}
					}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiplicative(): MultiplicativeContext {
		let _localctx: MultiplicativeContext = new MultiplicativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, Glang_parser.RULE_multiplicative);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.primary();
			this.state = 395;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 391;
					_la = this._input.LA(1);
					if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Glang_parser.STAR) | (1 << Glang_parser.SLASH) | (1 << Glang_parser.PERCENT))) !== 0))) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 392;
					this.primary();
					}
					}
				}
				this.state = 397;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public primary(): PrimaryContext {
		let _localctx: PrimaryContext = new PrimaryContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, Glang_parser.RULE_primary);
		try {
			this.state = 406;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 398;
				this.resv_expr();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 399;
				this.func_call();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 400;
				this.obj_ident();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 401;
				this.number();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 402;
				this.match(Glang_parser.LPAREN);
				this.state = 403;
				this.expression();
				this.state = 404;
				this.match(Glang_parser.RPAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resv_expr(): Resv_exprContext {
		let _localctx: Resv_exprContext = new Resv_exprContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, Glang_parser.RULE_resv_expr);
		try {
			this.state = 410;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Glang_parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 408;
				this.expr_cond();
				}
				break;
			case Glang_parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 409;
				this.expr_whil();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resv_state(): Resv_stateContext {
		let _localctx: Resv_stateContext = new Resv_stateContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, Glang_parser.RULE_resv_state);
		try {
			this.state = 415;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Glang_parser.IF:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 412;
				this.stat_cond();
				}
				break;
			case Glang_parser.WHILE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 413;
				this.stat_whil();
				}
				break;
			case Glang_parser.RETURN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 414;
				this.retur();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat_cond(): Stat_condContext {
		let _localctx: Stat_condContext = new Stat_condContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, Glang_parser.RULE_stat_cond);
		let _la: number;
		try {
			this.state = 429;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 417;
				this.cond_ident();
				this.state = 418;
				this.cond_site();
				this.state = 419;
				this.state_cond_body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 421;
				this.cond_ident();
				this.state = 422;
				this.cond_site();
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Glang_parser.LPAREN || _la === Glang_parser.LBRACE || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.RETURN - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)))) !== 0)) {
					{
					this.state = 423;
					this.cond_body();
					}
				}

				this.state = 426;
				this.match(Glang_parser.ELSE);
				this.state = 427;
				this.state_cond_body();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_cond(): Expr_condContext {
		let _localctx: Expr_condContext = new Expr_condContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, Glang_parser.RULE_expr_cond);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.cond_ident();
			this.state = 432;
			this.cond_site();
			this.state = 434;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Glang_parser.LPAREN || _la === Glang_parser.LBRACE || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.RETURN - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)))) !== 0)) {
				{
				this.state = 433;
				this.cond_body();
				}
			}

			this.state = 436;
			this.match(Glang_parser.ELSE);
			this.state = 437;
			this.cond_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cond_site(): Cond_siteContext {
		let _localctx: Cond_siteContext = new Cond_siteContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, Glang_parser.RULE_cond_site);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(Glang_parser.LPAREN);
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Glang_parser.LPAREN || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)))) !== 0)) {
				{
				this.state = 440;
				this.expression();
				}
			}

			this.state = 443;
			this.match(Glang_parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cond_body(): Cond_bodyContext {
		let _localctx: Cond_bodyContext = new Cond_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, Glang_parser.RULE_cond_body);
		let _la: number;
		try {
			let _alt: number;
			this.state = 464;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 445;
				this.match(Glang_parser.LBRACE);
				{
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 449;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
						while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
							if (_alt === 1) {
								{
								{
								this.state = 446;
								this.prose();
								}
								}
							}
							this.state = 451;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
						}
						this.state = 452;
						this.element();
						}
						}
					}
					this.state = 457;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
				}
				this.state = 459;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Glang_parser.LPAREN || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)))) !== 0)) {
					{
					this.state = 458;
					this.unbound_state();
					}
				}

				}
				this.state = 461;
				this.match(Glang_parser.RBRACE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 462;
				this.unbound_state();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 463;
				this.statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public state_cond_body(): State_cond_bodyContext {
		let _localctx: State_cond_bodyContext = new State_cond_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, Glang_parser.RULE_state_cond_body);
		let _la: number;
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Glang_parser.LBRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 466;
				this.match(Glang_parser.LBRACE);
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << Glang_parser.DCOMM) | (1 << Glang_parser.DDOT) | (1 << Glang_parser.LPAREN))) !== 0) || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.RETURN - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.ELSE - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.FOR - 47)) | (1 << (Glang_parser.SWITCH - 47)) | (1 << (Glang_parser.STRUCT - 47)) | (1 << (Glang_parser.LINE_COMMENT - 47)) | (1 << (Glang_parser.BLOCK_COMMENT - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)) | (1 << (Glang_parser.IDENT - 47)) | (1 << (Glang_parser.ESCAPED_PROSE - 47)))) !== 0)) {
					{
					{
					this.state = 467;
					this.category();
					}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 473;
				this.match(Glang_parser.RBRACE);
				}
				break;
			case Glang_parser.LPAREN:
			case Glang_parser.APOST:
			case Glang_parser.RETURN:
			case Glang_parser.IF:
			case Glang_parser.WHILE:
			case Glang_parser.NUMBER:
			case Glang_parser.OBJ_IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 474;
				this.statement();
				}
				break;
			case Glang_parser.SEMI:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 475;
				this.match(Glang_parser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stat_whil(): Stat_whilContext {
		let _localctx: Stat_whilContext = new Stat_whilContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, Glang_parser.RULE_stat_whil);
		let _la: number;
		try {
			this.state = 490;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 47, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 478;
				this.whil_ident();
				this.state = 479;
				this.cond_site();
				this.state = 480;
				this.state_cond_body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 482;
				this.whil_ident();
				this.state = 483;
				this.cond_site();
				this.state = 485;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === Glang_parser.LPAREN || _la === Glang_parser.LBRACE || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.RETURN - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)))) !== 0)) {
					{
					this.state = 484;
					this.cond_body();
					}
				}

				this.state = 487;
				this.match(Glang_parser.ELSE);
				this.state = 488;
				this.state_cond_body();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_whil(): Expr_whilContext {
		let _localctx: Expr_whilContext = new Expr_whilContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, Glang_parser.RULE_expr_whil);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.whil_ident();
			this.state = 493;
			this.expr_whil_site();
			this.state = 495;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Glang_parser.LPAREN || _la === Glang_parser.LBRACE || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.RETURN - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)))) !== 0)) {
				{
				this.state = 494;
				this.cond_body();
				}
			}

			this.state = 497;
			this.match(Glang_parser.ELSE);
			this.state = 498;
			this.cond_body();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_whil_site(): Expr_whil_siteContext {
		let _localctx: Expr_whil_siteContext = new Expr_whil_siteContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, Glang_parser.RULE_expr_whil_site);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 500;
			this.match(Glang_parser.LPAREN);
			this.state = 502;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Glang_parser.LPAREN || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)))) !== 0)) {
				{
				this.state = 501;
				this.expression();
				}
			}

			this.state = 504;
			this.match(Glang_parser.SEMI);
			this.state = 505;
			this.expr_whil_return();
			this.state = 506;
			this.match(Glang_parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expr_whil_return(): Expr_whil_returnContext {
		let _localctx: Expr_whil_returnContext = new Expr_whil_returnContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, Glang_parser.RULE_expr_whil_return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 508;
			this.type_list();
			this.state = 509;
			this.match(Glang_parser.COLON);
			this.state = 510;
			this.obj_ident();
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Glang_parser.ASSIGN) {
				{
				this.state = 511;
				this.match(Glang_parser.ASSIGN);
				this.state = 512;
				this.expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public retur(): ReturContext {
		let _localctx: ReturContext = new ReturContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, Glang_parser.RULE_retur);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 515;
			this.match(Glang_parser.RETURN);
			this.state = 516;
			this.match(Glang_parser.LPAREN);
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === Glang_parser.LPAREN || ((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (Glang_parser.APOST - 47)) | (1 << (Glang_parser.IF - 47)) | (1 << (Glang_parser.WHILE - 47)) | (1 << (Glang_parser.NUMBER - 47)) | (1 << (Glang_parser.OBJ_IDENT - 47)))) !== 0)) {
				{
				this.state = 517;
				this.unbound_state();
				}
			}

			this.state = 520;
			this.match(Glang_parser.RPAREN);
			this.state = 521;
			this.match(Glang_parser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unbound_state(): Unbound_stateContext {
		let _localctx: Unbound_stateContext = new Unbound_stateContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, Glang_parser.RULE_unbound_state);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.expression();
			this.state = 528;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 524;
					this.match(Glang_parser.COMMA);
					this.state = 525;
					this.expression();
					}
					}
				}
				this.state = 530;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cond_ident(): Cond_identContext {
		let _localctx: Cond_identContext = new Cond_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, Glang_parser.RULE_cond_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.match(Glang_parser.IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public func_ident(): Func_identContext {
		let _localctx: Func_identContext = new Func_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, Glang_parser.RULE_func_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.match(Glang_parser.OBJ_IDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whil_ident(): Whil_identContext {
		let _localctx: Whil_identContext = new Whil_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, Glang_parser.RULE_whil_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this.match(Glang_parser.WHILE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public obj_ident(): Obj_identContext {
		let _localctx: Obj_identContext = new Obj_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, Glang_parser.RULE_obj_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 537;
			this.match(Glang_parser.OBJ_IDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prose(): ProseContext {
		let _localctx: ProseContext = new ProseContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, Glang_parser.RULE_prose);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 539;
			this.prose_ident();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_list(): Type_listContext {
		let _localctx: Type_listContext = new Type_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, Glang_parser.RULE_type_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.type_ident();
			this.state = 546;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === Glang_parser.COMMA) {
				{
				{
				this.state = 542;
				this.match(Glang_parser.COMMA);
				this.state = 543;
				this.type_ident();
				}
				}
				this.state = 548;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type_ident(): Type_identContext {
		let _localctx: Type_identContext = new Type_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, Glang_parser.RULE_type_ident);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			_la = this._input.LA(1);
			if (!(_la === Glang_parser.OBJ_IDENT || _la === Glang_parser.IDENT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, Glang_parser.RULE_number);
		try {
			this.state = 556;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Glang_parser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 551;
				this.match(Glang_parser.NUMBER);
				}
				break;
			case Glang_parser.APOST:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 552;
				this.match(Glang_parser.APOST);
				this.state = 553;
				this.uni_ident();
				this.state = 554;
				this.match(Glang_parser.APOST);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unres_ident(): Unres_identContext {
		let _localctx: Unres_identContext = new Unres_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, Glang_parser.RULE_unres_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 558;
			this.match(Glang_parser.IDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public res_ident(): Res_identContext {
		let _localctx: Res_identContext = new Res_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, Glang_parser.RULE_res_ident);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			_la = this._input.LA(1);
			if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (Glang_parser.RETURN - 49)) | (1 << (Glang_parser.IF - 49)) | (1 << (Glang_parser.ELSE - 49)) | (1 << (Glang_parser.WHILE - 49)) | (1 << (Glang_parser.FOR - 49)) | (1 << (Glang_parser.SWITCH - 49)) | (1 << (Glang_parser.STRUCT - 49)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prose_ident(): Prose_identContext {
		let _localctx: Prose_identContext = new Prose_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, Glang_parser.RULE_prose_ident);
		try {
			this.state = 566;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Glang_parser.RETURN:
			case Glang_parser.IF:
			case Glang_parser.ELSE:
			case Glang_parser.WHILE:
			case Glang_parser.FOR:
			case Glang_parser.SWITCH:
			case Glang_parser.STRUCT:
			case Glang_parser.NUMBER:
			case Glang_parser.OBJ_IDENT:
			case Glang_parser.IDENT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 562;
				this.uni_ident();
				}
				break;
			case Glang_parser.ESCAPED_PROSE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 563;
				this.match(Glang_parser.ESCAPED_PROSE);
				}
				break;
			case Glang_parser.DDOT:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 564;
				this.match(Glang_parser.DDOT);
				}
				break;
			case Glang_parser.DCOMM:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 565;
				this.match(Glang_parser.DCOMM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public uni_ident(): Uni_identContext {
		let _localctx: Uni_identContext = new Uni_identContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, Glang_parser.RULE_uni_ident);
		try {
			this.state = 572;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case Glang_parser.RETURN:
			case Glang_parser.IF:
			case Glang_parser.ELSE:
			case Glang_parser.WHILE:
			case Glang_parser.FOR:
			case Glang_parser.SWITCH:
			case Glang_parser.STRUCT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 568;
				this.res_ident();
				}
				break;
			case Glang_parser.IDENT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 569;
				this.unres_ident();
				}
				break;
			case Glang_parser.NUMBER:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 570;
				this.match(Glang_parser.NUMBER);
				}
				break;
			case Glang_parser.OBJ_IDENT:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 571;
				this.match(Glang_parser.OBJ_IDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, Glang_parser.RULE_comment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			_la = this._input.LA(1);
			if (!(_la === Glang_parser.LINE_COMMENT || _la === Glang_parser.BLOCK_COMMENT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03C\u0243\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x03\x02\x07\x02\x86\n\x02" +
		"\f\x02\x0E\x02\x89\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x05\x03" +
		"\x90\n\x03\x03\x04\x03\x04\x05\x04\x94\n\x04\x03\x05\x03\x05\x07\x05\x98" +
		"\n\x05\f\x05\x0E\x05\x9B\v\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05" +
		"\xA1\n\x05\f\x05\x0E\x05\xA4\v\x05\x05\x05\xA6\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\xAB\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07" +
		"\xB2\n\x07\f\x07\x0E\x07\xB5\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b" +
		"\x05\b\xBD\n\b\x03\t\x03\t\x03\t\x05\t\xC2\n\t\x03\n\x03\n\x03\n\x03\n" +
		"\x03\v\x03\v\x03\v\x03\v\x07\v\xCC\n\v\f\v\x0E\v\xCF\v\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x07" +
		"\x0E\xDE\n\x0E\f\x0E\x0E\x0E\xE1\v\x0E\x03\x0F\x03\x0F\x03\x0F\x05\x0F" +
		"\xE6\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x07\x12\xF3\n\x12\f\x12\x0E\x12\xF6\v\x12" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15" +
		"\x03\x15\x03\x15\x05\x15\u0103\n\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03" +
		"\x16\x07\x16\u010A\n\x16\f\x16\x0E\x16\u010D\v\x16\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x03\x19\x03" +
		"\x1A\x03\x1A\x07\x1A\u011C\n\x1A\f\x1A\x0E\x1A\u011F\v\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x07\x1A\u0124\n\x1A\f\x1A\x0E\x1A\u0127\v\x1A\x03\x1A\x03" +
		"\x1A\x03\x1A\x05\x1A\u012C\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1C\x03\x1C\x03\x1C\x07\x1C\u0136\n\x1C\f\x1C\x0E\x1C\u0139\v\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u013E\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0147\n\x1E\x03\x1F\x03\x1F\x03\x1F" +
		"\x07\x1F\u014C\n\x1F\f\x1F\x0E\x1F\u014F\v\x1F\x03 \x03 \x03 \x07 \u0154" +
		"\n \f \x0E \u0157\v \x03!\x03!\x03!\x07!\u015C\n!\f!\x0E!\u015F\v!\x03" +
		"\"\x03\"\x03\"\x07\"\u0164\n\"\f\"\x0E\"\u0167\v\"\x03#\x03#\x03#\x07" +
		"#\u016C\n#\f#\x0E#\u016F\v#\x03$\x03$\x03$\x07$\u0174\n$\f$\x0E$\u0177" +
		"\v$\x03%\x03%\x03%\x07%\u017C\n%\f%\x0E%\u017F\v%\x03&\x03&\x03&\x07&" +
		"\u0184\n&\f&\x0E&\u0187\v&\x03\'\x03\'\x03\'\x07\'\u018C\n\'\f\'\x0E\'" +
		"\u018F\v\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05(\u0199\n(\x03)" +
		"\x03)\x05)\u019D\n)\x03*\x03*\x03*\x05*\u01A2\n*\x03+\x03+\x03+\x03+\x03" +
		"+\x03+\x03+\x05+\u01AB\n+\x03+\x03+\x03+\x05+\u01B0\n+\x03,\x03,\x03," +
		"\x05,\u01B5\n,\x03,\x03,\x03,\x03-\x03-\x05-\u01BC\n-\x03-\x03-\x03.\x03" +
		".\x07.\u01C2\n.\f.\x0E.\u01C5\v.\x03.\x07.\u01C8\n.\f.\x0E.\u01CB\v.\x03" +
		".\x05.\u01CE\n.\x03.\x03.\x03.\x05.\u01D3\n.\x03/\x03/\x07/\u01D7\n/\f" +
		"/\x0E/\u01DA\v/\x03/\x03/\x03/\x05/\u01DF\n/\x030\x030\x030\x030\x030" +
		"\x030\x030\x050\u01E8\n0\x030\x030\x030\x050\u01ED\n0\x031\x031\x031\x05" +
		"1\u01F2\n1\x031\x031\x031\x032\x032\x052\u01F9\n2\x032\x032\x032\x032" +
		"\x033\x033\x033\x033\x033\x053\u0204\n3\x034\x034\x034\x054\u0209\n4\x03" +
		"4\x034\x034\x035\x035\x035\x075\u0211\n5\f5\x0E5\u0214\v5\x036\x036\x03" +
		"7\x037\x038\x038\x039\x039\x03:\x03:\x03;\x03;\x03;\x07;\u0223\n;\f;\x0E" +
		";\u0226\v;\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x05=\u022F\n=\x03>\x03>" +
		"\x03?\x03?\x03@\x03@\x03@\x03@\x05@\u0239\n@\x03A\x03A\x03A\x03A\x05A" +
		"\u023F\nA\x03B\x03B\x03B\x02\x02\x02C\x02\x02\x04\x02\x06\x02\b\x02\n" +
		"\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026" +
		"\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02" +
		"R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02" +
		"n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x02\n\x04" +
		"\x02 (//\x03\x02-.\x03\x02),\x03\x02\x12\x13\x03\x02\x14\x16\x03\x02>" +
		"?\x03\x0239\x03\x02:;\x02\u024B\x02\x87\x03\x02\x02\x02\x04\x8F\x03\x02" +
		"\x02\x02\x06\x93\x03\x02\x02\x02\b\xA5\x03\x02\x02\x02\n\xA7\x03\x02\x02" +
		"\x02\f\xAE\x03\x02\x02\x02\x0E\xBC\x03\x02\x02\x02\x10\xC1\x03\x02\x02" +
		"\x02\x12\xC3\x03\x02\x02\x02\x14\xC7\x03\x02\x02\x02\x16\xD2\x03\x02\x02" +
		"\x02\x18\xD7\x03\x02\x02\x02\x1A\xDA\x03\x02\x02\x02\x1C\xE2\x03\x02\x02" +
		"\x02\x1E\xE7\x03\x02\x02\x02 \xEC\x03\x02\x02\x02\"\xEF\x03\x02\x02\x02" +
		"$\xF7\x03\x02\x02\x02&\xFC\x03\x02\x02\x02(\xFF\x03\x02\x02\x02*\u0106" +
		"\x03\x02\x02\x02,\u010E\x03\x02\x02\x02.\u0112\x03\x02\x02\x020\u0114" +
		"\x03\x02\x02\x022\u012B\x03\x02\x02\x024\u012D\x03\x02\x02\x026\u013D" +
		"\x03\x02\x02\x028\u013F\x03\x02\x02\x02:\u0146\x03\x02\x02\x02<\u0148" +
		"\x03\x02\x02\x02>\u0150\x03\x02\x02\x02@\u0158\x03\x02\x02\x02B\u0160" +
		"\x03\x02\x02\x02D\u0168\x03\x02\x02\x02F\u0170\x03\x02\x02\x02H\u0178" +
		"\x03\x02\x02\x02J\u0180\x03\x02\x02\x02L\u0188\x03\x02\x02\x02N\u0198" +
		"\x03\x02\x02\x02P\u019C\x03\x02\x02\x02R\u01A1\x03\x02\x02\x02T\u01AF" +
		"\x03\x02\x02\x02V\u01B1\x03\x02\x02\x02X\u01B9\x03\x02\x02\x02Z\u01D2" +
		"\x03\x02\x02\x02\\\u01DE\x03\x02\x02\x02^\u01EC\x03\x02\x02\x02`\u01EE" +
		"\x03\x02\x02\x02b\u01F6\x03\x02\x02\x02d\u01FE\x03\x02\x02\x02f\u0205" +
		"\x03\x02\x02\x02h\u020D\x03\x02\x02\x02j\u0215\x03\x02\x02\x02l\u0217" +
		"\x03\x02\x02\x02n\u0219\x03\x02\x02\x02p\u021B\x03\x02\x02\x02r\u021D" +
		"\x03\x02\x02\x02t\u021F\x03\x02\x02\x02v\u0227\x03\x02\x02\x02x\u022E" +
		"\x03\x02\x02\x02z\u0230\x03\x02\x02\x02|\u0232\x03\x02\x02\x02~\u0238" +
		"\x03\x02\x02\x02\x80\u023E\x03\x02\x02\x02\x82\u0240\x03\x02\x02\x02\x84" +
		"\x86\x05\x04\x03\x02\x85\x84\x03\x02\x02\x02\x86\x89\x03\x02\x02\x02\x87" +
		"\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8A\x03\x02\x02\x02\x89" +
		"\x87\x03\x02\x02\x02\x8A\x8B\x07\x02\x02\x03\x8B\x03\x03\x02\x02\x02\x8C" +
		"\x90\x05\x06\x04\x02\x8D\x90\x05r:\x02\x8E\x90\x05\x82B\x02\x8F\x8C\x03" +
		"\x02\x02\x02\x8F\x8D\x03\x02\x02\x02\x8F\x8E\x03\x02\x02\x02\x90\x05\x03" +
		"\x02\x02\x02\x91\x94\x05\x0E\b\x02\x92\x94\x056\x1C\x02\x93\x91\x03\x02" +
		"\x02\x02\x93\x92\x03\x02\x02\x02\x94\x07\x03\x02\x02\x02\x95\x99\x07\v" +
		"\x02\x02\x96\x98\x05\x04\x03\x02\x97\x96\x03\x02\x02\x02\x98\x9B\x03\x02" +
		"\x02\x02\x99\x97\x03\x02\x02\x02\x99\x9A\x03\x02\x02\x02\x9A\x9C\x03\x02" +
		"\x02\x02\x9B\x99\x03\x02\x02\x02\x9C\xA6\x07\f\x02\x02\x9D\xA2\x05\x06" +
		"\x04\x02\x9E\x9F\x07\x05\x02\x02\x9F\xA1\x05\x06\x04\x02\xA0\x9E\x03\x02" +
		"\x02\x02\xA1\xA4\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA3\x03\x02" +
		"\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02\xA5\x95\x03\x02" +
		"\x02\x02\xA5\x9D\x03\x02\x02\x02\xA6\t\x03\x02\x02\x02\xA7\xA8\x05l7\x02" +
		"\xA8\xAA\x07\t\x02\x02\xA9\xAB\x05\f\x07\x02\xAA\xA9\x03\x02\x02\x02\xAA" +
		"\xAB\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAD\x07\n\x02\x02\xAD" +
		"\v\x03\x02\x02\x02\xAE\xB3\x058\x1D\x02\xAF\xB0\x07\x05\x02\x02\xB0\xB2" +
		"\x058\x1D\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB5\x03\x02\x02\x02\xB3\xB1" +
		"\x03\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\r\x03\x02\x02\x02\xB5\xB3" +
		"\x03\x02\x02\x02\xB6\xBD\x05\x12\n\x02\xB7\xBD\x05\x16\f\x02\xB8\xBD\x05" +
		"\x1E\x10\x02\xB9\xBD\x054\x1B\x02\xBA\xBD\x05$\x13\x02\xBB\xBD\x050\x19" +
		"\x02\xBC\xB6\x03\x02\x02\x02\xBC\xB7\x03\x02\x02\x02\xBC\xB8\x03\x02\x02" +
		"\x02\xBC\xB9\x03\x02\x02\x02\xBC\xBA\x03\x02\x02\x02\xBC\xBB\x03\x02\x02" +
		"\x02\xBD\x0F\x03\x02\x02\x02\xBE\xC2\x05\x18\r\x02\xBF\xC2\x05 \x11\x02" +
		"\xC0\xC2\x05&\x14\x02\xC1\xBE\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02" +
		"\xC1\xC0\x03\x02\x02\x02\xC2\x11\x03\x02\x02\x02\xC3\xC4\x05t;\x02\xC4" +
		"\xC5\x07\x07\x02\x02\xC5\xC6\x05\x14\v\x02\xC6\x13\x03\x02\x02\x02\xC7" +
		"\xCD\x07\v\x02\x02\xC8\xCC\x05\x0E\b\x02\xC9\xCC\x05\x10\t\x02\xCA\xCC" +
		"\x05r:\x02\xCB\xC8\x03\x02\x02\x02\xCB\xC9\x03\x02\x02\x02\xCB\xCA\x03" +
		"\x02\x02\x02\xCC\xCF\x03\x02\x02\x02\xCD\xCB\x03\x02\x02\x02\xCD\xCE\x03" +
		"\x02\x02\x02\xCE\xD0\x03\x02\x02\x02\xCF\xCD\x03\x02\x02\x02\xD0\xD1\x07" +
		"\f\x02\x02\xD1\x15\x03\x02\x02\x02\xD2\xD3\x05t;\x02\xD3\xD4\x07\x07\x02" +
		"\x02\xD4\xD5\x05\x1A\x0E\x02\xD5\xD6\x07\x06\x02\x02\xD6\x17\x03\x02\x02" +
		"\x02\xD7\xD8\x05\x1A\x0E\x02\xD8\xD9\x07\x06\x02\x02\xD9\x19\x03\x02\x02" +
		"\x02\xDA\xDF\x05\x1C\x0F\x02\xDB\xDC\x07\x05\x02\x02\xDC\xDE\x05\x1C\x0F" +
		"\x02\xDD\xDB\x03\x02\x02\x02\xDE\xE1\x03\x02\x02\x02\xDF\xDD\x03\x02\x02" +
		"\x02\xDF\xE0\x03\x02\x02\x02\xE0\x1B\x03\x02\x02\x02\xE1\xDF\x03\x02\x02" +
		"\x02\xE2\xE5\x05p9\x02\xE3\xE4\x07/\x02\x02\xE4\xE6\x058\x1D\x02\xE5\xE3" +
		"\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\x1D\x03\x02\x02\x02\xE7\xE8" +
		"\x05t;\x02\xE8\xE9\x07\x07\x02\x02\xE9\xEA\x05\"\x12\x02\xEA\xEB\x07\x06" +
		"\x02\x02\xEB\x1F\x03\x02\x02\x02\xEC\xED\x05\"\x12\x02\xED\xEE\x07\x06" +
		"\x02\x02\xEE!\x03\x02\x02\x02\xEF\xF4\x05(\x15\x02\xF0\xF1\x07\x05\x02" +
		"\x02\xF1\xF3\x05(\x15\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF6\x03\x02\x02" +
		"\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5#\x03\x02\x02" +
		"\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF8\x05t;\x02\xF8\xF9\x07\x07\x02\x02" +
		"\xF9\xFA\x05(\x15\x02\xFA\xFB\x05\b\x05\x02\xFB%\x03\x02\x02\x02\xFC\xFD" +
		"\x05(\x15\x02\xFD\xFE\x05\b\x05\x02\xFE\'\x03\x02\x02\x02\xFF\u0100\x05" +
		"l7\x02\u0100\u0102\x07\t\x02\x02\u0101\u0103\x05*\x16\x02\u0102\u0101" +
		"\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0104\x03\x02\x02\x02" +
		"\u0104\u0105\x07\n\x02\x02\u0105)\x03\x02\x02\x02\u0106\u010B\x05,\x17" +
		"\x02\u0107\u0108\x07\x06\x02\x02\u0108\u010A\x05,\x17\x02\u0109\u0107" +
		"\x03\x02\x02\x02\u010A\u010D\x03\x02\x02\x02\u010B\u0109\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C+\x03\x02\x02\x02\u010D\u010B\x03\x02" +
		"\x02\x02\u010E\u010F\x05t;\x02\u010F\u0110\x07\x07\x02\x02\u0110\u0111" +
		"\x05.\x18\x02\u0111-\x03\x02\x02\x02\u0112\u0113\x05p9\x02\u0113/\x03" +
		"\x02\x02\x02\u0114\u0115\x079\x02\x02\u0115\u0116\x07\x07\x02\x02\u0116" +
		"\u0117\x05p9\x02\u0117\u0118\x052\x1A\x02\u01181\x03\x02\x02\x02\u0119" +
		"\u011D\x07\v\x02\x02\u011A\u011C\x05r:\x02\u011B\u011A\x03\x02\x02\x02" +
		"\u011C\u011F\x03\x02\x02\x02\u011D\u011B\x03\x02\x02\x02\u011D\u011E\x03" +
		"\x02\x02\x02\u011E\u0120\x03\x02\x02\x02\u011F\u011D\x03\x02\x02\x02\u0120" +
		"\u0125\x05\x0E\b\x02\u0121\u0124\x05r:\x02\u0122\u0124\x05\x0E\b\x02\u0123" +
		"\u0121\x03\x02\x02\x02\u0123\u0122\x03\x02\x02\x02\u0124\u0127\x03\x02" +
		"\x02\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126" +
		"\u0128\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0128\u0129\x07\f\x02" +
		"\x02\u0129\u012C\x03\x02\x02\x02\u012A\u012C\x05\x0E\b\x02\u012B\u0119" +
		"\x03\x02\x02\x02\u012B\u012A\x03\x02\x02\x02\u012C3\x03\x02\x02\x02\u012D" +
		"\u012E\x079\x02\x02\u012E\u012F\x07\x07\x02\x02\u012F\u0130\x05p9\x02" +
		"\u0130\u0131\x07\x06\x02\x02\u01315\x03\x02\x02\x02\u0132\u0137\x058\x1D" +
		"\x02\u0133\u0134\x07\x05\x02\x02\u0134\u0136\x058\x1D\x02\u0135\u0133" +
		"\x03\x02\x02\x02\u0136\u0139\x03\x02\x02\x02\u0137\u0135\x03\x02\x02\x02" +
		"\u0137\u0138\x03\x02\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u0137\x03" +
		"\x02\x02\x02\u013A\u013B\x07\x06\x02\x02\u013B\u013E\x03\x02\x02\x02\u013C" +
		"\u013E\x05R*\x02\u013D\u0132\x03\x02\x02\x02\u013D\u013C\x03\x02\x02\x02" +
		"\u013E7\x03\x02\x02\x02\u013F\u0140\x05:\x1E\x02\u01409\x03\x02\x02\x02" +
		"\u0141\u0142\x05p9\x02\u0142\u0143\t\x02\x02\x02\u0143\u0144\x05:\x1E" +
		"\x02\u0144\u0147\x03\x02\x02\x02\u0145\u0147\x05<\x1F\x02\u0146\u0141" +
		"\x03\x02\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147;\x03\x02\x02\x02\u0148" +
		"\u014D\x05> \x02\u0149\u014A\x07\x18\x02\x02\u014A\u014C\x05> \x02\u014B" +
		"\u0149\x03\x02\x02\x02\u014C\u014F\x03\x02\x02\x02\u014D\u014B\x03\x02" +
		"\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E=\x03\x02\x02\x02\u014F\u014D" +
		"\x03\x02\x02\x02\u0150\u0155\x05@!\x02\u0151\u0152\x07\x17\x02\x02\u0152" +
		"\u0154\x05@!\x02\u0153\u0151\x03\x02\x02\x02\u0154\u0157\x03\x02\x02\x02" +
		"\u0155\u0153\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156?\x03\x02" +
		"\x02\x02\u0157\u0155\x03\x02\x02\x02\u0158\u015D\x05B\"\x02\u0159\u015A" +
		"\x07\x1B\x02\x02\u015A\u015C\x05B\"\x02\u015B\u0159\x03\x02\x02\x02\u015C" +
		"\u015F\x03\x02\x02\x02\u015D\u015B\x03\x02\x02\x02\u015D\u015E\x03\x02" +
		"\x02\x02\u015EA\x03\x02\x02\x02\u015F\u015D\x03\x02\x02\x02\u0160\u0165" +
		"\x05D#\x02\u0161\u0162\x07\x1C\x02\x02\u0162\u0164\x05D#\x02\u0163\u0161" +
		"\x03\x02\x02\x02\u0164\u0167\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02" +
		"\u0165\u0166\x03\x02\x02\x02\u0166C\x03\x02\x02\x02\u0167\u0165\x03\x02" +
		"\x02\x02\u0168\u016D\x05F$\x02\u0169\u016A\x07\x1A\x02\x02\u016A\u016C" +
		"\x05F$\x02\u016B\u0169\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D" +
		"\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02\x02\x02\u016EE\x03\x02\x02" +
		"\x02\u016F\u016D\x03\x02\x02\x02\u0170\u0175\x05H%\x02\u0171\u0172\t\x03" +
		"\x02\x02\u0172\u0174\x05H%\x02\u0173\u0171\x03\x02\x02\x02\u0174\u0177" +
		"\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02" +
		"\u0176G\x03\x02\x02\x02\u0177\u0175\x03\x02\x02\x02\u0178\u017D\x05J&" +
		"\x02\u0179\u017A\t\x04\x02\x02\u017A\u017C\x05J&\x02\u017B\u0179\x03\x02" +
		"\x02\x02\u017C\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D" +
		"\u017E\x03\x02\x02\x02\u017EI\x03\x02\x02\x02\u017F\u017D\x03\x02\x02" +
		"\x02\u0180\u0185\x05L\'\x02\u0181\u0182\t\x05\x02\x02\u0182\u0184\x05" +
		"L\'\x02\u0183\u0181\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185" +
		"\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186K\x03\x02\x02" +
		"\x02\u0187\u0185\x03\x02\x02\x02\u0188\u018D\x05N(\x02\u0189\u018A\t\x06" +
		"\x02\x02\u018A\u018C\x05N(\x02\u018B\u0189\x03\x02\x02\x02\u018C\u018F" +
		"\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02" +
		"\u018EM\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190\u0199\x05P)" +
		"\x02\u0191\u0199\x05\n\x06\x02\u0192\u0199\x05p9\x02\u0193\u0199\x05x" +
		"=\x02\u0194\u0195\x07\t\x02\x02\u0195\u0196\x058\x1D\x02\u0196\u0197\x07" +
		"\n\x02\x02\u0197\u0199\x03\x02\x02\x02\u0198\u0190\x03\x02\x02\x02\u0198" +
		"\u0191\x03\x02\x02\x02\u0198\u0192\x03\x02\x02\x02\u0198\u0193\x03\x02" +
		"\x02\x02\u0198\u0194\x03\x02\x02\x02\u0199O\x03\x02\x02\x02\u019A\u019D" +
		"\x05V,\x02\u019B\u019D\x05`1\x02\u019C\u019A\x03\x02\x02\x02\u019C\u019B" +
		"\x03\x02\x02\x02\u019DQ\x03\x02\x02\x02\u019E\u01A2\x05T+\x02\u019F\u01A2" +
		"\x05^0\x02\u01A0\u01A2\x05f4\x02\u01A1\u019E\x03\x02\x02\x02\u01A1\u019F" +
		"\x03\x02\x02\x02\u01A1\u01A0\x03\x02\x02\x02\u01A2S\x03\x02\x02\x02\u01A3" +
		"\u01A4\x05j6\x02\u01A4\u01A5\x05X-\x02\u01A5\u01A6\x05\\/\x02\u01A6\u01B0" +
		"\x03\x02\x02\x02\u01A7\u01A8\x05j6\x02\u01A8\u01AA\x05X-\x02\u01A9\u01AB" +
		"\x05Z.\x02\u01AA\u01A9\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB" +
		"\u01AC\x03\x02\x02\x02\u01AC\u01AD\x075\x02\x02\u01AD\u01AE\x05\\/\x02" +
		"\u01AE\u01B0\x03\x02\x02\x02\u01AF\u01A3\x03\x02\x02\x02\u01AF\u01A7\x03" +
		"\x02\x02\x02\u01B0U\x03\x02\x02\x02\u01B1\u01B2\x05j6\x02\u01B2\u01B4" +
		"\x05X-\x02\u01B3\u01B5\x05Z.\x02\u01B4\u01B3\x03\x02\x02\x02\u01B4\u01B5" +
		"\x03\x02\x02\x02\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B7\x075\x02\x02" +
		"\u01B7\u01B8\x05Z.\x02\u01B8W\x03\x02\x02\x02\u01B9\u01BB\x07\t\x02\x02" +
		"\u01BA\u01BC\x058\x1D\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03" +
		"\x02\x02\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x07\n\x02\x02\u01BE" +
		"Y\x03\x02\x02\x02\u01BF\u01C9\x07\v\x02\x02\u01C0\u01C2\x05r:\x02\u01C1" +
		"\u01C0\x03\x02\x02\x02\u01C2\u01C5\x03\x02\x02\x02\u01C3\u01C1\x03\x02" +
		"\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C6\x03\x02\x02\x02\u01C5" +
		"\u01C3\x03\x02\x02\x02\u01C6\u01C8\x05\x06\x04\x02\u01C7\u01C3\x03\x02" +
		"\x02\x02\u01C8\u01CB\x03\x02\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01C9" +
		"\u01CA\x03\x02\x02\x02\u01CA\u01CD\x03\x02\x02\x02\u01CB\u01C9\x03\x02" +
		"\x02\x02\u01CC\u01CE\x05h5\x02\u01CD\u01CC\x03\x02\x02\x02\u01CD\u01CE" +
		"\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D3\x07\f\x02\x02" +
		"\u01D0\u01D3\x05h5\x02\u01D1\u01D3\x056\x1C\x02\u01D2\u01BF\x03\x02\x02" +
		"\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D1\x03\x02\x02\x02\u01D3[\x03" +
		"\x02\x02\x02\u01D4\u01D8\x07\v\x02\x02\u01D5\u01D7\x05\x04\x03\x02\u01D6" +
		"\u01D5\x03\x02\x02\x02\u01D7\u01DA\x03\x02\x02\x02\u01D8\u01D6\x03\x02" +
		"\x02\x02\u01D8\u01D9\x03\x02\x02\x02\u01D9\u01DB\x03\x02\x02\x02\u01DA" +
		"\u01D8\x03\x02\x02\x02\u01DB\u01DF\x07\f\x02\x02\u01DC\u01DF\x056\x1C" +
		"\x02\u01DD\u01DF\x07\x06\x02\x02\u01DE\u01D4\x03\x02\x02\x02\u01DE\u01DC" +
		"\x03\x02\x02\x02\u01DE\u01DD\x03\x02\x02\x02\u01DF]\x03\x02\x02\x02\u01E0" +
		"\u01E1\x05n8\x02\u01E1\u01E2\x05X-\x02\u01E2\u01E3\x05\\/\x02\u01E3\u01ED" +
		"\x03\x02\x02\x02\u01E4\u01E5\x05n8\x02\u01E5\u01E7\x05X-\x02\u01E6\u01E8" +
		"\x05Z.\x02\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8" +
		"\u01E9\x03\x02\x02\x02\u01E9\u01EA\x075\x02\x02\u01EA\u01EB\x05\\/\x02" +
		"\u01EB\u01ED\x03\x02\x02\x02\u01EC\u01E0\x03\x02\x02\x02\u01EC\u01E4\x03" +
		"\x02\x02\x02\u01ED_\x03\x02\x02\x02\u01EE\u01EF\x05n8\x02\u01EF\u01F1" +
		"\x05b2\x02\u01F0\u01F2\x05Z.\x02\u01F1\u01F0\x03\x02\x02\x02\u01F1\u01F2" +
		"\x03\x02\x02\x02\u01F2\u01F3\x03\x02\x02\x02\u01F3\u01F4\x075\x02\x02" +
		"\u01F4\u01F5\x05Z.\x02\u01F5a\x03\x02\x02\x02\u01F6\u01F8\x07\t\x02\x02" +
		"\u01F7\u01F9\x058\x1D\x02\u01F8\u01F7\x03\x02\x02\x02\u01F8\u01F9\x03" +
		"\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FA\u01FB\x07\x06\x02\x02\u01FB" +
		"\u01FC\x05d3\x02\u01FC\u01FD\x07\n\x02\x02\u01FDc\x03\x02\x02\x02\u01FE" +
		"\u01FF\x05t;\x02\u01FF\u0200\x07\x07\x02\x02\u0200\u0203\x05p9\x02\u0201" +
		"\u0202\x07/\x02\x02\u0202\u0204\x058\x1D\x02\u0203\u0201\x03\x02\x02\x02" +
		"\u0203\u0204\x03\x02\x02\x02\u0204e\x03\x02\x02\x02\u0205\u0206\x073\x02" +
		"\x02\u0206\u0208\x07\t\x02\x02\u0207\u0209\x05h5\x02\u0208\u0207\x03\x02" +
		"\x02\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020A\x03\x02\x02\x02\u020A" +
		"\u020B\x07\n\x02\x02\u020B\u020C\x07\x06\x02\x02\u020Cg\x03\x02\x02\x02" +
		"\u020D\u0212\x058\x1D\x02\u020E\u020F\x07\x05\x02\x02\u020F\u0211\x05" +
		"8\x1D\x02\u0210\u020E\x03\x02\x02\x02\u0211\u0214\x03\x02\x02\x02\u0212" +
		"\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02\x02\x02\u0213i\x03\x02\x02" +
		"\x02\u0214\u0212\x03\x02\x02\x02\u0215\u0216\x074\x02\x02\u0216k\x03\x02" +
		"\x02\x02\u0217\u0218\x07>\x02\x02\u0218m\x03\x02\x02\x02\u0219\u021A\x07" +
		"6\x02\x02\u021Ao\x03\x02\x02\x02\u021B\u021C\x07>\x02\x02\u021Cq\x03\x02" +
		"\x02\x02\u021D\u021E\x05~@\x02\u021Es\x03\x02\x02\x02\u021F\u0224\x05" +
		"v<\x02\u0220\u0221\x07\x05\x02\x02\u0221\u0223\x05v<\x02\u0222\u0220\x03" +
		"\x02\x02\x02\u0223\u0226\x03\x02\x02\x02\u0224\u0222\x03\x02\x02\x02\u0224" +
		"\u0225\x03\x02\x02\x02\u0225u\x03\x02\x02\x02\u0226\u0224\x03\x02\x02" +
		"\x02\u0227\u0228\t\x07\x02\x02\u0228w\x03\x02\x02\x02\u0229\u022F\x07" +
		"=\x02\x02\u022A\u022B\x071\x02\x02\u022B\u022C\x05\x80A\x02\u022C\u022D" +
		"\x071\x02\x02\u022D\u022F\x03\x02\x02\x02\u022E\u0229\x03\x02\x02\x02" +
		"\u022E\u022A\x03\x02\x02\x02\u022Fy\x03\x02\x02\x02\u0230\u0231\x07?\x02" +
		"\x02\u0231{\x03\x02\x02\x02\u0232\u0233\t\b\x02\x02\u0233}\x03\x02\x02" +
		"\x02\u0234\u0239\x05\x80A\x02\u0235\u0239\x07@\x02\x02\u0236\u0239\x07" +
		"\x04\x02\x02\u0237\u0239\x07\x03\x02\x02\u0238\u0234\x03\x02\x02\x02\u0238" +
		"\u0235\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0237\x03\x02" +
		"\x02\x02\u0239\x7F\x03\x02\x02\x02\u023A\u023F\x05|?\x02\u023B\u023F\x05" +
		"z>\x02\u023C\u023F\x07=\x02\x02\u023D\u023F\x07>\x02\x02\u023E\u023A\x03" +
		"\x02\x02\x02\u023E\u023B\x03\x02\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E" +
		"\u023D\x03\x02\x02\x02\u023F\x81\x03\x02\x02\x02\u0240\u0241\t\t\x02\x02" +
		"\u0241\x83\x03\x02\x02\x02;\x87\x8F\x93\x99\xA2\xA5\xAA\xB3\xBC\xC1\xCB" +
		"\xCD\xDF\xE5\xF4\u0102\u010B\u011D\u0123\u0125\u012B\u0137\u013D\u0146" +
		"\u014D\u0155\u015D\u0165\u016D\u0175\u017D\u0185\u018D\u0198\u019C\u01A1" +
		"\u01AA\u01AF\u01B4\u01BB\u01C3\u01C9\u01CD\u01D2\u01D8\u01DE\u01E7\u01EC" +
		"\u01F1\u01F8\u0203\u0208\u0212\u0224\u022E\u0238\u023E";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!Glang_parser.__ATN) {
			Glang_parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(Glang_parser._serializedATN));
		}

		return Glang_parser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(Glang_parser.EOF, 0); }
	public category(): CategoryContext[];
	public category(i: number): CategoryContext;
	public category(i?: number): CategoryContext | CategoryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CategoryContext);
		} else {
			return this.getRuleContext(i, CategoryContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_program; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CategoryContext extends ParserRuleContext {
	public element(): ElementContext | undefined {
		return this.tryGetRuleContext(0, ElementContext);
	}
	public prose(): ProseContext | undefined {
		return this.tryGetRuleContext(0, ProseContext);
	}
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_category; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterCategory) {
			listener.enterCategory(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitCategory) {
			listener.exitCategory(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitCategory) {
			return visitor.visitCategory(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_element; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_bodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.RBRACE, 0); }
	public category(): CategoryContext[];
	public category(i: number): CategoryContext;
	public category(i?: number): CategoryContext | CategoryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CategoryContext);
		} else {
			return this.getRuleContext(i, CategoryContext);
		}
	}
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.COMMA);
		} else {
			return this.getToken(Glang_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_func_body; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterFunc_body) {
			listener.enterFunc_body(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitFunc_body) {
			listener.exitFunc_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitFunc_body) {
			return visitor.visitFunc_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_callContext extends ParserRuleContext {
	public func_ident(): Func_identContext {
		return this.getRuleContext(0, Func_identContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Glang_parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Glang_parser.RPAREN, 0); }
	public func_arg_list(): Func_arg_listContext | undefined {
		return this.tryGetRuleContext(0, Func_arg_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_func_call; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterFunc_call) {
			listener.enterFunc_call(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitFunc_call) {
			listener.exitFunc_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitFunc_call) {
			return visitor.visitFunc_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_arg_listContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.COMMA);
		} else {
			return this.getToken(Glang_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_func_arg_list; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterFunc_arg_list) {
			listener.enterFunc_arg_list(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitFunc_arg_list) {
			listener.exitFunc_arg_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitFunc_arg_list) {
			return visitor.visitFunc_arg_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public decl_scope(): Decl_scopeContext | undefined {
		return this.tryGetRuleContext(0, Decl_scopeContext);
	}
	public obj_decl(): Obj_declContext | undefined {
		return this.tryGetRuleContext(0, Obj_declContext);
	}
	public func_decl(): Func_declContext | undefined {
		return this.tryGetRuleContext(0, Func_declContext);
	}
	public struct_decl(): Struct_declContext | undefined {
		return this.tryGetRuleContext(0, Struct_declContext);
	}
	public func_def(): Func_defContext | undefined {
		return this.tryGetRuleContext(0, Func_defContext);
	}
	public struct_def(): Struct_defContext | undefined {
		return this.tryGetRuleContext(0, Struct_defContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_declaration; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Untyped_declContext extends ParserRuleContext {
	public unt_obj_decl(): Unt_obj_declContext | undefined {
		return this.tryGetRuleContext(0, Unt_obj_declContext);
	}
	public unt_func_decl(): Unt_func_declContext | undefined {
		return this.tryGetRuleContext(0, Unt_func_declContext);
	}
	public unt_func_def(): Unt_func_defContext | undefined {
		return this.tryGetRuleContext(0, Unt_func_defContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_untyped_decl; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterUntyped_decl) {
			listener.enterUntyped_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitUntyped_decl) {
			listener.exitUntyped_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitUntyped_decl) {
			return visitor.visitUntyped_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Decl_scopeContext extends ParserRuleContext {
	public type_list(): Type_listContext {
		return this.getRuleContext(0, Type_listContext);
	}
	public COLON(): TerminalNode { return this.getToken(Glang_parser.COLON, 0); }
	public decl_scope_body(): Decl_scope_bodyContext {
		return this.getRuleContext(0, Decl_scope_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_decl_scope; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterDecl_scope) {
			listener.enterDecl_scope(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitDecl_scope) {
			listener.exitDecl_scope(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitDecl_scope) {
			return visitor.visitDecl_scope(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Decl_scope_bodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode { return this.getToken(Glang_parser.LBRACE, 0); }
	public RBRACE(): TerminalNode { return this.getToken(Glang_parser.RBRACE, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public untyped_decl(): Untyped_declContext[];
	public untyped_decl(i: number): Untyped_declContext;
	public untyped_decl(i?: number): Untyped_declContext | Untyped_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Untyped_declContext);
		} else {
			return this.getRuleContext(i, Untyped_declContext);
		}
	}
	public prose(): ProseContext[];
	public prose(i: number): ProseContext;
	public prose(i?: number): ProseContext | ProseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProseContext);
		} else {
			return this.getRuleContext(i, ProseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_decl_scope_body; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterDecl_scope_body) {
			listener.enterDecl_scope_body(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitDecl_scope_body) {
			listener.exitDecl_scope_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitDecl_scope_body) {
			return visitor.visitDecl_scope_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Obj_declContext extends ParserRuleContext {
	public type_list(): Type_listContext {
		return this.getRuleContext(0, Type_listContext);
	}
	public COLON(): TerminalNode { return this.getToken(Glang_parser.COLON, 0); }
	public obj_decl_list(): Obj_decl_listContext {
		return this.getRuleContext(0, Obj_decl_listContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Glang_parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_obj_decl; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterObj_decl) {
			listener.enterObj_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitObj_decl) {
			listener.exitObj_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitObj_decl) {
			return visitor.visitObj_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unt_obj_declContext extends ParserRuleContext {
	public obj_decl_list(): Obj_decl_listContext {
		return this.getRuleContext(0, Obj_decl_listContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Glang_parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_unt_obj_decl; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterUnt_obj_decl) {
			listener.enterUnt_obj_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitUnt_obj_decl) {
			listener.exitUnt_obj_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitUnt_obj_decl) {
			return visitor.visitUnt_obj_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Obj_decl_listContext extends ParserRuleContext {
	public obj_decl_item(): Obj_decl_itemContext[];
	public obj_decl_item(i: number): Obj_decl_itemContext;
	public obj_decl_item(i?: number): Obj_decl_itemContext | Obj_decl_itemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Obj_decl_itemContext);
		} else {
			return this.getRuleContext(i, Obj_decl_itemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.COMMA);
		} else {
			return this.getToken(Glang_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_obj_decl_list; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterObj_decl_list) {
			listener.enterObj_decl_list(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitObj_decl_list) {
			listener.exitObj_decl_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitObj_decl_list) {
			return visitor.visitObj_decl_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Obj_decl_itemContext extends ParserRuleContext {
	public obj_ident(): Obj_identContext {
		return this.getRuleContext(0, Obj_identContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_obj_decl_item; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterObj_decl_item) {
			listener.enterObj_decl_item(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitObj_decl_item) {
			listener.exitObj_decl_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitObj_decl_item) {
			return visitor.visitObj_decl_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_declContext extends ParserRuleContext {
	public type_list(): Type_listContext {
		return this.getRuleContext(0, Type_listContext);
	}
	public COLON(): TerminalNode { return this.getToken(Glang_parser.COLON, 0); }
	public func_decl_list(): Func_decl_listContext {
		return this.getRuleContext(0, Func_decl_listContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Glang_parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_func_decl; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterFunc_decl) {
			listener.enterFunc_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitFunc_decl) {
			listener.exitFunc_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitFunc_decl) {
			return visitor.visitFunc_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unt_func_declContext extends ParserRuleContext {
	public func_decl_list(): Func_decl_listContext {
		return this.getRuleContext(0, Func_decl_listContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Glang_parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_unt_func_decl; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterUnt_func_decl) {
			listener.enterUnt_func_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitUnt_func_decl) {
			listener.exitUnt_func_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitUnt_func_decl) {
			return visitor.visitUnt_func_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_decl_listContext extends ParserRuleContext {
	public func_site(): Func_siteContext[];
	public func_site(i: number): Func_siteContext;
	public func_site(i?: number): Func_siteContext | Func_siteContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Func_siteContext);
		} else {
			return this.getRuleContext(i, Func_siteContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.COMMA);
		} else {
			return this.getToken(Glang_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_func_decl_list; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterFunc_decl_list) {
			listener.enterFunc_decl_list(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitFunc_decl_list) {
			listener.exitFunc_decl_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitFunc_decl_list) {
			return visitor.visitFunc_decl_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_defContext extends ParserRuleContext {
	public type_list(): Type_listContext {
		return this.getRuleContext(0, Type_listContext);
	}
	public COLON(): TerminalNode { return this.getToken(Glang_parser.COLON, 0); }
	public func_site(): Func_siteContext {
		return this.getRuleContext(0, Func_siteContext);
	}
	public func_body(): Func_bodyContext {
		return this.getRuleContext(0, Func_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_func_def; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterFunc_def) {
			listener.enterFunc_def(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitFunc_def) {
			listener.exitFunc_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitFunc_def) {
			return visitor.visitFunc_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unt_func_defContext extends ParserRuleContext {
	public func_site(): Func_siteContext {
		return this.getRuleContext(0, Func_siteContext);
	}
	public func_body(): Func_bodyContext {
		return this.getRuleContext(0, Func_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_unt_func_def; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterUnt_func_def) {
			listener.enterUnt_func_def(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitUnt_func_def) {
			listener.exitUnt_func_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitUnt_func_def) {
			return visitor.visitUnt_func_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_siteContext extends ParserRuleContext {
	public func_ident(): Func_identContext {
		return this.getRuleContext(0, Func_identContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(Glang_parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Glang_parser.RPAREN, 0); }
	public param_list(): Param_listContext | undefined {
		return this.tryGetRuleContext(0, Param_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_func_site; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterFunc_site) {
			listener.enterFunc_site(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitFunc_site) {
			listener.exitFunc_site(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitFunc_site) {
			return visitor.visitFunc_site(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_listContext extends ParserRuleContext {
	public param_decl(): Param_declContext[];
	public param_decl(i: number): Param_declContext;
	public param_decl(i?: number): Param_declContext | Param_declContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Param_declContext);
		} else {
			return this.getRuleContext(i, Param_declContext);
		}
	}
	public SEMI(): TerminalNode[];
	public SEMI(i: number): TerminalNode;
	public SEMI(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.SEMI);
		} else {
			return this.getToken(Glang_parser.SEMI, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_param_list; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterParam_list) {
			listener.enterParam_list(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitParam_list) {
			listener.exitParam_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitParam_list) {
			return visitor.visitParam_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_declContext extends ParserRuleContext {
	public type_list(): Type_listContext {
		return this.getRuleContext(0, Type_listContext);
	}
	public COLON(): TerminalNode { return this.getToken(Glang_parser.COLON, 0); }
	public param_decl_item(): Param_decl_itemContext {
		return this.getRuleContext(0, Param_decl_itemContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_param_decl; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterParam_decl) {
			listener.enterParam_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitParam_decl) {
			listener.exitParam_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitParam_decl) {
			return visitor.visitParam_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_decl_itemContext extends ParserRuleContext {
	public obj_ident(): Obj_identContext {
		return this.getRuleContext(0, Obj_identContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_param_decl_item; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterParam_decl_item) {
			listener.enterParam_decl_item(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitParam_decl_item) {
			listener.exitParam_decl_item(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitParam_decl_item) {
			return visitor.visitParam_decl_item(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_defContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(Glang_parser.STRUCT, 0); }
	public COLON(): TerminalNode { return this.getToken(Glang_parser.COLON, 0); }
	public obj_ident(): Obj_identContext {
		return this.getRuleContext(0, Obj_identContext);
	}
	public stuct_body(): Stuct_bodyContext {
		return this.getRuleContext(0, Stuct_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_struct_def; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterStruct_def) {
			listener.enterStruct_def(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitStruct_def) {
			listener.exitStruct_def(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitStruct_def) {
			return visitor.visitStruct_def(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stuct_bodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.LBRACE, 0); }
	public declaration(): DeclarationContext[];
	public declaration(i: number): DeclarationContext;
	public declaration(i?: number): DeclarationContext | DeclarationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DeclarationContext);
		} else {
			return this.getRuleContext(i, DeclarationContext);
		}
	}
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.RBRACE, 0); }
	public prose(): ProseContext[];
	public prose(i: number): ProseContext;
	public prose(i?: number): ProseContext | ProseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProseContext);
		} else {
			return this.getRuleContext(i, ProseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_stuct_body; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterStuct_body) {
			listener.enterStuct_body(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitStuct_body) {
			listener.exitStuct_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitStuct_body) {
			return visitor.visitStuct_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Struct_declContext extends ParserRuleContext {
	public STRUCT(): TerminalNode { return this.getToken(Glang_parser.STRUCT, 0); }
	public COLON(): TerminalNode { return this.getToken(Glang_parser.COLON, 0); }
	public obj_ident(): Obj_identContext {
		return this.getRuleContext(0, Obj_identContext);
	}
	public SEMI(): TerminalNode { return this.getToken(Glang_parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_struct_decl; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterStruct_decl) {
			listener.enterStruct_decl(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitStruct_decl) {
			listener.exitStruct_decl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitStruct_decl) {
			return visitor.visitStruct_decl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.SEMI, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.COMMA);
		} else {
			return this.getToken(Glang_parser.COMMA, i);
		}
	}
	public resv_state(): Resv_stateContext | undefined {
		return this.tryGetRuleContext(0, Resv_stateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_statement; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public assignment(): AssignmentContext {
		return this.getRuleContext(0, AssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_expression; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public obj_ident(): Obj_identContext | undefined {
		return this.tryGetRuleContext(0, Obj_identContext);
	}
	public assignment(): AssignmentContext | undefined {
		return this.tryGetRuleContext(0, AssignmentContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.ASSIGN, 0); }
	public ANDEQ(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.ANDEQ, 0); }
	public OREQ(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.OREQ, 0); }
	public XOREQ(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.XOREQ, 0); }
	public LSEQ(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.LSEQ, 0); }
	public RSEQ(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.RSEQ, 0); }
	public ADDEQ(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.ADDEQ, 0); }
	public SUBEQ(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.SUBEQ, 0); }
	public MULEQ(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.MULEQ, 0); }
	public DIVEQ(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.DIVEQ, 0); }
	public logical_or(): Logical_orContext | undefined {
		return this.tryGetRuleContext(0, Logical_orContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_assignment; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_orContext extends ParserRuleContext {
	public logical_and(): Logical_andContext[];
	public logical_and(i: number): Logical_andContext;
	public logical_and(i?: number): Logical_andContext | Logical_andContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Logical_andContext);
		} else {
			return this.getRuleContext(i, Logical_andContext);
		}
	}
	public DPIPE(): TerminalNode[];
	public DPIPE(i: number): TerminalNode;
	public DPIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.DPIPE);
		} else {
			return this.getToken(Glang_parser.DPIPE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_logical_or; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterLogical_or) {
			listener.enterLogical_or(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitLogical_or) {
			listener.exitLogical_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitLogical_or) {
			return visitor.visitLogical_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Logical_andContext extends ParserRuleContext {
	public bitwise_or(): Bitwise_orContext[];
	public bitwise_or(i: number): Bitwise_orContext;
	public bitwise_or(i?: number): Bitwise_orContext | Bitwise_orContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bitwise_orContext);
		} else {
			return this.getRuleContext(i, Bitwise_orContext);
		}
	}
	public DAMP(): TerminalNode[];
	public DAMP(i: number): TerminalNode;
	public DAMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.DAMP);
		} else {
			return this.getToken(Glang_parser.DAMP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_logical_and; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterLogical_and) {
			listener.enterLogical_and(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitLogical_and) {
			listener.exitLogical_and(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitLogical_and) {
			return visitor.visitLogical_and(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bitwise_orContext extends ParserRuleContext {
	public bitwise_xor(): Bitwise_xorContext[];
	public bitwise_xor(i: number): Bitwise_xorContext;
	public bitwise_xor(i?: number): Bitwise_xorContext | Bitwise_xorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bitwise_xorContext);
		} else {
			return this.getRuleContext(i, Bitwise_xorContext);
		}
	}
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.PIPE);
		} else {
			return this.getToken(Glang_parser.PIPE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_bitwise_or; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterBitwise_or) {
			listener.enterBitwise_or(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitBitwise_or) {
			listener.exitBitwise_or(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitBitwise_or) {
			return visitor.visitBitwise_or(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bitwise_xorContext extends ParserRuleContext {
	public bitwise_and(): Bitwise_andContext[];
	public bitwise_and(i: number): Bitwise_andContext;
	public bitwise_and(i?: number): Bitwise_andContext | Bitwise_andContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Bitwise_andContext);
		} else {
			return this.getRuleContext(i, Bitwise_andContext);
		}
	}
	public CARET(): TerminalNode[];
	public CARET(i: number): TerminalNode;
	public CARET(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.CARET);
		} else {
			return this.getToken(Glang_parser.CARET, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_bitwise_xor; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterBitwise_xor) {
			listener.enterBitwise_xor(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitBitwise_xor) {
			listener.exitBitwise_xor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitBitwise_xor) {
			return visitor.visitBitwise_xor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bitwise_andContext extends ParserRuleContext {
	public equality(): EqualityContext[];
	public equality(i: number): EqualityContext;
	public equality(i?: number): EqualityContext | EqualityContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EqualityContext);
		} else {
			return this.getRuleContext(i, EqualityContext);
		}
	}
	public AMP(): TerminalNode[];
	public AMP(i: number): TerminalNode;
	public AMP(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.AMP);
		} else {
			return this.getToken(Glang_parser.AMP, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_bitwise_and; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterBitwise_and) {
			listener.enterBitwise_and(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitBitwise_and) {
			listener.exitBitwise_and(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitBitwise_and) {
			return visitor.visitBitwise_and(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityContext extends ParserRuleContext {
	public relational(): RelationalContext[];
	public relational(i: number): RelationalContext;
	public relational(i?: number): RelationalContext | RelationalContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationalContext);
		} else {
			return this.getRuleContext(i, RelationalContext);
		}
	}
	public EQ(): TerminalNode[];
	public EQ(i: number): TerminalNode;
	public EQ(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.EQ);
		} else {
			return this.getToken(Glang_parser.EQ, i);
		}
	}
	public NE(): TerminalNode[];
	public NE(i: number): TerminalNode;
	public NE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.NE);
		} else {
			return this.getToken(Glang_parser.NE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_equality; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterEquality) {
			listener.enterEquality(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitEquality) {
			listener.exitEquality(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitEquality) {
			return visitor.visitEquality(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalContext extends ParserRuleContext {
	public additive(): AdditiveContext[];
	public additive(i: number): AdditiveContext;
	public additive(i?: number): AdditiveContext | AdditiveContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AdditiveContext);
		} else {
			return this.getRuleContext(i, AdditiveContext);
		}
	}
	public LT(): TerminalNode[];
	public LT(i: number): TerminalNode;
	public LT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.LT);
		} else {
			return this.getToken(Glang_parser.LT, i);
		}
	}
	public GT(): TerminalNode[];
	public GT(i: number): TerminalNode;
	public GT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.GT);
		} else {
			return this.getToken(Glang_parser.GT, i);
		}
	}
	public LTE(): TerminalNode[];
	public LTE(i: number): TerminalNode;
	public LTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.LTE);
		} else {
			return this.getToken(Glang_parser.LTE, i);
		}
	}
	public GTE(): TerminalNode[];
	public GTE(i: number): TerminalNode;
	public GTE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.GTE);
		} else {
			return this.getToken(Glang_parser.GTE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_relational; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterRelational) {
			listener.enterRelational(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitRelational) {
			listener.exitRelational(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitRelational) {
			return visitor.visitRelational(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveContext extends ParserRuleContext {
	public multiplicative(): MultiplicativeContext[];
	public multiplicative(i: number): MultiplicativeContext;
	public multiplicative(i?: number): MultiplicativeContext | MultiplicativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiplicativeContext);
		} else {
			return this.getRuleContext(i, MultiplicativeContext);
		}
	}
	public PLUS(): TerminalNode[];
	public PLUS(i: number): TerminalNode;
	public PLUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.PLUS);
		} else {
			return this.getToken(Glang_parser.PLUS, i);
		}
	}
	public MINUS(): TerminalNode[];
	public MINUS(i: number): TerminalNode;
	public MINUS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.MINUS);
		} else {
			return this.getToken(Glang_parser.MINUS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_additive; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterAdditive) {
			listener.enterAdditive(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitAdditive) {
			listener.exitAdditive(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitAdditive) {
			return visitor.visitAdditive(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeContext extends ParserRuleContext {
	public primary(): PrimaryContext[];
	public primary(i: number): PrimaryContext;
	public primary(i?: number): PrimaryContext | PrimaryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PrimaryContext);
		} else {
			return this.getRuleContext(i, PrimaryContext);
		}
	}
	public STAR(): TerminalNode[];
	public STAR(i: number): TerminalNode;
	public STAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.STAR);
		} else {
			return this.getToken(Glang_parser.STAR, i);
		}
	}
	public SLASH(): TerminalNode[];
	public SLASH(i: number): TerminalNode;
	public SLASH(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.SLASH);
		} else {
			return this.getToken(Glang_parser.SLASH, i);
		}
	}
	public PERCENT(): TerminalNode[];
	public PERCENT(i: number): TerminalNode;
	public PERCENT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.PERCENT);
		} else {
			return this.getToken(Glang_parser.PERCENT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_multiplicative; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterMultiplicative) {
			listener.enterMultiplicative(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitMultiplicative) {
			listener.exitMultiplicative(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitMultiplicative) {
			return visitor.visitMultiplicative(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryContext extends ParserRuleContext {
	public resv_expr(): Resv_exprContext | undefined {
		return this.tryGetRuleContext(0, Resv_exprContext);
	}
	public func_call(): Func_callContext | undefined {
		return this.tryGetRuleContext(0, Func_callContext);
	}
	public obj_ident(): Obj_identContext | undefined {
		return this.tryGetRuleContext(0, Obj_identContext);
	}
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.LPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_primary; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterPrimary) {
			listener.enterPrimary(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitPrimary) {
			listener.exitPrimary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitPrimary) {
			return visitor.visitPrimary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Resv_exprContext extends ParserRuleContext {
	public expr_cond(): Expr_condContext | undefined {
		return this.tryGetRuleContext(0, Expr_condContext);
	}
	public expr_whil(): Expr_whilContext | undefined {
		return this.tryGetRuleContext(0, Expr_whilContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_resv_expr; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterResv_expr) {
			listener.enterResv_expr(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitResv_expr) {
			listener.exitResv_expr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitResv_expr) {
			return visitor.visitResv_expr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Resv_stateContext extends ParserRuleContext {
	public stat_cond(): Stat_condContext | undefined {
		return this.tryGetRuleContext(0, Stat_condContext);
	}
	public stat_whil(): Stat_whilContext | undefined {
		return this.tryGetRuleContext(0, Stat_whilContext);
	}
	public retur(): ReturContext | undefined {
		return this.tryGetRuleContext(0, ReturContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_resv_state; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterResv_state) {
			listener.enterResv_state(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitResv_state) {
			listener.exitResv_state(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitResv_state) {
			return visitor.visitResv_state(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stat_condContext extends ParserRuleContext {
	public cond_ident(): Cond_identContext {
		return this.getRuleContext(0, Cond_identContext);
	}
	public cond_site(): Cond_siteContext {
		return this.getRuleContext(0, Cond_siteContext);
	}
	public state_cond_body(): State_cond_bodyContext {
		return this.getRuleContext(0, State_cond_bodyContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.ELSE, 0); }
	public cond_body(): Cond_bodyContext | undefined {
		return this.tryGetRuleContext(0, Cond_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_stat_cond; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterStat_cond) {
			listener.enterStat_cond(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitStat_cond) {
			listener.exitStat_cond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitStat_cond) {
			return visitor.visitStat_cond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_condContext extends ParserRuleContext {
	public cond_ident(): Cond_identContext {
		return this.getRuleContext(0, Cond_identContext);
	}
	public cond_site(): Cond_siteContext {
		return this.getRuleContext(0, Cond_siteContext);
	}
	public ELSE(): TerminalNode { return this.getToken(Glang_parser.ELSE, 0); }
	public cond_body(): Cond_bodyContext[];
	public cond_body(i: number): Cond_bodyContext;
	public cond_body(i?: number): Cond_bodyContext | Cond_bodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cond_bodyContext);
		} else {
			return this.getRuleContext(i, Cond_bodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_expr_cond; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterExpr_cond) {
			listener.enterExpr_cond(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitExpr_cond) {
			listener.exitExpr_cond(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitExpr_cond) {
			return visitor.visitExpr_cond(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cond_siteContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Glang_parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Glang_parser.RPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_cond_site; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterCond_site) {
			listener.enterCond_site(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitCond_site) {
			listener.exitCond_site(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitCond_site) {
			return visitor.visitCond_site(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cond_bodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.RBRACE, 0); }
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	public unbound_state(): Unbound_stateContext | undefined {
		return this.tryGetRuleContext(0, Unbound_stateContext);
	}
	public prose(): ProseContext[];
	public prose(i: number): ProseContext;
	public prose(i?: number): ProseContext | ProseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProseContext);
		} else {
			return this.getRuleContext(i, ProseContext);
		}
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_cond_body; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterCond_body) {
			listener.enterCond_body(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitCond_body) {
			listener.exitCond_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitCond_body) {
			return visitor.visitCond_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class State_cond_bodyContext extends ParserRuleContext {
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.RBRACE, 0); }
	public category(): CategoryContext[];
	public category(i: number): CategoryContext;
	public category(i?: number): CategoryContext | CategoryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CategoryContext);
		} else {
			return this.getRuleContext(i, CategoryContext);
		}
	}
	public statement(): StatementContext | undefined {
		return this.tryGetRuleContext(0, StatementContext);
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_state_cond_body; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterState_cond_body) {
			listener.enterState_cond_body(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitState_cond_body) {
			listener.exitState_cond_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitState_cond_body) {
			return visitor.visitState_cond_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Stat_whilContext extends ParserRuleContext {
	public whil_ident(): Whil_identContext {
		return this.getRuleContext(0, Whil_identContext);
	}
	public cond_site(): Cond_siteContext {
		return this.getRuleContext(0, Cond_siteContext);
	}
	public state_cond_body(): State_cond_bodyContext {
		return this.getRuleContext(0, State_cond_bodyContext);
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.ELSE, 0); }
	public cond_body(): Cond_bodyContext | undefined {
		return this.tryGetRuleContext(0, Cond_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_stat_whil; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterStat_whil) {
			listener.enterStat_whil(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitStat_whil) {
			listener.exitStat_whil(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitStat_whil) {
			return visitor.visitStat_whil(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_whilContext extends ParserRuleContext {
	public whil_ident(): Whil_identContext {
		return this.getRuleContext(0, Whil_identContext);
	}
	public expr_whil_site(): Expr_whil_siteContext {
		return this.getRuleContext(0, Expr_whil_siteContext);
	}
	public ELSE(): TerminalNode { return this.getToken(Glang_parser.ELSE, 0); }
	public cond_body(): Cond_bodyContext[];
	public cond_body(i: number): Cond_bodyContext;
	public cond_body(i?: number): Cond_bodyContext | Cond_bodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cond_bodyContext);
		} else {
			return this.getRuleContext(i, Cond_bodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_expr_whil; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterExpr_whil) {
			listener.enterExpr_whil(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitExpr_whil) {
			listener.exitExpr_whil(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitExpr_whil) {
			return visitor.visitExpr_whil(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_whil_siteContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(Glang_parser.LPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Glang_parser.SEMI, 0); }
	public expr_whil_return(): Expr_whil_returnContext {
		return this.getRuleContext(0, Expr_whil_returnContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(Glang_parser.RPAREN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_expr_whil_site; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterExpr_whil_site) {
			listener.enterExpr_whil_site(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitExpr_whil_site) {
			listener.exitExpr_whil_site(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitExpr_whil_site) {
			return visitor.visitExpr_whil_site(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_whil_returnContext extends ParserRuleContext {
	public type_list(): Type_listContext {
		return this.getRuleContext(0, Type_listContext);
	}
	public COLON(): TerminalNode { return this.getToken(Glang_parser.COLON, 0); }
	public obj_ident(): Obj_identContext {
		return this.getRuleContext(0, Obj_identContext);
	}
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.ASSIGN, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_expr_whil_return; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterExpr_whil_return) {
			listener.enterExpr_whil_return(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitExpr_whil_return) {
			listener.exitExpr_whil_return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitExpr_whil_return) {
			return visitor.visitExpr_whil_return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(Glang_parser.RETURN, 0); }
	public LPAREN(): TerminalNode { return this.getToken(Glang_parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(Glang_parser.RPAREN, 0); }
	public SEMI(): TerminalNode { return this.getToken(Glang_parser.SEMI, 0); }
	public unbound_state(): Unbound_stateContext | undefined {
		return this.tryGetRuleContext(0, Unbound_stateContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_retur; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterRetur) {
			listener.enterRetur(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitRetur) {
			listener.exitRetur(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitRetur) {
			return visitor.visitRetur(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unbound_stateContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.COMMA);
		} else {
			return this.getToken(Glang_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_unbound_state; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterUnbound_state) {
			listener.enterUnbound_state(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitUnbound_state) {
			listener.exitUnbound_state(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitUnbound_state) {
			return visitor.visitUnbound_state(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cond_identContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(Glang_parser.IF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_cond_ident; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterCond_ident) {
			listener.enterCond_ident(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitCond_ident) {
			listener.exitCond_ident(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitCond_ident) {
			return visitor.visitCond_ident(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Func_identContext extends ParserRuleContext {
	public OBJ_IDENT(): TerminalNode { return this.getToken(Glang_parser.OBJ_IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_func_ident; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterFunc_ident) {
			listener.enterFunc_ident(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitFunc_ident) {
			listener.exitFunc_ident(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitFunc_ident) {
			return visitor.visitFunc_ident(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Whil_identContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(Glang_parser.WHILE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_whil_ident; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterWhil_ident) {
			listener.enterWhil_ident(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitWhil_ident) {
			listener.exitWhil_ident(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitWhil_ident) {
			return visitor.visitWhil_ident(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Obj_identContext extends ParserRuleContext {
	public OBJ_IDENT(): TerminalNode { return this.getToken(Glang_parser.OBJ_IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_obj_ident; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterObj_ident) {
			listener.enterObj_ident(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitObj_ident) {
			listener.exitObj_ident(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitObj_ident) {
			return visitor.visitObj_ident(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProseContext extends ParserRuleContext {
	public prose_ident(): Prose_identContext {
		return this.getRuleContext(0, Prose_identContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_prose; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterProse) {
			listener.enterProse(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitProse) {
			listener.exitProse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitProse) {
			return visitor.visitProse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_listContext extends ParserRuleContext {
	public type_ident(): Type_identContext[];
	public type_ident(i: number): Type_identContext;
	public type_ident(i?: number): Type_identContext | Type_identContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Type_identContext);
		} else {
			return this.getRuleContext(i, Type_identContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.COMMA);
		} else {
			return this.getToken(Glang_parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_type_list; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterType_list) {
			listener.enterType_list(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitType_list) {
			listener.exitType_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitType_list) {
			return visitor.visitType_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_identContext extends ParserRuleContext {
	public IDENT(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.IDENT, 0); }
	public OBJ_IDENT(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.OBJ_IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_type_ident; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterType_ident) {
			listener.enterType_ident(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitType_ident) {
			listener.exitType_ident(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitType_ident) {
			return visitor.visitType_ident(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.NUMBER, 0); }
	public APOST(): TerminalNode[];
	public APOST(i: number): TerminalNode;
	public APOST(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(Glang_parser.APOST);
		} else {
			return this.getToken(Glang_parser.APOST, i);
		}
	}
	public uni_ident(): Uni_identContext | undefined {
		return this.tryGetRuleContext(0, Uni_identContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_number; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unres_identContext extends ParserRuleContext {
	public IDENT(): TerminalNode { return this.getToken(Glang_parser.IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_unres_ident; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterUnres_ident) {
			listener.enterUnres_ident(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitUnres_ident) {
			listener.exitUnres_ident(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitUnres_ident) {
			return visitor.visitUnres_ident(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Res_identContext extends ParserRuleContext {
	public SWITCH(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.SWITCH, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.RETURN, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.IF, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.WHILE, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.FOR, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.ELSE, 0); }
	public STRUCT(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.STRUCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_res_ident; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterRes_ident) {
			listener.enterRes_ident(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitRes_ident) {
			listener.exitRes_ident(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitRes_ident) {
			return visitor.visitRes_ident(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Prose_identContext extends ParserRuleContext {
	public uni_ident(): Uni_identContext | undefined {
		return this.tryGetRuleContext(0, Uni_identContext);
	}
	public ESCAPED_PROSE(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.ESCAPED_PROSE, 0); }
	public DDOT(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.DDOT, 0); }
	public DCOMM(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.DCOMM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_prose_ident; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterProse_ident) {
			listener.enterProse_ident(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitProse_ident) {
			listener.exitProse_ident(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitProse_ident) {
			return visitor.visitProse_ident(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Uni_identContext extends ParserRuleContext {
	public res_ident(): Res_identContext | undefined {
		return this.tryGetRuleContext(0, Res_identContext);
	}
	public unres_ident(): Unres_identContext | undefined {
		return this.tryGetRuleContext(0, Unres_identContext);
	}
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.NUMBER, 0); }
	public OBJ_IDENT(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.OBJ_IDENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_uni_ident; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterUni_ident) {
			listener.enterUni_ident(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitUni_ident) {
			listener.exitUni_ident(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitUni_ident) {
			return visitor.visitUni_ident(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public LINE_COMMENT(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.LINE_COMMENT, 0); }
	public BLOCK_COMMENT(): TerminalNode | undefined { return this.tryGetToken(Glang_parser.BLOCK_COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return Glang_parser.RULE_comment; }
	// @Override
	public enterRule(listener: Glang_parserListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: Glang_parserListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: Glang_parserVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


