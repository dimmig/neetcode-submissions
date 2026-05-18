class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>
        for (const str of strs) {
            const key = Array.from(str).sort().join("")
            if (!map.has(key)) map.set(key, [])
            map.get(key).push(str)
        }
        const result = []
        for (const strs of map.values()) {
            result.push(strs)
        }

        return result
    }
}
