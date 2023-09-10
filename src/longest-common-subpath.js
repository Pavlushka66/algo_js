/**
 * @param {number[][]} paths
 * @return {number}
 */
export default function longestCommonSubpath(paths) {
    let mainSet // Set<string>
    for (let p=0; p<paths.length; ++p) {
        const path = paths[p];
        const pathSet = new Set(); // Set<string>
        for (let end=0; end<path.length; ++end) {
            for (let start = 0; start <=end; ++start) {
                const sub = path.slice(start, end + 1).join(';');
                pathSet.add(sub);
            }
        }

        if (p === 0) {
            mainSet = pathSet;
        } else {
            mainSet.forEach(e => {if (!pathSet.has(e)) {mainSet.delete(e)}})
        }
    }

    let result = 0;
    mainSet.forEach(sub => {
        const len = sub.split(';')?.length ?? 0;
        if (len > result) result = len;
    })

    return result;
}