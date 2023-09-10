import expect from "expect";
import numbersDisappearedFromArray from "../src/numbers-disappeared-from-array";

test('single zero', async () => {
    const actual = numbersDisappearedFromArray([0])
    expect(actual).toEqual([1]);
})

test('double', async () => {
    const actual = numbersDisappearedFromArray([0,1])
    expect(actual).toEqual([2]);
})

test('few', async () => {
    const actual = numbersDisappearedFromArray([0,1,0,4])
    expect(actual?.sort()).toEqual([2,3]);
})

test('same', async () => {
    const actual = numbersDisappearedFromArray([1,1,1,1])
    expect(actual?.sort()).toEqual([2,3,4]);
})