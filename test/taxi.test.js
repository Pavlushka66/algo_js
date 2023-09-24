import expect from "expect";
import {taxi} from "../src/taxi";

test('empty', async () => {
    const actual = taxi([])
    expect(actual).toBe(0);
})
test('single zero', async () => {
    const actual = taxi([[0]])
    expect(actual).toBe(0);
})
test('single negative', async () => {
    const actual = taxi([[-1]])
    expect(actual).toBe(0);
})
test('single positive', async () => {
    const actual = taxi([[1]])
    expect(actual).toBe(1);
})
test('one', async () => {
    const actual = taxi([
        [0, 0, 0, 1],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ])
    expect(actual).toBe(2);
})
test('five', async () => {
    const actual = taxi([
        [0, 1, -1],
        [1, 0, -1],
        [1, 1, 1]
    ])
    expect(actual).toBe(5);
})

