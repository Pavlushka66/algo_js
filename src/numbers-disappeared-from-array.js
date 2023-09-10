//https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
export default function numbersDisappearedFromArray(array) {
    const n = array.length
    const set = new Set()
    while (array.length) {
        set.add(array.shift())
    }
    const result = []
    for (let i =1; i<=n; ++i) {
        if (!set.has(i)){
            result.push(i)
        }
    }
    return result;
}