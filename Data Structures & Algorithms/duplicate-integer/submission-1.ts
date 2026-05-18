class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Set<number>();
        for (const num of nums) {
            if (map.has(num)) return true;
            map.add(num)
        }
        return false;
    }
}
