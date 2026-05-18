class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean  {
        if (s.length !== t.length) return false;

        const charMap = new Map<string, number>;
        for (const char of s) {
            if (!charMap.has(char)) {
                charMap.set(char, 1);
                continue;
            }

            charMap.set(char, charMap.get(char) + 1)
        }

        for (const char of t) {
            if (!charMap.has(char) || charMap.get(char) === 0) return false;
            charMap.set(char, charMap.get(char) - 1)
        }

        return true;
    }
}
