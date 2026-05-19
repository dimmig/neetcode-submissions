class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let wholeProduct = 1;
        let zeroIndexesMap = new Map<number, boolean>()
        let hasZeros = false
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                wholeProduct *= nums[i];
            } else {
                zeroIndexesMap.set(i, true)
                hasZeros = true;
            }
        }

        // 1 * 2 * 4 * 6 = 48

        const result = [];

        if (Array.from(zeroIndexesMap.values()).length > 1) {
            return Array(nums.length).fill(0)
        }


        for (let i = 0; i < nums.length; i++) {
            if (hasZeros && !zeroIndexesMap.get(i)) {
                result[i] = 0
            } else if (hasZeros && zeroIndexesMap.get(i)) {
                result[i] = wholeProduct
            } else {
                result[i] = wholeProduct * Math.pow(nums[i], -1)
            }
        }

        return result
    }
}
