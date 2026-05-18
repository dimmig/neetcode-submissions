class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const lengthMap = new Map<number, string[]>
        for (const str of strs) {
            if (lengthMap.has(str.length)) {
                lengthMap.get(str.length).push(str)
                continue;
            }
            lengthMap.set(str.length, [str])
        }

        const result = []
        for (const [key, strings] of lengthMap) {
            if (strings.length < 2) {
                result.push(strings)
                continue
            }

            const visited = new Array(strings.length).fill(false);

            for (let i = 0; i < strings.length; i++) {
                if (visited[i]) continue;

                const currentGroup = [strings[i]];
                visited[i] = true;

                for (let j = i + 1; j < strings.length; j++) {
                    if (!visited[j] && (strings[i] === strings[j] || this.isAnagram(strings[i], strings[j]))) {
                        currentGroup.push(strings[j]);
                        visited[j] = true;
                    }
                }
                result.push(currentGroup);
            }
        }

        return result;
    }

    isAnagram(s: string, t: string): boolean {
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
