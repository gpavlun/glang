import * as vscode from "vscode";
import { ANTLRErrorListener } from "antlr4ts/ANTLRErrorListener";
import { RecognitionException } from "antlr4ts/RecognitionException";

export class GlangErrorListener implements ANTLRErrorListener<number> {
    constructor(
        private readonly diagnostics: vscode.Diagnostic[]
    ) {}

    syntaxError(
        recognizer: any,
        offendingSymbol: number | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        const position = new vscode.Position(
            line - 1,
            charPositionInLine
        );

        const range = new vscode.Range(
            position,
            position.translate(0, 1)
        );

        this.diagnostics.push(
            new vscode.Diagnostic(
                range,
                msg,
                vscode.DiagnosticSeverity.Error
            )
        );
    }

    reportAmbiguity(): void {}

    reportAttemptingFullContext(): void {}

    reportContextSensitivity(): void {}
}