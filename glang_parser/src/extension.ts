import * as vscode from "vscode";
import { parse } from "./parser";

import {
    GSemanticTokenProvider
} from "./gSemanticTokenProvider";

import {
    G_TOKEN_LEGEND
} from "./gSemanticTokens";

console.log("GLANG extension module loaded");

export function activate(context: vscode.ExtensionContext) {

    console.log("Glang extension activated");

    const diagnostics =
        vscode.languages.createDiagnosticCollection("glang");

    context.subscriptions.push(diagnostics);

    function parseDocument(document: vscode.TextDocument) {
        if (document.languageId !== "g") {
            return;
        }

        console.log("Parsing:", document.fileName);

        const errors: vscode.Diagnostic[] = [];

        parse(document.getText(), errors);

        console.log("Errors:", errors.length);

        diagnostics.set(document.uri, errors);
    }

    context.subscriptions.push(
        vscode.workspace.onDidOpenTextDocument(parseDocument)
    );

    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument(event => {
            parseDocument(event.document);
        })
    );

    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(editor => {
            if (editor) {
                parseDocument(editor.document);
            }
        })
    );

    // Semantic highlighting
    const semanticTokenProvider =
        new GSemanticTokenProvider();

    context.subscriptions.push(
        vscode.languages.registerDocumentSemanticTokensProvider(
            { language: "g" },
            semanticTokenProvider,
            G_TOKEN_LEGEND
        )
    );

    // Parse the currently active document immediately.
    if (vscode.window.activeTextEditor) {
        parseDocument(vscode.window.activeTextEditor.document);
    }
}

export function deactivate() {}