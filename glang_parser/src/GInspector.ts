// import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

// import { Glang_parserVisitor } from "../generated/grammar/Glang_parserVisitor";

// import {
//     IdentifierContext,
//     FunctionDefinitionContext,
//     FunctionCallContext,
//     PrefixElementContext,
//     SubchainContext
// } from "../generated/grammar/Glang_parser";

// export class GInspector
//     extends AbstractParseTreeVisitor<void>
//     implements Glang_parserVisitor<void> {

//     protected defaultResult(): void {
//     }

//     visitIdentifier(ctx: IdentifierContext): void {
//         const category = this.classify(ctx);

//         console.log(
//             `${ctx.text} -> ${category} @ ${ctx.start.startIndex}`
//         );
//     }

//     private classify(ctx: IdentifierContext): string {
//         const parent = ctx.parent;

//         // Function declaration name
//         if (parent instanceof FunctionDefinitionContext) {
//             return "function";
//         }

//         // Function call name
//         if (parent instanceof FunctionCallContext) {
//             return "function";
//         }

//         // Declaration prefix:
//         // int:
//         // static, int:
//         if (parent instanceof PrefixElementContext) {
//             return "prefix";
//         }

//         // Parameter type:
//         // int: x
//         if (this.isParameterPrefix(ctx)) {
//             return "prefix";
//         }

//         // Parameter name:
//         // int: x
//         if (this.isFunctionParameter(ctx)) {
//             return "parameter";
//         }

//         return "identifier";
//     }

//     private isParameterPrefix(
//         ctx: IdentifierContext
//     ): boolean {

//         const subchain = this.findSubchainParent(ctx);

//         if (!subchain) {
//             return false;
//         }

//         if (!this.isInsideFunctionDefinition(subchain)) {
//             return false;
//         }

//         const operands = subchain.operand();
//         const operations = subchain.operation();

//         const operandIndex = operands.findIndex(
//             operand =>
//                 operand.start.startIndex === ctx.start.startIndex
//         );

//         if (operandIndex < 0) {
//             return false;
//         }

//         const nextOperation = operations[operandIndex];

//         return nextOperation?.text === ":";
//     }

//     private isFunctionParameter(
//         ctx: IdentifierContext
//     ): boolean {

//         const subchain = this.findSubchainParent(ctx);

//         if (!subchain) {
//             return false;
//         }

//         if (!this.isInsideFunctionDefinition(subchain)) {
//             return false;
//         }

//         const operands = subchain.operand();
//         const operations = subchain.operation();

//         const operandIndex = operands.findIndex(
//             operand =>
//                 operand.start.startIndex === ctx.start.startIndex
//         );

//         if (operandIndex <= 0) {
//             return false;
//         }

//         const previousOperation = operations[operandIndex - 1];

//         return previousOperation?.text === ":";
//     }

//     private findSubchainParent(
//         ctx: IdentifierContext
//     ): SubchainContext | undefined {

//         let current = ctx.parent;

//         while (current) {

//             if (current instanceof SubchainContext) {
//                 return current;
//             }

//             current = current.parent;
//         }

//         return undefined;
//     }

//     private isInsideFunctionDefinition(
//         ctx: SubchainContext
//     ): boolean {

//         let current = ctx.parent;

//         while (current) {

//             if (current instanceof FunctionDefinitionContext) {
//                 return true;
//             }

//             current = current.parent;
//         }

//         return false;
//     }
// }