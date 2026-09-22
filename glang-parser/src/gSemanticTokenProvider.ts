
import * as vscode from "vscode";

import {
    CharStreams,
    CommonTokenStream,
    Token
} from "antlr4ts";

import {
    Glang_lexer
} from "../generated/grammar/Glang_lexer";

import {
    Glang_parser
} from "../generated/grammar/Glang_parser";

import {
    GSyntaxVisitor
} from "./gSyntaxVisitor";

import {
    G_TOKEN_LEGEND,
    G_TOKEN_TYPES
} from "./gSemanticTokens";


export class GSemanticTokenProvider
    implements vscode.DocumentSemanticTokensProvider {

    public provideDocumentSemanticTokens(
        document: vscode.TextDocument,
        token: vscode.CancellationToken
    ): vscode.SemanticTokens {

        console.log(
            "Semantic token provider called:",
            document.fileName
        );

        const input =
            CharStreams.fromString(
                document.getText()
            );

        const lexer =
            new Glang_lexer(input);

        const tokenStream =
            new CommonTokenStream(lexer);

        const parser =
            new Glang_parser(tokenStream);

        parser.removeErrorListeners();
        lexer.removeErrorListeners();

        const tree =
            parser.program();

        const visitor =
            new GSyntaxVisitor();

        tree.accept(visitor);

        const builder =
            new vscode.SemanticTokensBuilder(
                G_TOKEN_LEGEND
            );


        // Parser-derived highlights
        for (const highlight of visitor.highlights) {

            const position =
                document.positionAt(
                    highlight.start
                );

            const end =
                document.positionAt(
                    highlight.start +
                    highlight.length
                );

            const length =
                document.offsetAt(end) -
                document.offsetAt(position);

            const tokenType =
                G_TOKEN_TYPES.indexOf(
                    highlight.type
                );

            if (tokenType < 0) {
                continue;
            }

            builder.push(
                position.line,
                position.character,
                length,
                tokenType,
                0
            );
        }


        // Lexer-derived comments
        for (const token of tokenStream.getTokens()) {

            if (
                token.type !== Glang_lexer.LINE_COMMENT &&
                token.type !== Glang_lexer.BLOCK_COMMENT
            ) {
                continue;
            }

            if (token.startIndex < 0) {
                continue;
            }

            const tokenType =
                G_TOKEN_TYPES.indexOf("comment");

            if (tokenType < 0) {
                continue;
            }

            const start =
                document.positionAt(token.startIndex);

            const end =
                document.positionAt(token.stopIndex + 1);


            // Single-line comment
            if (start.line === end.line) {

                builder.push(
                    start.line,
                    start.character,
                    end.character - start.character,
                    tokenType,
                    0
                );

                continue;
            }


            // Multi-line block comment

            // First line
            builder.push(
                start.line,
                start.character,
                document.lineAt(start.line).text.length -
                    start.character,
                tokenType,
                0
            );


            // Middle lines
            for (
                let line = start.line + 1;
                line < end.line;
                line++
            ) {

                builder.push(
                    line,
                    0,
                    document.lineAt(line).text.length,
                    tokenType,
                    0
                );
            }


            // Final line
            builder.push(
                end.line,
                0,
                end.character,
                tokenType,
                0
            );
        }

        return builder.build();
    }
}
