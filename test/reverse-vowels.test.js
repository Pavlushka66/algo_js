import expect from "expect";
import matrix from "../src/matrix";
import reverseVowels from "../src/reverse-vowels";

test('empty', async () => {
    const actual = reverseVowels('')
    expect(actual).toBe('');
})
test('au', async () => {
    const actual = reverseVowels('au')
    expect(actual).toBe('ua');
})
test('aeu', async () => {
    const actual = reverseVowels('uea')
    expect(actual).toBe('aeu');
})
test('simple', async () => {
    const actual = reverseVowels('uttttttttttttsssssssffffa')
    expect(actual).toBe('attttttttttttsssssssffffu');
})
test('all to left', async () => {
    const actual = reverseVowels('uattttttttttttsssssssffff')
    expect(actual).toBe('auttttttttttttsssssssffff');
})
test('all to right', async () => {
    const actual = reverseVowels('ttttttttttttsssssssffffua')
    expect(actual).toBe('ttttttttttttsssssssffffau');
})
test('all vowels', async () => {
    const actual = reverseVowels('aeiou')
    expect(actual).toBe('uoiea');
})


