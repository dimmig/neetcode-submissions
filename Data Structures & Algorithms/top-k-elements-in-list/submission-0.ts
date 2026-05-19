class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // [6, 5, 5, 3, 1, 1], k = 2

        // ---freq map---
        // { 6: "1", 5: "2", 3: "1", 1: "2" }
        // ---freq arr---
        // [2, 2, 1, 1] k = 1
        // while (i < k) { ... }

        const freqMap = new Map<number, number>
        for (const num of nums) {
            const freq = freqMap.get(num) || 0;
            freqMap.set(num, freq + 1);
        }

        const freqArr = Array.from(freqMap.values()).sort((a, b) => b - a);
        let i = 0;

        const result = []
        const sortedNums = nums.sort((a, b) => b - a);
        while (i < k) {
            for (const num of sortedNums) {
               if (freqMap.get(num) === freqArr[i]) {
                    result.push(num)
                    freqMap.delete(num)
                    break;
               }
            }
            i++;
        }
        return result;
    }
}
