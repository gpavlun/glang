import {
    CharStreams,
    CommonTokenStream
} from "antlr4ts";

import { Glang_lexer } from "../generated/grammar/Glang_lexer";
import { Glang_parser } from "../generated/grammar/Glang_parser";
import { GSyntaxVisitor } from "./gSyntaxVisitor";

const source = `
int: x = 5;

int: add(int: x, int: y) {
    return(x + y);
}

foo(x + 2);

This is ordinary prose.
`;

const input = CharStreams.fromString(source);

const lexer = new Glang_lexer(input);
const tokens = new CommonTokenStream(lexer);

const parser = new Glang_parser(tokens);

parser.removeErrorListeners();
lexer.removeErrorListeners();

const tree = parser.program();

console.log("\n=== SEMANTIC HIGHLIGHTS ===");

const visitor = new GSyntaxVisitor();

tree.accept(visitor);

for (const highlight of visitor.highlights) {
    console.log(
        `${highlight.type}: ${source.substring(
            highlight.start,
            highlight.start + highlight.length
        )} @ ${highlight.start}`
    );
}