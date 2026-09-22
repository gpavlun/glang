"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./src/parser");
const errors = [];
const source = `
int: add(int: x, int: y) {
    return: x + ;
}
`;
(0, parser_1.parse)(source, errors);
console.log("Errors:", errors.length);
for (const error of errors) {
    console.log(error.message);
}
//# sourceMappingURL=test-parser.js.map