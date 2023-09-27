const VOWELS = new Set(['a','e','i','o','u'])
const STATE_ENUM = {
    lookingLeft: 'lookingLeft',
    lookingRight: 'lookingRight',
    swap: 'swap'
}

export default function reverseVowels(input) {
    if (!input) {
        return input
    }

    let l = 0
    let r = input.length - 1
    let move = STATE_ENUM.lookingLeft

    const splt = input.split('')
    while (l <= r) {
        if (move === STATE_ENUM.lookingLeft) {
            if (VOWELS.has(splt[l])) {
                move = STATE_ENUM.lookingRight
            }
            ++l
        }
        if (move === STATE_ENUM.lookingRight) {
            if (VOWELS.has(splt[r])) {
                move = STATE_ENUM.swap
            }
            --r
        }
        if (move === STATE_ENUM.swap) {
            const oldL = splt[l - 1]
            splt[l - 1] = splt[r + 1]
            splt[r + 1] = oldL
            move = STATE_ENUM.lookingLeft
        }
    }

    return splt.join('');
}