// Generated from /home/berserker/projects/cp1/glang-parser/grammar/Glang_parser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class Glang_parser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DCOMM=1, DDOT=2, COMMA=3, SEMI=4, COLON=5, DOT=6, LPAREN=7, RPAREN=8, 
		LBRACE=9, RBRACE=10, LBRACK=11, RBRACK=12, ARR=13, DPLUS=14, DMIN=15, 
		PLUS=16, MINUS=17, STAR=18, SLASH=19, PERCENT=20, DAMP=21, DPIPE=22, DCART=23, 
		AMP=24, PIPE=25, CARET=26, BANG=27, TILDE=28, QUEST=29, ANDEQ=30, OREQ=31, 
		XOREQ=32, LSEQ=33, RSEQ=34, ADDEQ=35, SUBEQ=36, MULEQ=37, DIVEQ=38, LT=39, 
		GT=40, LTE=41, GTE=42, EQ=43, NE=44, ASSIGN=45, QUOTE=46, APOST=47, BACKTICK=48, 
		RETURN=49, IF=50, ELSE=51, WHILE=52, FOR=53, SWITCH=54, STRUCT=55, LINE_COMMENT=56, 
		BLOCK_COMMENT=57, WS=58, NUMBER=59, OBJ_IDENT=60, IDENT=61, ESCAPED_PROSE=62, 
		AT=63, HASH=64, BACKSLASH=65;
	public static final int
		RULE_program = 0, RULE_category = 1, RULE_element = 2, RULE_func_body = 3, 
		RULE_func_call = 4, RULE_func_arg_list = 5, RULE_declaration = 6, RULE_untyped_decl = 7, 
		RULE_decl_scope = 8, RULE_decl_scope_body = 9, RULE_obj_decl = 10, RULE_unt_obj_decl = 11, 
		RULE_obj_decl_list = 12, RULE_obj_decl_item = 13, RULE_func_decl = 14, 
		RULE_unt_func_decl = 15, RULE_func_decl_list = 16, RULE_func_def = 17, 
		RULE_unt_func_def = 18, RULE_func_site = 19, RULE_param_list = 20, RULE_param_decl = 21, 
		RULE_param_decl_item = 22, RULE_struct_def = 23, RULE_stuct_body = 24, 
		RULE_struct_decl = 25, RULE_statement = 26, RULE_expression = 27, RULE_assignment = 28, 
		RULE_logical_or = 29, RULE_logical_and = 30, RULE_bitwise_or = 31, RULE_bitwise_xor = 32, 
		RULE_bitwise_and = 33, RULE_equality = 34, RULE_relational = 35, RULE_additive = 36, 
		RULE_multiplicative = 37, RULE_primary = 38, RULE_resv_expr = 39, RULE_resv_state = 40, 
		RULE_stat_cond = 41, RULE_expr_cond = 42, RULE_cond_site = 43, RULE_cond_body = 44, 
		RULE_state_cond_body = 45, RULE_stat_whil = 46, RULE_expr_whil = 47, RULE_expr_whil_site = 48, 
		RULE_expr_whil_return = 49, RULE_retur = 50, RULE_unbound_state = 51, 
		RULE_cond_ident = 52, RULE_func_ident = 53, RULE_whil_ident = 54, RULE_obj_ident = 55, 
		RULE_prose = 56, RULE_type_list = 57, RULE_type_ident = 58, RULE_number = 59, 
		RULE_unres_ident = 60, RULE_res_ident = 61, RULE_prose_ident = 62, RULE_uni_ident = 63, 
		RULE_comment = 64;
	private static String[] makeRuleNames() {
		return new String[] {
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
			"comment"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "',,'", "'..'", "','", "';'", "':'", "'.'", "'('", "')'", "'{'", 
			"'}'", "'['", "']'", "'->'", "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", 
			"'%'", "'&&'", "'||'", "'^^'", "'&'", "'|'", "'^'", "'!'", "'~'", "'?'", 
			"'&='", "'|='", "'^='", "'<<='", "'>>='", "'+='", "'-='", "'*='", "'/='", 
			"'<'", "'>'", "'<='", "'>='", "'=='", "'!='", "'='", "'\"'", "'''", "'`'", 
			"'return'", "'if'", "'else'", "'while'", "'for'", "'switch'", "'struct'", 
			null, null, null, null, null, null, null, "'@'", "'#'", "'\\'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DCOMM", "DDOT", "COMMA", "SEMI", "COLON", "DOT", "LPAREN", "RPAREN", 
			"LBRACE", "RBRACE", "LBRACK", "RBRACK", "ARR", "DPLUS", "DMIN", "PLUS", 
			"MINUS", "STAR", "SLASH", "PERCENT", "DAMP", "DPIPE", "DCART", "AMP", 
			"PIPE", "CARET", "BANG", "TILDE", "QUEST", "ANDEQ", "OREQ", "XOREQ", 
			"LSEQ", "RSEQ", "ADDEQ", "SUBEQ", "MULEQ", "DIVEQ", "LT", "GT", "LTE", 
			"GTE", "EQ", "NE", "ASSIGN", "QUOTE", "APOST", "BACKTICK", "RETURN", 
			"IF", "ELSE", "WHILE", "FOR", "SWITCH", "STRUCT", "LINE_COMMENT", "BLOCK_COMMENT", 
			"WS", "NUMBER", "OBJ_IDENT", "IDENT", "ESCAPED_PROSE", "AT", "HASH", 
			"BACKSLASH"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Glang_parser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public Glang_parser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(Glang_parser.EOF, 0); }
		public List<CategoryContext> category() {
			return getRuleContexts(CategoryContext.class);
		}
		public CategoryContext category(int i) {
			return getRuleContext(CategoryContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DCOMM) | (1L << DDOT) | (1L << LPAREN) | (1L << APOST) | (1L << RETURN) | (1L << IF) | (1L << ELSE) | (1L << WHILE) | (1L << FOR) | (1L << SWITCH) | (1L << STRUCT) | (1L << LINE_COMMENT) | (1L << BLOCK_COMMENT) | (1L << NUMBER) | (1L << OBJ_IDENT) | (1L << IDENT) | (1L << ESCAPED_PROSE))) != 0)) {
				{
				{
				setState(130);
				category();
				}
				}
				setState(135);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(136);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CategoryContext extends ParserRuleContext {
		public ElementContext element() {
			return getRuleContext(ElementContext.class,0);
		}
		public ProseContext prose() {
			return getRuleContext(ProseContext.class,0);
		}
		public CommentContext comment() {
			return getRuleContext(CommentContext.class,0);
		}
		public CategoryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_category; }
	}

	public final CategoryContext category() throws RecognitionException {
		CategoryContext _localctx = new CategoryContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_category);
		try {
			setState(141);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(138);
				element();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(139);
				prose();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(140);
				comment();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ElementContext extends ParserRuleContext {
		public DeclarationContext declaration() {
			return getRuleContext(DeclarationContext.class,0);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public ElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_element; }
	}

	public final ElementContext element() throws RecognitionException {
		ElementContext _localctx = new ElementContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_element);
		try {
			setState(145);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(143);
				declaration();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(144);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_bodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(Glang_parser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(Glang_parser.RBRACE, 0); }
		public List<CategoryContext> category() {
			return getRuleContexts(CategoryContext.class);
		}
		public CategoryContext category(int i) {
			return getRuleContext(CategoryContext.class,i);
		}
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(Glang_parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Glang_parser.COMMA, i);
		}
		public Func_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_body; }
	}

	public final Func_bodyContext func_body() throws RecognitionException {
		Func_bodyContext _localctx = new Func_bodyContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_func_body);
		int _la;
		try {
			int _alt;
			setState(163);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(147);
				match(LBRACE);
				setState(151);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DCOMM) | (1L << DDOT) | (1L << LPAREN) | (1L << APOST) | (1L << RETURN) | (1L << IF) | (1L << ELSE) | (1L << WHILE) | (1L << FOR) | (1L << SWITCH) | (1L << STRUCT) | (1L << LINE_COMMENT) | (1L << BLOCK_COMMENT) | (1L << NUMBER) | (1L << OBJ_IDENT) | (1L << IDENT) | (1L << ESCAPED_PROSE))) != 0)) {
					{
					{
					setState(148);
					category();
					}
					}
					setState(153);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(154);
				match(RBRACE);
				}
				break;
			case LPAREN:
			case APOST:
			case RETURN:
			case IF:
			case WHILE:
			case STRUCT:
			case NUMBER:
			case OBJ_IDENT:
			case IDENT:
				enterOuterAlt(_localctx, 2);
				{
				setState(155);
				element();
				setState(160);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(156);
						match(COMMA);
						setState(157);
						element();
						}
						} 
					}
					setState(162);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_callContext extends ParserRuleContext {
		public Func_identContext func_ident() {
			return getRuleContext(Func_identContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(Glang_parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(Glang_parser.RPAREN, 0); }
		public Func_arg_listContext func_arg_list() {
			return getRuleContext(Func_arg_listContext.class,0);
		}
		public Func_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_call; }
	}

	public final Func_callContext func_call() throws RecognitionException {
		Func_callContext _localctx = new Func_callContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_func_call);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(165);
			func_ident();
			setState(166);
			match(LPAREN);
			setState(168);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << APOST) | (1L << IF) | (1L << WHILE) | (1L << NUMBER) | (1L << OBJ_IDENT))) != 0)) {
				{
				setState(167);
				func_arg_list();
				}
			}

			setState(170);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_arg_listContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(Glang_parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Glang_parser.COMMA, i);
		}
		public Func_arg_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_arg_list; }
	}

	public final Func_arg_listContext func_arg_list() throws RecognitionException {
		Func_arg_listContext _localctx = new Func_arg_listContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_func_arg_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(172);
			expression();
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(173);
				match(COMMA);
				setState(174);
				expression();
				}
				}
				setState(179);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DeclarationContext extends ParserRuleContext {
		public Decl_scopeContext decl_scope() {
			return getRuleContext(Decl_scopeContext.class,0);
		}
		public Obj_declContext obj_decl() {
			return getRuleContext(Obj_declContext.class,0);
		}
		public Func_declContext func_decl() {
			return getRuleContext(Func_declContext.class,0);
		}
		public Struct_declContext struct_decl() {
			return getRuleContext(Struct_declContext.class,0);
		}
		public Func_defContext func_def() {
			return getRuleContext(Func_defContext.class,0);
		}
		public Struct_defContext struct_def() {
			return getRuleContext(Struct_defContext.class,0);
		}
		public DeclarationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaration; }
	}

	public final DeclarationContext declaration() throws RecognitionException {
		DeclarationContext _localctx = new DeclarationContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_declaration);
		try {
			setState(186);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(180);
				decl_scope();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(181);
				obj_decl();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(182);
				func_decl();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(183);
				struct_decl();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(184);
				func_def();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(185);
				struct_def();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Untyped_declContext extends ParserRuleContext {
		public Unt_obj_declContext unt_obj_decl() {
			return getRuleContext(Unt_obj_declContext.class,0);
		}
		public Unt_func_declContext unt_func_decl() {
			return getRuleContext(Unt_func_declContext.class,0);
		}
		public Unt_func_defContext unt_func_def() {
			return getRuleContext(Unt_func_defContext.class,0);
		}
		public Untyped_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_untyped_decl; }
	}

	public final Untyped_declContext untyped_decl() throws RecognitionException {
		Untyped_declContext _localctx = new Untyped_declContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_untyped_decl);
		try {
			setState(191);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(188);
				unt_obj_decl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(189);
				unt_func_decl();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(190);
				unt_func_def();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Decl_scopeContext extends ParserRuleContext {
		public Type_listContext type_list() {
			return getRuleContext(Type_listContext.class,0);
		}
		public TerminalNode COLON() { return getToken(Glang_parser.COLON, 0); }
		public Decl_scope_bodyContext decl_scope_body() {
			return getRuleContext(Decl_scope_bodyContext.class,0);
		}
		public Decl_scopeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decl_scope; }
	}

	public final Decl_scopeContext decl_scope() throws RecognitionException {
		Decl_scopeContext _localctx = new Decl_scopeContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_decl_scope);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			type_list();
			setState(194);
			match(COLON);
			setState(195);
			decl_scope_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Decl_scope_bodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(Glang_parser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(Glang_parser.RBRACE, 0); }
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public List<Untyped_declContext> untyped_decl() {
			return getRuleContexts(Untyped_declContext.class);
		}
		public Untyped_declContext untyped_decl(int i) {
			return getRuleContext(Untyped_declContext.class,i);
		}
		public List<ProseContext> prose() {
			return getRuleContexts(ProseContext.class);
		}
		public ProseContext prose(int i) {
			return getRuleContext(ProseContext.class,i);
		}
		public Decl_scope_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_decl_scope_body; }
	}

	public final Decl_scope_bodyContext decl_scope_body() throws RecognitionException {
		Decl_scope_bodyContext _localctx = new Decl_scope_bodyContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_decl_scope_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(197);
			match(LBRACE);
			setState(203);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DCOMM) | (1L << DDOT) | (1L << RETURN) | (1L << IF) | (1L << ELSE) | (1L << WHILE) | (1L << FOR) | (1L << SWITCH) | (1L << STRUCT) | (1L << NUMBER) | (1L << OBJ_IDENT) | (1L << IDENT) | (1L << ESCAPED_PROSE))) != 0)) {
				{
				setState(201);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
				case 1:
					{
					setState(198);
					declaration();
					}
					break;
				case 2:
					{
					setState(199);
					untyped_decl();
					}
					break;
				case 3:
					{
					setState(200);
					prose();
					}
					break;
				}
				}
				setState(205);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(206);
			match(RBRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Obj_declContext extends ParserRuleContext {
		public Type_listContext type_list() {
			return getRuleContext(Type_listContext.class,0);
		}
		public TerminalNode COLON() { return getToken(Glang_parser.COLON, 0); }
		public Obj_decl_listContext obj_decl_list() {
			return getRuleContext(Obj_decl_listContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(Glang_parser.SEMI, 0); }
		public Obj_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_obj_decl; }
	}

	public final Obj_declContext obj_decl() throws RecognitionException {
		Obj_declContext _localctx = new Obj_declContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_obj_decl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(208);
			type_list();
			setState(209);
			match(COLON);
			setState(210);
			obj_decl_list();
			setState(211);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unt_obj_declContext extends ParserRuleContext {
		public Obj_decl_listContext obj_decl_list() {
			return getRuleContext(Obj_decl_listContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(Glang_parser.SEMI, 0); }
		public Unt_obj_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unt_obj_decl; }
	}

	public final Unt_obj_declContext unt_obj_decl() throws RecognitionException {
		Unt_obj_declContext _localctx = new Unt_obj_declContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_unt_obj_decl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(213);
			obj_decl_list();
			setState(214);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Obj_decl_listContext extends ParserRuleContext {
		public List<Obj_decl_itemContext> obj_decl_item() {
			return getRuleContexts(Obj_decl_itemContext.class);
		}
		public Obj_decl_itemContext obj_decl_item(int i) {
			return getRuleContext(Obj_decl_itemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(Glang_parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Glang_parser.COMMA, i);
		}
		public Obj_decl_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_obj_decl_list; }
	}

	public final Obj_decl_listContext obj_decl_list() throws RecognitionException {
		Obj_decl_listContext _localctx = new Obj_decl_listContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_obj_decl_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(216);
			obj_decl_item();
			setState(221);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(217);
				match(COMMA);
				setState(218);
				obj_decl_item();
				}
				}
				setState(223);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Obj_decl_itemContext extends ParserRuleContext {
		public Obj_identContext obj_ident() {
			return getRuleContext(Obj_identContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(Glang_parser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Obj_decl_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_obj_decl_item; }
	}

	public final Obj_decl_itemContext obj_decl_item() throws RecognitionException {
		Obj_decl_itemContext _localctx = new Obj_decl_itemContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_obj_decl_item);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(224);
			obj_ident();
			setState(227);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(225);
				match(ASSIGN);
				setState(226);
				expression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_declContext extends ParserRuleContext {
		public Type_listContext type_list() {
			return getRuleContext(Type_listContext.class,0);
		}
		public TerminalNode COLON() { return getToken(Glang_parser.COLON, 0); }
		public Func_decl_listContext func_decl_list() {
			return getRuleContext(Func_decl_listContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(Glang_parser.SEMI, 0); }
		public Func_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_decl; }
	}

	public final Func_declContext func_decl() throws RecognitionException {
		Func_declContext _localctx = new Func_declContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_func_decl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(229);
			type_list();
			setState(230);
			match(COLON);
			setState(231);
			func_decl_list();
			setState(232);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unt_func_declContext extends ParserRuleContext {
		public Func_decl_listContext func_decl_list() {
			return getRuleContext(Func_decl_listContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(Glang_parser.SEMI, 0); }
		public Unt_func_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unt_func_decl; }
	}

	public final Unt_func_declContext unt_func_decl() throws RecognitionException {
		Unt_func_declContext _localctx = new Unt_func_declContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_unt_func_decl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			func_decl_list();
			setState(235);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_decl_listContext extends ParserRuleContext {
		public List<Func_siteContext> func_site() {
			return getRuleContexts(Func_siteContext.class);
		}
		public Func_siteContext func_site(int i) {
			return getRuleContext(Func_siteContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(Glang_parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Glang_parser.COMMA, i);
		}
		public Func_decl_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_decl_list; }
	}

	public final Func_decl_listContext func_decl_list() throws RecognitionException {
		Func_decl_listContext _localctx = new Func_decl_listContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_func_decl_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(237);
			func_site();
			setState(242);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(238);
				match(COMMA);
				setState(239);
				func_site();
				}
				}
				setState(244);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_defContext extends ParserRuleContext {
		public Type_listContext type_list() {
			return getRuleContext(Type_listContext.class,0);
		}
		public TerminalNode COLON() { return getToken(Glang_parser.COLON, 0); }
		public Func_siteContext func_site() {
			return getRuleContext(Func_siteContext.class,0);
		}
		public Func_bodyContext func_body() {
			return getRuleContext(Func_bodyContext.class,0);
		}
		public Func_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_def; }
	}

	public final Func_defContext func_def() throws RecognitionException {
		Func_defContext _localctx = new Func_defContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_func_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(245);
			type_list();
			setState(246);
			match(COLON);
			setState(247);
			func_site();
			setState(248);
			func_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unt_func_defContext extends ParserRuleContext {
		public Func_siteContext func_site() {
			return getRuleContext(Func_siteContext.class,0);
		}
		public Func_bodyContext func_body() {
			return getRuleContext(Func_bodyContext.class,0);
		}
		public Unt_func_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unt_func_def; }
	}

	public final Unt_func_defContext unt_func_def() throws RecognitionException {
		Unt_func_defContext _localctx = new Unt_func_defContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_unt_func_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(250);
			func_site();
			setState(251);
			func_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_siteContext extends ParserRuleContext {
		public Func_identContext func_ident() {
			return getRuleContext(Func_identContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(Glang_parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(Glang_parser.RPAREN, 0); }
		public Param_listContext param_list() {
			return getRuleContext(Param_listContext.class,0);
		}
		public Func_siteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_site; }
	}

	public final Func_siteContext func_site() throws RecognitionException {
		Func_siteContext _localctx = new Func_siteContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_func_site);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(253);
			func_ident();
			setState(254);
			match(LPAREN);
			setState(256);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==OBJ_IDENT || _la==IDENT) {
				{
				setState(255);
				param_list();
				}
			}

			setState(258);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Param_listContext extends ParserRuleContext {
		public List<Param_declContext> param_decl() {
			return getRuleContexts(Param_declContext.class);
		}
		public Param_declContext param_decl(int i) {
			return getRuleContext(Param_declContext.class,i);
		}
		public List<TerminalNode> SEMI() { return getTokens(Glang_parser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(Glang_parser.SEMI, i);
		}
		public Param_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param_list; }
	}

	public final Param_listContext param_list() throws RecognitionException {
		Param_listContext _localctx = new Param_listContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_param_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			param_decl();
			setState(265);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SEMI) {
				{
				{
				setState(261);
				match(SEMI);
				setState(262);
				param_decl();
				}
				}
				setState(267);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Param_declContext extends ParserRuleContext {
		public Type_listContext type_list() {
			return getRuleContext(Type_listContext.class,0);
		}
		public TerminalNode COLON() { return getToken(Glang_parser.COLON, 0); }
		public Param_decl_itemContext param_decl_item() {
			return getRuleContext(Param_decl_itemContext.class,0);
		}
		public Param_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param_decl; }
	}

	public final Param_declContext param_decl() throws RecognitionException {
		Param_declContext _localctx = new Param_declContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_param_decl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(268);
			type_list();
			setState(269);
			match(COLON);
			setState(270);
			param_decl_item();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Param_decl_itemContext extends ParserRuleContext {
		public Obj_identContext obj_ident() {
			return getRuleContext(Obj_identContext.class,0);
		}
		public Param_decl_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_param_decl_item; }
	}

	public final Param_decl_itemContext param_decl_item() throws RecognitionException {
		Param_decl_itemContext _localctx = new Param_decl_itemContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_param_decl_item);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(272);
			obj_ident();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Struct_defContext extends ParserRuleContext {
		public TerminalNode STRUCT() { return getToken(Glang_parser.STRUCT, 0); }
		public TerminalNode COLON() { return getToken(Glang_parser.COLON, 0); }
		public Obj_identContext obj_ident() {
			return getRuleContext(Obj_identContext.class,0);
		}
		public Stuct_bodyContext stuct_body() {
			return getRuleContext(Stuct_bodyContext.class,0);
		}
		public Struct_defContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_struct_def; }
	}

	public final Struct_defContext struct_def() throws RecognitionException {
		Struct_defContext _localctx = new Struct_defContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_struct_def);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(274);
			match(STRUCT);
			setState(275);
			match(COLON);
			setState(276);
			obj_ident();
			setState(277);
			stuct_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stuct_bodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(Glang_parser.LBRACE, 0); }
		public List<DeclarationContext> declaration() {
			return getRuleContexts(DeclarationContext.class);
		}
		public DeclarationContext declaration(int i) {
			return getRuleContext(DeclarationContext.class,i);
		}
		public TerminalNode RBRACE() { return getToken(Glang_parser.RBRACE, 0); }
		public List<ProseContext> prose() {
			return getRuleContexts(ProseContext.class);
		}
		public ProseContext prose(int i) {
			return getRuleContext(ProseContext.class,i);
		}
		public Stuct_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stuct_body; }
	}

	public final Stuct_bodyContext stuct_body() throws RecognitionException {
		Stuct_bodyContext _localctx = new Stuct_bodyContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_stuct_body);
		int _la;
		try {
			int _alt;
			setState(297);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(279);
				match(LBRACE);
				setState(283);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(280);
						prose();
						}
						} 
					}
					setState(285);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,17,_ctx);
				}
				setState(286);
				declaration();
				setState(291);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DCOMM) | (1L << DDOT) | (1L << RETURN) | (1L << IF) | (1L << ELSE) | (1L << WHILE) | (1L << FOR) | (1L << SWITCH) | (1L << STRUCT) | (1L << NUMBER) | (1L << OBJ_IDENT) | (1L << IDENT) | (1L << ESCAPED_PROSE))) != 0)) {
					{
					setState(289);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
					case 1:
						{
						setState(287);
						prose();
						}
						break;
					case 2:
						{
						setState(288);
						declaration();
						}
						break;
					}
					}
					setState(293);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(294);
				match(RBRACE);
				}
				break;
			case STRUCT:
			case OBJ_IDENT:
			case IDENT:
				enterOuterAlt(_localctx, 2);
				{
				setState(296);
				declaration();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Struct_declContext extends ParserRuleContext {
		public TerminalNode STRUCT() { return getToken(Glang_parser.STRUCT, 0); }
		public TerminalNode COLON() { return getToken(Glang_parser.COLON, 0); }
		public Obj_identContext obj_ident() {
			return getRuleContext(Obj_identContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(Glang_parser.SEMI, 0); }
		public Struct_declContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_struct_decl; }
	}

	public final Struct_declContext struct_decl() throws RecognitionException {
		Struct_declContext _localctx = new Struct_declContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_struct_decl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(299);
			match(STRUCT);
			setState(300);
			match(COLON);
			setState(301);
			obj_ident();
			setState(302);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public TerminalNode SEMI() { return getToken(Glang_parser.SEMI, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(Glang_parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Glang_parser.COMMA, i);
		}
		public Resv_stateContext resv_state() {
			return getRuleContext(Resv_stateContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_statement);
		int _la;
		try {
			setState(315);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(304);
				expression();
				setState(309);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(305);
					match(COMMA);
					setState(306);
					expression();
					}
					}
					setState(311);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				setState(312);
				match(SEMI);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(314);
				resv_state();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(317);
			assignment();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AssignmentContext extends ParserRuleContext {
		public Obj_identContext obj_ident() {
			return getRuleContext(Obj_identContext.class,0);
		}
		public AssignmentContext assignment() {
			return getRuleContext(AssignmentContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(Glang_parser.ASSIGN, 0); }
		public TerminalNode ANDEQ() { return getToken(Glang_parser.ANDEQ, 0); }
		public TerminalNode OREQ() { return getToken(Glang_parser.OREQ, 0); }
		public TerminalNode XOREQ() { return getToken(Glang_parser.XOREQ, 0); }
		public TerminalNode LSEQ() { return getToken(Glang_parser.LSEQ, 0); }
		public TerminalNode RSEQ() { return getToken(Glang_parser.RSEQ, 0); }
		public TerminalNode ADDEQ() { return getToken(Glang_parser.ADDEQ, 0); }
		public TerminalNode SUBEQ() { return getToken(Glang_parser.SUBEQ, 0); }
		public TerminalNode MULEQ() { return getToken(Glang_parser.MULEQ, 0); }
		public TerminalNode DIVEQ() { return getToken(Glang_parser.DIVEQ, 0); }
		public Logical_orContext logical_or() {
			return getRuleContext(Logical_orContext.class,0);
		}
		public AssignmentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment; }
	}

	public final AssignmentContext assignment() throws RecognitionException {
		AssignmentContext _localctx = new AssignmentContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_assignment);
		int _la;
		try {
			setState(324);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,23,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(319);
				obj_ident();
				setState(320);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << ANDEQ) | (1L << OREQ) | (1L << XOREQ) | (1L << LSEQ) | (1L << RSEQ) | (1L << ADDEQ) | (1L << SUBEQ) | (1L << MULEQ) | (1L << DIVEQ) | (1L << ASSIGN))) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(321);
				assignment();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(323);
				logical_or();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Logical_orContext extends ParserRuleContext {
		public List<Logical_andContext> logical_and() {
			return getRuleContexts(Logical_andContext.class);
		}
		public Logical_andContext logical_and(int i) {
			return getRuleContext(Logical_andContext.class,i);
		}
		public List<TerminalNode> DPIPE() { return getTokens(Glang_parser.DPIPE); }
		public TerminalNode DPIPE(int i) {
			return getToken(Glang_parser.DPIPE, i);
		}
		public Logical_orContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logical_or; }
	}

	public final Logical_orContext logical_or() throws RecognitionException {
		Logical_orContext _localctx = new Logical_orContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_logical_or);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(326);
			logical_and();
			setState(331);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(327);
					match(DPIPE);
					setState(328);
					logical_and();
					}
					} 
				}
				setState(333);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,24,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Logical_andContext extends ParserRuleContext {
		public List<Bitwise_orContext> bitwise_or() {
			return getRuleContexts(Bitwise_orContext.class);
		}
		public Bitwise_orContext bitwise_or(int i) {
			return getRuleContext(Bitwise_orContext.class,i);
		}
		public List<TerminalNode> DAMP() { return getTokens(Glang_parser.DAMP); }
		public TerminalNode DAMP(int i) {
			return getToken(Glang_parser.DAMP, i);
		}
		public Logical_andContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logical_and; }
	}

	public final Logical_andContext logical_and() throws RecognitionException {
		Logical_andContext _localctx = new Logical_andContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_logical_and);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(334);
			bitwise_or();
			setState(339);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(335);
					match(DAMP);
					setState(336);
					bitwise_or();
					}
					} 
				}
				setState(341);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,25,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bitwise_orContext extends ParserRuleContext {
		public List<Bitwise_xorContext> bitwise_xor() {
			return getRuleContexts(Bitwise_xorContext.class);
		}
		public Bitwise_xorContext bitwise_xor(int i) {
			return getRuleContext(Bitwise_xorContext.class,i);
		}
		public List<TerminalNode> PIPE() { return getTokens(Glang_parser.PIPE); }
		public TerminalNode PIPE(int i) {
			return getToken(Glang_parser.PIPE, i);
		}
		public Bitwise_orContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitwise_or; }
	}

	public final Bitwise_orContext bitwise_or() throws RecognitionException {
		Bitwise_orContext _localctx = new Bitwise_orContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_bitwise_or);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(342);
			bitwise_xor();
			setState(347);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(343);
					match(PIPE);
					setState(344);
					bitwise_xor();
					}
					} 
				}
				setState(349);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,26,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bitwise_xorContext extends ParserRuleContext {
		public List<Bitwise_andContext> bitwise_and() {
			return getRuleContexts(Bitwise_andContext.class);
		}
		public Bitwise_andContext bitwise_and(int i) {
			return getRuleContext(Bitwise_andContext.class,i);
		}
		public List<TerminalNode> CARET() { return getTokens(Glang_parser.CARET); }
		public TerminalNode CARET(int i) {
			return getToken(Glang_parser.CARET, i);
		}
		public Bitwise_xorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitwise_xor; }
	}

	public final Bitwise_xorContext bitwise_xor() throws RecognitionException {
		Bitwise_xorContext _localctx = new Bitwise_xorContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_bitwise_xor);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(350);
			bitwise_and();
			setState(355);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(351);
					match(CARET);
					setState(352);
					bitwise_and();
					}
					} 
				}
				setState(357);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,27,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bitwise_andContext extends ParserRuleContext {
		public List<EqualityContext> equality() {
			return getRuleContexts(EqualityContext.class);
		}
		public EqualityContext equality(int i) {
			return getRuleContext(EqualityContext.class,i);
		}
		public List<TerminalNode> AMP() { return getTokens(Glang_parser.AMP); }
		public TerminalNode AMP(int i) {
			return getToken(Glang_parser.AMP, i);
		}
		public Bitwise_andContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bitwise_and; }
	}

	public final Bitwise_andContext bitwise_and() throws RecognitionException {
		Bitwise_andContext _localctx = new Bitwise_andContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_bitwise_and);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(358);
			equality();
			setState(363);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(359);
					match(AMP);
					setState(360);
					equality();
					}
					} 
				}
				setState(365);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,28,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EqualityContext extends ParserRuleContext {
		public List<RelationalContext> relational() {
			return getRuleContexts(RelationalContext.class);
		}
		public RelationalContext relational(int i) {
			return getRuleContext(RelationalContext.class,i);
		}
		public List<TerminalNode> EQ() { return getTokens(Glang_parser.EQ); }
		public TerminalNode EQ(int i) {
			return getToken(Glang_parser.EQ, i);
		}
		public List<TerminalNode> NE() { return getTokens(Glang_parser.NE); }
		public TerminalNode NE(int i) {
			return getToken(Glang_parser.NE, i);
		}
		public EqualityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_equality; }
	}

	public final EqualityContext equality() throws RecognitionException {
		EqualityContext _localctx = new EqualityContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_equality);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(366);
			relational();
			setState(371);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(367);
					_la = _input.LA(1);
					if ( !(_la==EQ || _la==NE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(368);
					relational();
					}
					} 
				}
				setState(373);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,29,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RelationalContext extends ParserRuleContext {
		public List<AdditiveContext> additive() {
			return getRuleContexts(AdditiveContext.class);
		}
		public AdditiveContext additive(int i) {
			return getRuleContext(AdditiveContext.class,i);
		}
		public List<TerminalNode> LT() { return getTokens(Glang_parser.LT); }
		public TerminalNode LT(int i) {
			return getToken(Glang_parser.LT, i);
		}
		public List<TerminalNode> GT() { return getTokens(Glang_parser.GT); }
		public TerminalNode GT(int i) {
			return getToken(Glang_parser.GT, i);
		}
		public List<TerminalNode> LTE() { return getTokens(Glang_parser.LTE); }
		public TerminalNode LTE(int i) {
			return getToken(Glang_parser.LTE, i);
		}
		public List<TerminalNode> GTE() { return getTokens(Glang_parser.GTE); }
		public TerminalNode GTE(int i) {
			return getToken(Glang_parser.GTE, i);
		}
		public RelationalContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_relational; }
	}

	public final RelationalContext relational() throws RecognitionException {
		RelationalContext _localctx = new RelationalContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_relational);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(374);
			additive();
			setState(379);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(375);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LT) | (1L << GT) | (1L << LTE) | (1L << GTE))) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(376);
					additive();
					}
					} 
				}
				setState(381);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,30,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AdditiveContext extends ParserRuleContext {
		public List<MultiplicativeContext> multiplicative() {
			return getRuleContexts(MultiplicativeContext.class);
		}
		public MultiplicativeContext multiplicative(int i) {
			return getRuleContext(MultiplicativeContext.class,i);
		}
		public List<TerminalNode> PLUS() { return getTokens(Glang_parser.PLUS); }
		public TerminalNode PLUS(int i) {
			return getToken(Glang_parser.PLUS, i);
		}
		public List<TerminalNode> MINUS() { return getTokens(Glang_parser.MINUS); }
		public TerminalNode MINUS(int i) {
			return getToken(Glang_parser.MINUS, i);
		}
		public AdditiveContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_additive; }
	}

	public final AdditiveContext additive() throws RecognitionException {
		AdditiveContext _localctx = new AdditiveContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_additive);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(382);
			multiplicative();
			setState(387);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(383);
					_la = _input.LA(1);
					if ( !(_la==PLUS || _la==MINUS) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(384);
					multiplicative();
					}
					} 
				}
				setState(389);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MultiplicativeContext extends ParserRuleContext {
		public List<PrimaryContext> primary() {
			return getRuleContexts(PrimaryContext.class);
		}
		public PrimaryContext primary(int i) {
			return getRuleContext(PrimaryContext.class,i);
		}
		public List<TerminalNode> STAR() { return getTokens(Glang_parser.STAR); }
		public TerminalNode STAR(int i) {
			return getToken(Glang_parser.STAR, i);
		}
		public List<TerminalNode> SLASH() { return getTokens(Glang_parser.SLASH); }
		public TerminalNode SLASH(int i) {
			return getToken(Glang_parser.SLASH, i);
		}
		public List<TerminalNode> PERCENT() { return getTokens(Glang_parser.PERCENT); }
		public TerminalNode PERCENT(int i) {
			return getToken(Glang_parser.PERCENT, i);
		}
		public MultiplicativeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_multiplicative; }
	}

	public final MultiplicativeContext multiplicative() throws RecognitionException {
		MultiplicativeContext _localctx = new MultiplicativeContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_multiplicative);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(390);
			primary();
			setState(395);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(391);
					_la = _input.LA(1);
					if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << STAR) | (1L << SLASH) | (1L << PERCENT))) != 0)) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					setState(392);
					primary();
					}
					} 
				}
				setState(397);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,32,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PrimaryContext extends ParserRuleContext {
		public Resv_exprContext resv_expr() {
			return getRuleContext(Resv_exprContext.class,0);
		}
		public Func_callContext func_call() {
			return getRuleContext(Func_callContext.class,0);
		}
		public Obj_identContext obj_ident() {
			return getRuleContext(Obj_identContext.class,0);
		}
		public NumberContext number() {
			return getRuleContext(NumberContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(Glang_parser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(Glang_parser.RPAREN, 0); }
		public PrimaryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primary; }
	}

	public final PrimaryContext primary() throws RecognitionException {
		PrimaryContext _localctx = new PrimaryContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_primary);
		try {
			setState(406);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(398);
				resv_expr();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(399);
				func_call();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(400);
				obj_ident();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(401);
				number();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(402);
				match(LPAREN);
				setState(403);
				expression();
				setState(404);
				match(RPAREN);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Resv_exprContext extends ParserRuleContext {
		public Expr_condContext expr_cond() {
			return getRuleContext(Expr_condContext.class,0);
		}
		public Expr_whilContext expr_whil() {
			return getRuleContext(Expr_whilContext.class,0);
		}
		public Resv_exprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resv_expr; }
	}

	public final Resv_exprContext resv_expr() throws RecognitionException {
		Resv_exprContext _localctx = new Resv_exprContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_resv_expr);
		try {
			setState(410);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(408);
				expr_cond();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(409);
				expr_whil();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Resv_stateContext extends ParserRuleContext {
		public Stat_condContext stat_cond() {
			return getRuleContext(Stat_condContext.class,0);
		}
		public Stat_whilContext stat_whil() {
			return getRuleContext(Stat_whilContext.class,0);
		}
		public ReturContext retur() {
			return getRuleContext(ReturContext.class,0);
		}
		public Resv_stateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_resv_state; }
	}

	public final Resv_stateContext resv_state() throws RecognitionException {
		Resv_stateContext _localctx = new Resv_stateContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_resv_state);
		try {
			setState(415);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case IF:
				enterOuterAlt(_localctx, 1);
				{
				setState(412);
				stat_cond();
				}
				break;
			case WHILE:
				enterOuterAlt(_localctx, 2);
				{
				setState(413);
				stat_whil();
				}
				break;
			case RETURN:
				enterOuterAlt(_localctx, 3);
				{
				setState(414);
				retur();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stat_condContext extends ParserRuleContext {
		public Cond_identContext cond_ident() {
			return getRuleContext(Cond_identContext.class,0);
		}
		public Cond_siteContext cond_site() {
			return getRuleContext(Cond_siteContext.class,0);
		}
		public State_cond_bodyContext state_cond_body() {
			return getRuleContext(State_cond_bodyContext.class,0);
		}
		public TerminalNode ELSE() { return getToken(Glang_parser.ELSE, 0); }
		public Cond_bodyContext cond_body() {
			return getRuleContext(Cond_bodyContext.class,0);
		}
		public Stat_condContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat_cond; }
	}

	public final Stat_condContext stat_cond() throws RecognitionException {
		Stat_condContext _localctx = new Stat_condContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_stat_cond);
		int _la;
		try {
			setState(429);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(417);
				cond_ident();
				setState(418);
				cond_site();
				setState(419);
				state_cond_body();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(421);
				cond_ident();
				setState(422);
				cond_site();
				setState(424);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRACE) | (1L << APOST) | (1L << RETURN) | (1L << IF) | (1L << WHILE) | (1L << NUMBER) | (1L << OBJ_IDENT))) != 0)) {
					{
					setState(423);
					cond_body();
					}
				}

				setState(426);
				match(ELSE);
				setState(427);
				state_cond_body();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expr_condContext extends ParserRuleContext {
		public Cond_identContext cond_ident() {
			return getRuleContext(Cond_identContext.class,0);
		}
		public Cond_siteContext cond_site() {
			return getRuleContext(Cond_siteContext.class,0);
		}
		public TerminalNode ELSE() { return getToken(Glang_parser.ELSE, 0); }
		public List<Cond_bodyContext> cond_body() {
			return getRuleContexts(Cond_bodyContext.class);
		}
		public Cond_bodyContext cond_body(int i) {
			return getRuleContext(Cond_bodyContext.class,i);
		}
		public Expr_condContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr_cond; }
	}

	public final Expr_condContext expr_cond() throws RecognitionException {
		Expr_condContext _localctx = new Expr_condContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_expr_cond);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(431);
			cond_ident();
			setState(432);
			cond_site();
			setState(434);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRACE) | (1L << APOST) | (1L << RETURN) | (1L << IF) | (1L << WHILE) | (1L << NUMBER) | (1L << OBJ_IDENT))) != 0)) {
				{
				setState(433);
				cond_body();
				}
			}

			setState(436);
			match(ELSE);
			setState(437);
			cond_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Cond_siteContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(Glang_parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(Glang_parser.RPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Cond_siteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cond_site; }
	}

	public final Cond_siteContext cond_site() throws RecognitionException {
		Cond_siteContext _localctx = new Cond_siteContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_cond_site);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(439);
			match(LPAREN);
			setState(441);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << APOST) | (1L << IF) | (1L << WHILE) | (1L << NUMBER) | (1L << OBJ_IDENT))) != 0)) {
				{
				setState(440);
				expression();
				}
			}

			setState(443);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Cond_bodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(Glang_parser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(Glang_parser.RBRACE, 0); }
		public List<ElementContext> element() {
			return getRuleContexts(ElementContext.class);
		}
		public ElementContext element(int i) {
			return getRuleContext(ElementContext.class,i);
		}
		public Unbound_stateContext unbound_state() {
			return getRuleContext(Unbound_stateContext.class,0);
		}
		public List<ProseContext> prose() {
			return getRuleContexts(ProseContext.class);
		}
		public ProseContext prose(int i) {
			return getRuleContext(ProseContext.class,i);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public Cond_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cond_body; }
	}

	public final Cond_bodyContext cond_body() throws RecognitionException {
		Cond_bodyContext _localctx = new Cond_bodyContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_cond_body);
		int _la;
		try {
			int _alt;
			setState(464);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,43,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(445);
				match(LBRACE);
				{
				setState(455);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(449);
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
						while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
							if ( _alt==1 ) {
								{
								{
								setState(446);
								prose();
								}
								} 
							}
							setState(451);
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,40,_ctx);
						}
						setState(452);
						element();
						}
						} 
					}
					setState(457);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,41,_ctx);
				}
				setState(459);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << APOST) | (1L << IF) | (1L << WHILE) | (1L << NUMBER) | (1L << OBJ_IDENT))) != 0)) {
					{
					setState(458);
					unbound_state();
					}
				}

				}
				setState(461);
				match(RBRACE);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(462);
				unbound_state();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(463);
				statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class State_cond_bodyContext extends ParserRuleContext {
		public TerminalNode LBRACE() { return getToken(Glang_parser.LBRACE, 0); }
		public TerminalNode RBRACE() { return getToken(Glang_parser.RBRACE, 0); }
		public List<CategoryContext> category() {
			return getRuleContexts(CategoryContext.class);
		}
		public CategoryContext category(int i) {
			return getRuleContext(CategoryContext.class,i);
		}
		public StatementContext statement() {
			return getRuleContext(StatementContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(Glang_parser.SEMI, 0); }
		public State_cond_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_state_cond_body; }
	}

	public final State_cond_bodyContext state_cond_body() throws RecognitionException {
		State_cond_bodyContext _localctx = new State_cond_bodyContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_state_cond_body);
		int _la;
		try {
			setState(476);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACE:
				enterOuterAlt(_localctx, 1);
				{
				setState(466);
				match(LBRACE);
				setState(470);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << DCOMM) | (1L << DDOT) | (1L << LPAREN) | (1L << APOST) | (1L << RETURN) | (1L << IF) | (1L << ELSE) | (1L << WHILE) | (1L << FOR) | (1L << SWITCH) | (1L << STRUCT) | (1L << LINE_COMMENT) | (1L << BLOCK_COMMENT) | (1L << NUMBER) | (1L << OBJ_IDENT) | (1L << IDENT) | (1L << ESCAPED_PROSE))) != 0)) {
					{
					{
					setState(467);
					category();
					}
					}
					setState(472);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(473);
				match(RBRACE);
				}
				break;
			case LPAREN:
			case APOST:
			case RETURN:
			case IF:
			case WHILE:
			case NUMBER:
			case OBJ_IDENT:
				enterOuterAlt(_localctx, 2);
				{
				setState(474);
				statement();
				}
				break;
			case SEMI:
				enterOuterAlt(_localctx, 3);
				{
				setState(475);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Stat_whilContext extends ParserRuleContext {
		public Whil_identContext whil_ident() {
			return getRuleContext(Whil_identContext.class,0);
		}
		public Cond_siteContext cond_site() {
			return getRuleContext(Cond_siteContext.class,0);
		}
		public State_cond_bodyContext state_cond_body() {
			return getRuleContext(State_cond_bodyContext.class,0);
		}
		public TerminalNode ELSE() { return getToken(Glang_parser.ELSE, 0); }
		public Cond_bodyContext cond_body() {
			return getRuleContext(Cond_bodyContext.class,0);
		}
		public Stat_whilContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stat_whil; }
	}

	public final Stat_whilContext stat_whil() throws RecognitionException {
		Stat_whilContext _localctx = new Stat_whilContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_stat_whil);
		int _la;
		try {
			setState(490);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,47,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(478);
				whil_ident();
				setState(479);
				cond_site();
				setState(480);
				state_cond_body();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(482);
				whil_ident();
				setState(483);
				cond_site();
				setState(485);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRACE) | (1L << APOST) | (1L << RETURN) | (1L << IF) | (1L << WHILE) | (1L << NUMBER) | (1L << OBJ_IDENT))) != 0)) {
					{
					setState(484);
					cond_body();
					}
				}

				setState(487);
				match(ELSE);
				setState(488);
				state_cond_body();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expr_whilContext extends ParserRuleContext {
		public Whil_identContext whil_ident() {
			return getRuleContext(Whil_identContext.class,0);
		}
		public Expr_whil_siteContext expr_whil_site() {
			return getRuleContext(Expr_whil_siteContext.class,0);
		}
		public TerminalNode ELSE() { return getToken(Glang_parser.ELSE, 0); }
		public List<Cond_bodyContext> cond_body() {
			return getRuleContexts(Cond_bodyContext.class);
		}
		public Cond_bodyContext cond_body(int i) {
			return getRuleContext(Cond_bodyContext.class,i);
		}
		public Expr_whilContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr_whil; }
	}

	public final Expr_whilContext expr_whil() throws RecognitionException {
		Expr_whilContext _localctx = new Expr_whilContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_expr_whil);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(492);
			whil_ident();
			setState(493);
			expr_whil_site();
			setState(495);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRACE) | (1L << APOST) | (1L << RETURN) | (1L << IF) | (1L << WHILE) | (1L << NUMBER) | (1L << OBJ_IDENT))) != 0)) {
				{
				setState(494);
				cond_body();
				}
			}

			setState(497);
			match(ELSE);
			setState(498);
			cond_body();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expr_whil_siteContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(Glang_parser.LPAREN, 0); }
		public TerminalNode SEMI() { return getToken(Glang_parser.SEMI, 0); }
		public Expr_whil_returnContext expr_whil_return() {
			return getRuleContext(Expr_whil_returnContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(Glang_parser.RPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Expr_whil_siteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr_whil_site; }
	}

	public final Expr_whil_siteContext expr_whil_site() throws RecognitionException {
		Expr_whil_siteContext _localctx = new Expr_whil_siteContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_expr_whil_site);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(500);
			match(LPAREN);
			setState(502);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << APOST) | (1L << IF) | (1L << WHILE) | (1L << NUMBER) | (1L << OBJ_IDENT))) != 0)) {
				{
				setState(501);
				expression();
				}
			}

			setState(504);
			match(SEMI);
			setState(505);
			expr_whil_return();
			setState(506);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expr_whil_returnContext extends ParserRuleContext {
		public Type_listContext type_list() {
			return getRuleContext(Type_listContext.class,0);
		}
		public TerminalNode COLON() { return getToken(Glang_parser.COLON, 0); }
		public Obj_identContext obj_ident() {
			return getRuleContext(Obj_identContext.class,0);
		}
		public TerminalNode ASSIGN() { return getToken(Glang_parser.ASSIGN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Expr_whil_returnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr_whil_return; }
	}

	public final Expr_whil_returnContext expr_whil_return() throws RecognitionException {
		Expr_whil_returnContext _localctx = new Expr_whil_returnContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_expr_whil_return);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(508);
			type_list();
			setState(509);
			match(COLON);
			setState(510);
			obj_ident();
			setState(513);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ASSIGN) {
				{
				setState(511);
				match(ASSIGN);
				setState(512);
				expression();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ReturContext extends ParserRuleContext {
		public TerminalNode RETURN() { return getToken(Glang_parser.RETURN, 0); }
		public TerminalNode LPAREN() { return getToken(Glang_parser.LPAREN, 0); }
		public TerminalNode RPAREN() { return getToken(Glang_parser.RPAREN, 0); }
		public TerminalNode SEMI() { return getToken(Glang_parser.SEMI, 0); }
		public Unbound_stateContext unbound_state() {
			return getRuleContext(Unbound_stateContext.class,0);
		}
		public ReturContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retur; }
	}

	public final ReturContext retur() throws RecognitionException {
		ReturContext _localctx = new ReturContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_retur);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(515);
			match(RETURN);
			setState(516);
			match(LPAREN);
			setState(518);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << APOST) | (1L << IF) | (1L << WHILE) | (1L << NUMBER) | (1L << OBJ_IDENT))) != 0)) {
				{
				setState(517);
				unbound_state();
				}
			}

			setState(520);
			match(RPAREN);
			setState(521);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unbound_stateContext extends ParserRuleContext {
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(Glang_parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Glang_parser.COMMA, i);
		}
		public Unbound_stateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unbound_state; }
	}

	public final Unbound_stateContext unbound_state() throws RecognitionException {
		Unbound_stateContext _localctx = new Unbound_stateContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_unbound_state);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			expression();
			setState(528);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(524);
					match(COMMA);
					setState(525);
					expression();
					}
					} 
				}
				setState(530);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,52,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Cond_identContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(Glang_parser.IF, 0); }
		public Cond_identContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cond_ident; }
	}

	public final Cond_identContext cond_ident() throws RecognitionException {
		Cond_identContext _localctx = new Cond_identContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_cond_ident);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(531);
			match(IF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Func_identContext extends ParserRuleContext {
		public TerminalNode OBJ_IDENT() { return getToken(Glang_parser.OBJ_IDENT, 0); }
		public Func_identContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_func_ident; }
	}

	public final Func_identContext func_ident() throws RecognitionException {
		Func_identContext _localctx = new Func_identContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_func_ident);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(533);
			match(OBJ_IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Whil_identContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(Glang_parser.WHILE, 0); }
		public Whil_identContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_whil_ident; }
	}

	public final Whil_identContext whil_ident() throws RecognitionException {
		Whil_identContext _localctx = new Whil_identContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_whil_ident);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(535);
			match(WHILE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Obj_identContext extends ParserRuleContext {
		public TerminalNode OBJ_IDENT() { return getToken(Glang_parser.OBJ_IDENT, 0); }
		public Obj_identContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_obj_ident; }
	}

	public final Obj_identContext obj_ident() throws RecognitionException {
		Obj_identContext _localctx = new Obj_identContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_obj_ident);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(537);
			match(OBJ_IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProseContext extends ParserRuleContext {
		public Prose_identContext prose_ident() {
			return getRuleContext(Prose_identContext.class,0);
		}
		public ProseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prose; }
	}

	public final ProseContext prose() throws RecognitionException {
		ProseContext _localctx = new ProseContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_prose);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(539);
			prose_ident();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Type_listContext extends ParserRuleContext {
		public List<Type_identContext> type_ident() {
			return getRuleContexts(Type_identContext.class);
		}
		public Type_identContext type_ident(int i) {
			return getRuleContext(Type_identContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(Glang_parser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(Glang_parser.COMMA, i);
		}
		public Type_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_list; }
	}

	public final Type_listContext type_list() throws RecognitionException {
		Type_listContext _localctx = new Type_listContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_type_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(541);
			type_ident();
			setState(546);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(542);
				match(COMMA);
				setState(543);
				type_ident();
				}
				}
				setState(548);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Type_identContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(Glang_parser.IDENT, 0); }
		public TerminalNode OBJ_IDENT() { return getToken(Glang_parser.OBJ_IDENT, 0); }
		public Type_identContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type_ident; }
	}

	public final Type_identContext type_ident() throws RecognitionException {
		Type_identContext _localctx = new Type_identContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_type_ident);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(549);
			_la = _input.LA(1);
			if ( !(_la==OBJ_IDENT || _la==IDENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NumberContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(Glang_parser.NUMBER, 0); }
		public List<TerminalNode> APOST() { return getTokens(Glang_parser.APOST); }
		public TerminalNode APOST(int i) {
			return getToken(Glang_parser.APOST, i);
		}
		public Uni_identContext uni_ident() {
			return getRuleContext(Uni_identContext.class,0);
		}
		public NumberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_number; }
	}

	public final NumberContext number() throws RecognitionException {
		NumberContext _localctx = new NumberContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_number);
		try {
			setState(556);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				enterOuterAlt(_localctx, 1);
				{
				setState(551);
				match(NUMBER);
				}
				break;
			case APOST:
				enterOuterAlt(_localctx, 2);
				{
				setState(552);
				match(APOST);
				setState(553);
				uni_ident();
				setState(554);
				match(APOST);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unres_identContext extends ParserRuleContext {
		public TerminalNode IDENT() { return getToken(Glang_parser.IDENT, 0); }
		public Unres_identContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unres_ident; }
	}

	public final Unres_identContext unres_ident() throws RecognitionException {
		Unres_identContext _localctx = new Unres_identContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_unres_ident);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(558);
			match(IDENT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Res_identContext extends ParserRuleContext {
		public TerminalNode SWITCH() { return getToken(Glang_parser.SWITCH, 0); }
		public TerminalNode RETURN() { return getToken(Glang_parser.RETURN, 0); }
		public TerminalNode IF() { return getToken(Glang_parser.IF, 0); }
		public TerminalNode WHILE() { return getToken(Glang_parser.WHILE, 0); }
		public TerminalNode FOR() { return getToken(Glang_parser.FOR, 0); }
		public TerminalNode ELSE() { return getToken(Glang_parser.ELSE, 0); }
		public TerminalNode STRUCT() { return getToken(Glang_parser.STRUCT, 0); }
		public Res_identContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_res_ident; }
	}

	public final Res_identContext res_ident() throws RecognitionException {
		Res_identContext _localctx = new Res_identContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_res_ident);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(560);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << RETURN) | (1L << IF) | (1L << ELSE) | (1L << WHILE) | (1L << FOR) | (1L << SWITCH) | (1L << STRUCT))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Prose_identContext extends ParserRuleContext {
		public Uni_identContext uni_ident() {
			return getRuleContext(Uni_identContext.class,0);
		}
		public TerminalNode ESCAPED_PROSE() { return getToken(Glang_parser.ESCAPED_PROSE, 0); }
		public TerminalNode DDOT() { return getToken(Glang_parser.DDOT, 0); }
		public TerminalNode DCOMM() { return getToken(Glang_parser.DCOMM, 0); }
		public Prose_identContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prose_ident; }
	}

	public final Prose_identContext prose_ident() throws RecognitionException {
		Prose_identContext _localctx = new Prose_identContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_prose_ident);
		try {
			setState(566);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case RETURN:
			case IF:
			case ELSE:
			case WHILE:
			case FOR:
			case SWITCH:
			case STRUCT:
			case NUMBER:
			case OBJ_IDENT:
			case IDENT:
				enterOuterAlt(_localctx, 1);
				{
				setState(562);
				uni_ident();
				}
				break;
			case ESCAPED_PROSE:
				enterOuterAlt(_localctx, 2);
				{
				setState(563);
				match(ESCAPED_PROSE);
				}
				break;
			case DDOT:
				enterOuterAlt(_localctx, 3);
				{
				setState(564);
				match(DDOT);
				}
				break;
			case DCOMM:
				enterOuterAlt(_localctx, 4);
				{
				setState(565);
				match(DCOMM);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Uni_identContext extends ParserRuleContext {
		public Res_identContext res_ident() {
			return getRuleContext(Res_identContext.class,0);
		}
		public Unres_identContext unres_ident() {
			return getRuleContext(Unres_identContext.class,0);
		}
		public TerminalNode NUMBER() { return getToken(Glang_parser.NUMBER, 0); }
		public TerminalNode OBJ_IDENT() { return getToken(Glang_parser.OBJ_IDENT, 0); }
		public Uni_identContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_uni_ident; }
	}

	public final Uni_identContext uni_ident() throws RecognitionException {
		Uni_identContext _localctx = new Uni_identContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_uni_ident);
		try {
			setState(572);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case RETURN:
			case IF:
			case ELSE:
			case WHILE:
			case FOR:
			case SWITCH:
			case STRUCT:
				enterOuterAlt(_localctx, 1);
				{
				setState(568);
				res_ident();
				}
				break;
			case IDENT:
				enterOuterAlt(_localctx, 2);
				{
				setState(569);
				unres_ident();
				}
				break;
			case NUMBER:
				enterOuterAlt(_localctx, 3);
				{
				setState(570);
				match(NUMBER);
				}
				break;
			case OBJ_IDENT:
				enterOuterAlt(_localctx, 4);
				{
				setState(571);
				match(OBJ_IDENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CommentContext extends ParserRuleContext {
		public TerminalNode LINE_COMMENT() { return getToken(Glang_parser.LINE_COMMENT, 0); }
		public TerminalNode BLOCK_COMMENT() { return getToken(Glang_parser.BLOCK_COMMENT, 0); }
		public CommentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comment; }
	}

	public final CommentContext comment() throws RecognitionException {
		CommentContext _localctx = new CommentContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_comment);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(574);
			_la = _input.LA(1);
			if ( !(_la==LINE_COMMENT || _la==BLOCK_COMMENT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3C\u0243\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\3\2\7\2\u0086\n\2\f\2\16\2\u0089\13\2\3"+
		"\2\3\2\3\3\3\3\3\3\5\3\u0090\n\3\3\4\3\4\5\4\u0094\n\4\3\5\3\5\7\5\u0098"+
		"\n\5\f\5\16\5\u009b\13\5\3\5\3\5\3\5\3\5\7\5\u00a1\n\5\f\5\16\5\u00a4"+
		"\13\5\5\5\u00a6\n\5\3\6\3\6\3\6\5\6\u00ab\n\6\3\6\3\6\3\7\3\7\3\7\7\7"+
		"\u00b2\n\7\f\7\16\7\u00b5\13\7\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u00bd\n\b\3"+
		"\t\3\t\3\t\5\t\u00c2\n\t\3\n\3\n\3\n\3\n\3\13\3\13\3\13\3\13\7\13\u00cc"+
		"\n\13\f\13\16\13\u00cf\13\13\3\13\3\13\3\f\3\f\3\f\3\f\3\f\3\r\3\r\3\r"+
		"\3\16\3\16\3\16\7\16\u00de\n\16\f\16\16\16\u00e1\13\16\3\17\3\17\3\17"+
		"\5\17\u00e6\n\17\3\20\3\20\3\20\3\20\3\20\3\21\3\21\3\21\3\22\3\22\3\22"+
		"\7\22\u00f3\n\22\f\22\16\22\u00f6\13\22\3\23\3\23\3\23\3\23\3\23\3\24"+
		"\3\24\3\24\3\25\3\25\3\25\5\25\u0103\n\25\3\25\3\25\3\26\3\26\3\26\7\26"+
		"\u010a\n\26\f\26\16\26\u010d\13\26\3\27\3\27\3\27\3\27\3\30\3\30\3\31"+
		"\3\31\3\31\3\31\3\31\3\32\3\32\7\32\u011c\n\32\f\32\16\32\u011f\13\32"+
		"\3\32\3\32\3\32\7\32\u0124\n\32\f\32\16\32\u0127\13\32\3\32\3\32\3\32"+
		"\5\32\u012c\n\32\3\33\3\33\3\33\3\33\3\33\3\34\3\34\3\34\7\34\u0136\n"+
		"\34\f\34\16\34\u0139\13\34\3\34\3\34\3\34\5\34\u013e\n\34\3\35\3\35\3"+
		"\36\3\36\3\36\3\36\3\36\5\36\u0147\n\36\3\37\3\37\3\37\7\37\u014c\n\37"+
		"\f\37\16\37\u014f\13\37\3 \3 \3 \7 \u0154\n \f \16 \u0157\13 \3!\3!\3"+
		"!\7!\u015c\n!\f!\16!\u015f\13!\3\"\3\"\3\"\7\"\u0164\n\"\f\"\16\"\u0167"+
		"\13\"\3#\3#\3#\7#\u016c\n#\f#\16#\u016f\13#\3$\3$\3$\7$\u0174\n$\f$\16"+
		"$\u0177\13$\3%\3%\3%\7%\u017c\n%\f%\16%\u017f\13%\3&\3&\3&\7&\u0184\n"+
		"&\f&\16&\u0187\13&\3\'\3\'\3\'\7\'\u018c\n\'\f\'\16\'\u018f\13\'\3(\3"+
		"(\3(\3(\3(\3(\3(\3(\5(\u0199\n(\3)\3)\5)\u019d\n)\3*\3*\3*\5*\u01a2\n"+
		"*\3+\3+\3+\3+\3+\3+\3+\5+\u01ab\n+\3+\3+\3+\5+\u01b0\n+\3,\3,\3,\5,\u01b5"+
		"\n,\3,\3,\3,\3-\3-\5-\u01bc\n-\3-\3-\3.\3.\7.\u01c2\n.\f.\16.\u01c5\13"+
		".\3.\7.\u01c8\n.\f.\16.\u01cb\13.\3.\5.\u01ce\n.\3.\3.\3.\5.\u01d3\n."+
		"\3/\3/\7/\u01d7\n/\f/\16/\u01da\13/\3/\3/\3/\5/\u01df\n/\3\60\3\60\3\60"+
		"\3\60\3\60\3\60\3\60\5\60\u01e8\n\60\3\60\3\60\3\60\5\60\u01ed\n\60\3"+
		"\61\3\61\3\61\5\61\u01f2\n\61\3\61\3\61\3\61\3\62\3\62\5\62\u01f9\n\62"+
		"\3\62\3\62\3\62\3\62\3\63\3\63\3\63\3\63\3\63\5\63\u0204\n\63\3\64\3\64"+
		"\3\64\5\64\u0209\n\64\3\64\3\64\3\64\3\65\3\65\3\65\7\65\u0211\n\65\f"+
		"\65\16\65\u0214\13\65\3\66\3\66\3\67\3\67\38\38\39\39\3:\3:\3;\3;\3;\7"+
		";\u0223\n;\f;\16;\u0226\13;\3<\3<\3=\3=\3=\3=\3=\5=\u022f\n=\3>\3>\3?"+
		"\3?\3@\3@\3@\3@\5@\u0239\n@\3A\3A\3A\3A\5A\u023f\nA\3B\3B\3B\2\2C\2\4"+
		"\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNP"+
		"RTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082\2\n\4\2 (//\3\2-.\3\2),\3\2\22\23"+
		"\3\2\24\26\3\2>?\3\2\639\3\2:;\2\u024b\2\u0087\3\2\2\2\4\u008f\3\2\2\2"+
		"\6\u0093\3\2\2\2\b\u00a5\3\2\2\2\n\u00a7\3\2\2\2\f\u00ae\3\2\2\2\16\u00bc"+
		"\3\2\2\2\20\u00c1\3\2\2\2\22\u00c3\3\2\2\2\24\u00c7\3\2\2\2\26\u00d2\3"+
		"\2\2\2\30\u00d7\3\2\2\2\32\u00da\3\2\2\2\34\u00e2\3\2\2\2\36\u00e7\3\2"+
		"\2\2 \u00ec\3\2\2\2\"\u00ef\3\2\2\2$\u00f7\3\2\2\2&\u00fc\3\2\2\2(\u00ff"+
		"\3\2\2\2*\u0106\3\2\2\2,\u010e\3\2\2\2.\u0112\3\2\2\2\60\u0114\3\2\2\2"+
		"\62\u012b\3\2\2\2\64\u012d\3\2\2\2\66\u013d\3\2\2\28\u013f\3\2\2\2:\u0146"+
		"\3\2\2\2<\u0148\3\2\2\2>\u0150\3\2\2\2@\u0158\3\2\2\2B\u0160\3\2\2\2D"+
		"\u0168\3\2\2\2F\u0170\3\2\2\2H\u0178\3\2\2\2J\u0180\3\2\2\2L\u0188\3\2"+
		"\2\2N\u0198\3\2\2\2P\u019c\3\2\2\2R\u01a1\3\2\2\2T\u01af\3\2\2\2V\u01b1"+
		"\3\2\2\2X\u01b9\3\2\2\2Z\u01d2\3\2\2\2\\\u01de\3\2\2\2^\u01ec\3\2\2\2"+
		"`\u01ee\3\2\2\2b\u01f6\3\2\2\2d\u01fe\3\2\2\2f\u0205\3\2\2\2h\u020d\3"+
		"\2\2\2j\u0215\3\2\2\2l\u0217\3\2\2\2n\u0219\3\2\2\2p\u021b\3\2\2\2r\u021d"+
		"\3\2\2\2t\u021f\3\2\2\2v\u0227\3\2\2\2x\u022e\3\2\2\2z\u0230\3\2\2\2|"+
		"\u0232\3\2\2\2~\u0238\3\2\2\2\u0080\u023e\3\2\2\2\u0082\u0240\3\2\2\2"+
		"\u0084\u0086\5\4\3\2\u0085\u0084\3\2\2\2\u0086\u0089\3\2\2\2\u0087\u0085"+
		"\3\2\2\2\u0087\u0088\3\2\2\2\u0088\u008a\3\2\2\2\u0089\u0087\3\2\2\2\u008a"+
		"\u008b\7\2\2\3\u008b\3\3\2\2\2\u008c\u0090\5\6\4\2\u008d\u0090\5r:\2\u008e"+
		"\u0090\5\u0082B\2\u008f\u008c\3\2\2\2\u008f\u008d\3\2\2\2\u008f\u008e"+
		"\3\2\2\2\u0090\5\3\2\2\2\u0091\u0094\5\16\b\2\u0092\u0094\5\66\34\2\u0093"+
		"\u0091\3\2\2\2\u0093\u0092\3\2\2\2\u0094\7\3\2\2\2\u0095\u0099\7\13\2"+
		"\2\u0096\u0098\5\4\3\2\u0097\u0096\3\2\2\2\u0098\u009b\3\2\2\2\u0099\u0097"+
		"\3\2\2\2\u0099\u009a\3\2\2\2\u009a\u009c\3\2\2\2\u009b\u0099\3\2\2\2\u009c"+
		"\u00a6\7\f\2\2\u009d\u00a2\5\6\4\2\u009e\u009f\7\5\2\2\u009f\u00a1\5\6"+
		"\4\2\u00a0\u009e\3\2\2\2\u00a1\u00a4\3\2\2\2\u00a2\u00a0\3\2\2\2\u00a2"+
		"\u00a3\3\2\2\2\u00a3\u00a6\3\2\2\2\u00a4\u00a2\3\2\2\2\u00a5\u0095\3\2"+
		"\2\2\u00a5\u009d\3\2\2\2\u00a6\t\3\2\2\2\u00a7\u00a8\5l\67\2\u00a8\u00aa"+
		"\7\t\2\2\u00a9\u00ab\5\f\7\2\u00aa\u00a9\3\2\2\2\u00aa\u00ab\3\2\2\2\u00ab"+
		"\u00ac\3\2\2\2\u00ac\u00ad\7\n\2\2\u00ad\13\3\2\2\2\u00ae\u00b3\58\35"+
		"\2\u00af\u00b0\7\5\2\2\u00b0\u00b2\58\35\2\u00b1\u00af\3\2\2\2\u00b2\u00b5"+
		"\3\2\2\2\u00b3\u00b1\3\2\2\2\u00b3\u00b4\3\2\2\2\u00b4\r\3\2\2\2\u00b5"+
		"\u00b3\3\2\2\2\u00b6\u00bd\5\22\n\2\u00b7\u00bd\5\26\f\2\u00b8\u00bd\5"+
		"\36\20\2\u00b9\u00bd\5\64\33\2\u00ba\u00bd\5$\23\2\u00bb\u00bd\5\60\31"+
		"\2\u00bc\u00b6\3\2\2\2\u00bc\u00b7\3\2\2\2\u00bc\u00b8\3\2\2\2\u00bc\u00b9"+
		"\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bc\u00bb\3\2\2\2\u00bd\17\3\2\2\2\u00be"+
		"\u00c2\5\30\r\2\u00bf\u00c2\5 \21\2\u00c0\u00c2\5&\24\2\u00c1\u00be\3"+
		"\2\2\2\u00c1\u00bf\3\2\2\2\u00c1\u00c0\3\2\2\2\u00c2\21\3\2\2\2\u00c3"+
		"\u00c4\5t;\2\u00c4\u00c5\7\7\2\2\u00c5\u00c6\5\24\13\2\u00c6\23\3\2\2"+
		"\2\u00c7\u00cd\7\13\2\2\u00c8\u00cc\5\16\b\2\u00c9\u00cc\5\20\t\2\u00ca"+
		"\u00cc\5r:\2\u00cb\u00c8\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cb\u00ca\3\2\2"+
		"\2\u00cc\u00cf\3\2\2\2\u00cd\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce\u00d0"+
		"\3\2\2\2\u00cf\u00cd\3\2\2\2\u00d0\u00d1\7\f\2\2\u00d1\25\3\2\2\2\u00d2"+
		"\u00d3\5t;\2\u00d3\u00d4\7\7\2\2\u00d4\u00d5\5\32\16\2\u00d5\u00d6\7\6"+
		"\2\2\u00d6\27\3\2\2\2\u00d7\u00d8\5\32\16\2\u00d8\u00d9\7\6\2\2\u00d9"+
		"\31\3\2\2\2\u00da\u00df\5\34\17\2\u00db\u00dc\7\5\2\2\u00dc\u00de\5\34"+
		"\17\2\u00dd\u00db\3\2\2\2\u00de\u00e1\3\2\2\2\u00df\u00dd\3\2\2\2\u00df"+
		"\u00e0\3\2\2\2\u00e0\33\3\2\2\2\u00e1\u00df\3\2\2\2\u00e2\u00e5\5p9\2"+
		"\u00e3\u00e4\7/\2\2\u00e4\u00e6\58\35\2\u00e5\u00e3\3\2\2\2\u00e5\u00e6"+
		"\3\2\2\2\u00e6\35\3\2\2\2\u00e7\u00e8\5t;\2\u00e8\u00e9\7\7\2\2\u00e9"+
		"\u00ea\5\"\22\2\u00ea\u00eb\7\6\2\2\u00eb\37\3\2\2\2\u00ec\u00ed\5\"\22"+
		"\2\u00ed\u00ee\7\6\2\2\u00ee!\3\2\2\2\u00ef\u00f4\5(\25\2\u00f0\u00f1"+
		"\7\5\2\2\u00f1\u00f3\5(\25\2\u00f2\u00f0\3\2\2\2\u00f3\u00f6\3\2\2\2\u00f4"+
		"\u00f2\3\2\2\2\u00f4\u00f5\3\2\2\2\u00f5#\3\2\2\2\u00f6\u00f4\3\2\2\2"+
		"\u00f7\u00f8\5t;\2\u00f8\u00f9\7\7\2\2\u00f9\u00fa\5(\25\2\u00fa\u00fb"+
		"\5\b\5\2\u00fb%\3\2\2\2\u00fc\u00fd\5(\25\2\u00fd\u00fe\5\b\5\2\u00fe"+
		"\'\3\2\2\2\u00ff\u0100\5l\67\2\u0100\u0102\7\t\2\2\u0101\u0103\5*\26\2"+
		"\u0102\u0101\3\2\2\2\u0102\u0103\3\2\2\2\u0103\u0104\3\2\2\2\u0104\u0105"+
		"\7\n\2\2\u0105)\3\2\2\2\u0106\u010b\5,\27\2\u0107\u0108\7\6\2\2\u0108"+
		"\u010a\5,\27\2\u0109\u0107\3\2\2\2\u010a\u010d\3\2\2\2\u010b\u0109\3\2"+
		"\2\2\u010b\u010c\3\2\2\2\u010c+\3\2\2\2\u010d\u010b\3\2\2\2\u010e\u010f"+
		"\5t;\2\u010f\u0110\7\7\2\2\u0110\u0111\5.\30\2\u0111-\3\2\2\2\u0112\u0113"+
		"\5p9\2\u0113/\3\2\2\2\u0114\u0115\79\2\2\u0115\u0116\7\7\2\2\u0116\u0117"+
		"\5p9\2\u0117\u0118\5\62\32\2\u0118\61\3\2\2\2\u0119\u011d\7\13\2\2\u011a"+
		"\u011c\5r:\2\u011b\u011a\3\2\2\2\u011c\u011f\3\2\2\2\u011d\u011b\3\2\2"+
		"\2\u011d\u011e\3\2\2\2\u011e\u0120\3\2\2\2\u011f\u011d\3\2\2\2\u0120\u0125"+
		"\5\16\b\2\u0121\u0124\5r:\2\u0122\u0124\5\16\b\2\u0123\u0121\3\2\2\2\u0123"+
		"\u0122\3\2\2\2\u0124\u0127\3\2\2\2\u0125\u0123\3\2\2\2\u0125\u0126\3\2"+
		"\2\2\u0126\u0128\3\2\2\2\u0127\u0125\3\2\2\2\u0128\u0129\7\f\2\2\u0129"+
		"\u012c\3\2\2\2\u012a\u012c\5\16\b\2\u012b\u0119\3\2\2\2\u012b\u012a\3"+
		"\2\2\2\u012c\63\3\2\2\2\u012d\u012e\79\2\2\u012e\u012f\7\7\2\2\u012f\u0130"+
		"\5p9\2\u0130\u0131\7\6\2\2\u0131\65\3\2\2\2\u0132\u0137\58\35\2\u0133"+
		"\u0134\7\5\2\2\u0134\u0136\58\35\2\u0135\u0133\3\2\2\2\u0136\u0139\3\2"+
		"\2\2\u0137\u0135\3\2\2\2\u0137\u0138\3\2\2\2\u0138\u013a\3\2\2\2\u0139"+
		"\u0137\3\2\2\2\u013a\u013b\7\6\2\2\u013b\u013e\3\2\2\2\u013c\u013e\5R"+
		"*\2\u013d\u0132\3\2\2\2\u013d\u013c\3\2\2\2\u013e\67\3\2\2\2\u013f\u0140"+
		"\5:\36\2\u01409\3\2\2\2\u0141\u0142\5p9\2\u0142\u0143\t\2\2\2\u0143\u0144"+
		"\5:\36\2\u0144\u0147\3\2\2\2\u0145\u0147\5<\37\2\u0146\u0141\3\2\2\2\u0146"+
		"\u0145\3\2\2\2\u0147;\3\2\2\2\u0148\u014d\5> \2\u0149\u014a\7\30\2\2\u014a"+
		"\u014c\5> \2\u014b\u0149\3\2\2\2\u014c\u014f\3\2\2\2\u014d\u014b\3\2\2"+
		"\2\u014d\u014e\3\2\2\2\u014e=\3\2\2\2\u014f\u014d\3\2\2\2\u0150\u0155"+
		"\5@!\2\u0151\u0152\7\27\2\2\u0152\u0154\5@!\2\u0153\u0151\3\2\2\2\u0154"+
		"\u0157\3\2\2\2\u0155\u0153\3\2\2\2\u0155\u0156\3\2\2\2\u0156?\3\2\2\2"+
		"\u0157\u0155\3\2\2\2\u0158\u015d\5B\"\2\u0159\u015a\7\33\2\2\u015a\u015c"+
		"\5B\"\2\u015b\u0159\3\2\2\2\u015c\u015f\3\2\2\2\u015d\u015b\3\2\2\2\u015d"+
		"\u015e\3\2\2\2\u015eA\3\2\2\2\u015f\u015d\3\2\2\2\u0160\u0165\5D#\2\u0161"+
		"\u0162\7\34\2\2\u0162\u0164\5D#\2\u0163\u0161\3\2\2\2\u0164\u0167\3\2"+
		"\2\2\u0165\u0163\3\2\2\2\u0165\u0166\3\2\2\2\u0166C\3\2\2\2\u0167\u0165"+
		"\3\2\2\2\u0168\u016d\5F$\2\u0169\u016a\7\32\2\2\u016a\u016c\5F$\2\u016b"+
		"\u0169\3\2\2\2\u016c\u016f\3\2\2\2\u016d\u016b\3\2\2\2\u016d\u016e\3\2"+
		"\2\2\u016eE\3\2\2\2\u016f\u016d\3\2\2\2\u0170\u0175\5H%\2\u0171\u0172"+
		"\t\3\2\2\u0172\u0174\5H%\2\u0173\u0171\3\2\2\2\u0174\u0177\3\2\2\2\u0175"+
		"\u0173\3\2\2\2\u0175\u0176\3\2\2\2\u0176G\3\2\2\2\u0177\u0175\3\2\2\2"+
		"\u0178\u017d\5J&\2\u0179\u017a\t\4\2\2\u017a\u017c\5J&\2\u017b\u0179\3"+
		"\2\2\2\u017c\u017f\3\2\2\2\u017d\u017b\3\2\2\2\u017d\u017e\3\2\2\2\u017e"+
		"I\3\2\2\2\u017f\u017d\3\2\2\2\u0180\u0185\5L\'\2\u0181\u0182\t\5\2\2\u0182"+
		"\u0184\5L\'\2\u0183\u0181\3\2\2\2\u0184\u0187\3\2\2\2\u0185\u0183\3\2"+
		"\2\2\u0185\u0186\3\2\2\2\u0186K\3\2\2\2\u0187\u0185\3\2\2\2\u0188\u018d"+
		"\5N(\2\u0189\u018a\t\6\2\2\u018a\u018c\5N(\2\u018b\u0189\3\2\2\2\u018c"+
		"\u018f\3\2\2\2\u018d\u018b\3\2\2\2\u018d\u018e\3\2\2\2\u018eM\3\2\2\2"+
		"\u018f\u018d\3\2\2\2\u0190\u0199\5P)\2\u0191\u0199\5\n\6\2\u0192\u0199"+
		"\5p9\2\u0193\u0199\5x=\2\u0194\u0195\7\t\2\2\u0195\u0196\58\35\2\u0196"+
		"\u0197\7\n\2\2\u0197\u0199\3\2\2\2\u0198\u0190\3\2\2\2\u0198\u0191\3\2"+
		"\2\2\u0198\u0192\3\2\2\2\u0198\u0193\3\2\2\2\u0198\u0194\3\2\2\2\u0199"+
		"O\3\2\2\2\u019a\u019d\5V,\2\u019b\u019d\5`\61\2\u019c\u019a\3\2\2\2\u019c"+
		"\u019b\3\2\2\2\u019dQ\3\2\2\2\u019e\u01a2\5T+\2\u019f\u01a2\5^\60\2\u01a0"+
		"\u01a2\5f\64\2\u01a1\u019e\3\2\2\2\u01a1\u019f\3\2\2\2\u01a1\u01a0\3\2"+
		"\2\2\u01a2S\3\2\2\2\u01a3\u01a4\5j\66\2\u01a4\u01a5\5X-\2\u01a5\u01a6"+
		"\5\\/\2\u01a6\u01b0\3\2\2\2\u01a7\u01a8\5j\66\2\u01a8\u01aa\5X-\2\u01a9"+
		"\u01ab\5Z.\2\u01aa\u01a9\3\2\2\2\u01aa\u01ab\3\2\2\2\u01ab\u01ac\3\2\2"+
		"\2\u01ac\u01ad\7\65\2\2\u01ad\u01ae\5\\/\2\u01ae\u01b0\3\2\2\2\u01af\u01a3"+
		"\3\2\2\2\u01af\u01a7\3\2\2\2\u01b0U\3\2\2\2\u01b1\u01b2\5j\66\2\u01b2"+
		"\u01b4\5X-\2\u01b3\u01b5\5Z.\2\u01b4\u01b3\3\2\2\2\u01b4\u01b5\3\2\2\2"+
		"\u01b5\u01b6\3\2\2\2\u01b6\u01b7\7\65\2\2\u01b7\u01b8\5Z.\2\u01b8W\3\2"+
		"\2\2\u01b9\u01bb\7\t\2\2\u01ba\u01bc\58\35\2\u01bb\u01ba\3\2\2\2\u01bb"+
		"\u01bc\3\2\2\2\u01bc\u01bd\3\2\2\2\u01bd\u01be\7\n\2\2\u01beY\3\2\2\2"+
		"\u01bf\u01c9\7\13\2\2\u01c0\u01c2\5r:\2\u01c1\u01c0\3\2\2\2\u01c2\u01c5"+
		"\3\2\2\2\u01c3\u01c1\3\2\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c6\3\2\2\2\u01c5"+
		"\u01c3\3\2\2\2\u01c6\u01c8\5\6\4\2\u01c7\u01c3\3\2\2\2\u01c8\u01cb\3\2"+
		"\2\2\u01c9\u01c7\3\2\2\2\u01c9\u01ca\3\2\2\2\u01ca\u01cd\3\2\2\2\u01cb"+
		"\u01c9\3\2\2\2\u01cc\u01ce\5h\65\2\u01cd\u01cc\3\2\2\2\u01cd\u01ce\3\2"+
		"\2\2\u01ce\u01cf\3\2\2\2\u01cf\u01d3\7\f\2\2\u01d0\u01d3\5h\65\2\u01d1"+
		"\u01d3\5\66\34\2\u01d2\u01bf\3\2\2\2\u01d2\u01d0\3\2\2\2\u01d2\u01d1\3"+
		"\2\2\2\u01d3[\3\2\2\2\u01d4\u01d8\7\13\2\2\u01d5\u01d7\5\4\3\2\u01d6\u01d5"+
		"\3\2\2\2\u01d7\u01da\3\2\2\2\u01d8\u01d6\3\2\2\2\u01d8\u01d9\3\2\2\2\u01d9"+
		"\u01db\3\2\2\2\u01da\u01d8\3\2\2\2\u01db\u01df\7\f\2\2\u01dc\u01df\5\66"+
		"\34\2\u01dd\u01df\7\6\2\2\u01de\u01d4\3\2\2\2\u01de\u01dc\3\2\2\2\u01de"+
		"\u01dd\3\2\2\2\u01df]\3\2\2\2\u01e0\u01e1\5n8\2\u01e1\u01e2\5X-\2\u01e2"+
		"\u01e3\5\\/\2\u01e3\u01ed\3\2\2\2\u01e4\u01e5\5n8\2\u01e5\u01e7\5X-\2"+
		"\u01e6\u01e8\5Z.\2\u01e7\u01e6\3\2\2\2\u01e7\u01e8\3\2\2\2\u01e8\u01e9"+
		"\3\2\2\2\u01e9\u01ea\7\65\2\2\u01ea\u01eb\5\\/\2\u01eb\u01ed\3\2\2\2\u01ec"+
		"\u01e0\3\2\2\2\u01ec\u01e4\3\2\2\2\u01ed_\3\2\2\2\u01ee\u01ef\5n8\2\u01ef"+
		"\u01f1\5b\62\2\u01f0\u01f2\5Z.\2\u01f1\u01f0\3\2\2\2\u01f1\u01f2\3\2\2"+
		"\2\u01f2\u01f3\3\2\2\2\u01f3\u01f4\7\65\2\2\u01f4\u01f5\5Z.\2\u01f5a\3"+
		"\2\2\2\u01f6\u01f8\7\t\2\2\u01f7\u01f9\58\35\2\u01f8\u01f7\3\2\2\2\u01f8"+
		"\u01f9\3\2\2\2\u01f9\u01fa\3\2\2\2\u01fa\u01fb\7\6\2\2\u01fb\u01fc\5d"+
		"\63\2\u01fc\u01fd\7\n\2\2\u01fdc\3\2\2\2\u01fe\u01ff\5t;\2\u01ff\u0200"+
		"\7\7\2\2\u0200\u0203\5p9\2\u0201\u0202\7/\2\2\u0202\u0204\58\35\2\u0203"+
		"\u0201\3\2\2\2\u0203\u0204\3\2\2\2\u0204e\3\2\2\2\u0205\u0206\7\63\2\2"+
		"\u0206\u0208\7\t\2\2\u0207\u0209\5h\65\2\u0208\u0207\3\2\2\2\u0208\u0209"+
		"\3\2\2\2\u0209\u020a\3\2\2\2\u020a\u020b\7\n\2\2\u020b\u020c\7\6\2\2\u020c"+
		"g\3\2\2\2\u020d\u0212\58\35\2\u020e\u020f\7\5\2\2\u020f\u0211\58\35\2"+
		"\u0210\u020e\3\2\2\2\u0211\u0214\3\2\2\2\u0212\u0210\3\2\2\2\u0212\u0213"+
		"\3\2\2\2\u0213i\3\2\2\2\u0214\u0212\3\2\2\2\u0215\u0216\7\64\2\2\u0216"+
		"k\3\2\2\2\u0217\u0218\7>\2\2\u0218m\3\2\2\2\u0219\u021a\7\66\2\2\u021a"+
		"o\3\2\2\2\u021b\u021c\7>\2\2\u021cq\3\2\2\2\u021d\u021e\5~@\2\u021es\3"+
		"\2\2\2\u021f\u0224\5v<\2\u0220\u0221\7\5\2\2\u0221\u0223\5v<\2\u0222\u0220"+
		"\3\2\2\2\u0223\u0226\3\2\2\2\u0224\u0222\3\2\2\2\u0224\u0225\3\2\2\2\u0225"+
		"u\3\2\2\2\u0226\u0224\3\2\2\2\u0227\u0228\t\7\2\2\u0228w\3\2\2\2\u0229"+
		"\u022f\7=\2\2\u022a\u022b\7\61\2\2\u022b\u022c\5\u0080A\2\u022c\u022d"+
		"\7\61\2\2\u022d\u022f\3\2\2\2\u022e\u0229\3\2\2\2\u022e\u022a\3\2\2\2"+
		"\u022fy\3\2\2\2\u0230\u0231\7?\2\2\u0231{\3\2\2\2\u0232\u0233\t\b\2\2"+
		"\u0233}\3\2\2\2\u0234\u0239\5\u0080A\2\u0235\u0239\7@\2\2\u0236\u0239"+
		"\7\4\2\2\u0237\u0239\7\3\2\2\u0238\u0234\3\2\2\2\u0238\u0235\3\2\2\2\u0238"+
		"\u0236\3\2\2\2\u0238\u0237\3\2\2\2\u0239\177\3\2\2\2\u023a\u023f\5|?\2"+
		"\u023b\u023f\5z>\2\u023c\u023f\7=\2\2\u023d\u023f\7>\2\2\u023e\u023a\3"+
		"\2\2\2\u023e\u023b\3\2\2\2\u023e\u023c\3\2\2\2\u023e\u023d\3\2\2\2\u023f"+
		"\u0081\3\2\2\2\u0240\u0241\t\t\2\2\u0241\u0083\3\2\2\2;\u0087\u008f\u0093"+
		"\u0099\u00a2\u00a5\u00aa\u00b3\u00bc\u00c1\u00cb\u00cd\u00df\u00e5\u00f4"+
		"\u0102\u010b\u011d\u0123\u0125\u012b\u0137\u013d\u0146\u014d\u0155\u015d"+
		"\u0165\u016d\u0175\u017d\u0185\u018d\u0198\u019c\u01a1\u01aa\u01af\u01b4"+
		"\u01bb\u01c3\u01c9\u01cd\u01d2\u01d8\u01de\u01e7\u01ec\u01f1\u01f8\u0203"+
		"\u0208\u0212\u0224\u022e\u0238\u023e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}