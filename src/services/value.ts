import { range, shuffle } from "./utils";

export function createValues(row: number, col: number) {
    const numberElements = Math.floor(row * col / 2);
    const array: number[] = [];
    range(numberElements).forEach((index) => {
        array.push(index, index);
    })
    return shuffle(array);
}