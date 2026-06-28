class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

        let start = 0;
        let end = nums.length - 1;

        while(start < end) {
            let mid = Math.floor(start + (end - start) / 2);

            if(nums[end] < nums[mid]) {
                // value in right half
                start = mid + 1;
            } else {
                end = mid;
                // in left part
            }
        }
        return nums[start];
    }
}
