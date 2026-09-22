import { parse } from "./src/parser";

const errors: any[] = [];

const source = `
int: add(int: x, int: y) {
    return: x + ;
}
`;

parse(source, errors);

console.log("Errors:", errors.length);

for (const error of errors) {
    console.log(error.message);
}