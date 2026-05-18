class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean  {
        let minString = s;
        if (s.length > t.length) minString = t;

        const charMap = new Map<string, number>;
        for (const char of minString) {
            if (!charMap.has(char)) {
                charMap.set(char, 1);
                continue;
            }

            charMap.set(char, charMap.get(char) + 1)
        }

        const maxStr = minString === s ? t : s
        for (const char of maxStr) {
            if (!charMap.has(char) || charMap.get(char) === 0) return false;
            charMap.set(char, charMap.get(char) - 1)
        }

        return true;
    }
}
