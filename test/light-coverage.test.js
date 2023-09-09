import runLightCoverage from "../src/light-coverage";
import expect from "expect";

test('single zero', async () => {
    const actual = runLightCoverage([0])
    expect(actual).toBe(1);
})

test('single -1', async () => {
    const actual = runLightCoverage([-1])
    expect(actual).toBe(-1);
})

test('three covered', async () => {
    const actual = runLightCoverage([-1,-1,-1,3,-1,-1,-1])
    expect(actual).toBe(1);
})