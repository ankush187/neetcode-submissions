class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const itemIndexMap = {};
        for(let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if(itemIndexMap[diff] != undefined) {
                return [itemIndexMap[diff], i];
            } else {
                itemIndexMap[nums[i]] = i;
            }
        }
    }
}
