import * as vscode from "vscode";
import {
    CharStreams,
    CommonTokenStream
} from "antlr4ts";
import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";

import { Glang_lexer } from "../generated/grammar/Glang_lexer";
import { Glang_parser } from "../generated/grammar/Glang_parser";
import { GlangErrorListener } from "./diagnostics";

export function parse(
    source: string,
    diagnostics: vscode.Diagnostic[]
): void {
    const input = CharStreams.fromString(source);

    const lexer = new Glang_lexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new Glang_parser(tokens);

    const errorListener: ANTLRErrorListener<number> =
        new GlangErrorListener(diagnostics);

    lexer.removeErrorListeners();
    parser.removeErrorListeners();

    lexer.addErrorListener(errorListener);
    parser.addErrorListener(errorListener);

    parser.program();
}