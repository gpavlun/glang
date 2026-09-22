import * as vscode from "vscode";

export const G_TOKEN_TYPES = [
    "type",
    "primitive",
    "modifier",
    "keyword",
    "function",
    "parameter",
    "variable",
    "number",
    "comment",
    "control",
    "reserved",
    "comment"
];

export const G_TOKEN_LEGEND =
    new vscode.SemanticTokensLegend(
        G_TOKEN_TYPES
    );