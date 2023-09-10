import expect from "expect";
import longestCommonSubpath from "../src/longest-common-subpath";

test('one', async () => {
    const actual = longestCommonSubpath([[1,2,3]])
    expect(actual).toBe(3);
})
test('three', async () => {
    const actual = longestCommonSubpath([[0, 1, 2, 3, 4],
        [2, 3, 4],
        [4, 0, 1, 2, 3]])
    expect(actual).toBe(2);
})
test('different', async () => {
    const actual = longestCommonSubpath([[0,1,2,3,4],
        [4,3,2,1,0]])
    expect(actual).toBe(1);
})