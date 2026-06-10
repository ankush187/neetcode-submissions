class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const oldLength = nums.length;
        const setArr = new Set(nums);
        const newSize = setArr.size;
        return oldLength === newSize ? false : true;
    }
}
