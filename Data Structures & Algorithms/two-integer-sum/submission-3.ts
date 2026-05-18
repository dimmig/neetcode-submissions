class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // optimized with map O(n)
        const seenMap = new Map<number, number>()
        for (let i = 0; i < nums.length; i++) {
            seenMap.set(nums[i], i);
        }

        for (let i = 0; i < nums.length; i++) {
            const elem = target - nums[i]
            if (seenMap.has(elem) && i !== seenMap.get(elem)) return [i, seenMap.get(elem)]
        }
    }
}
