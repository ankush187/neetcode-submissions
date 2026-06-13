class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const leftProd = [];
        const rightProd = [];

        leftProd[0] = 1;
        for(let i = 1; i < nums.length; i++) {
            leftProd[i] = leftProd[i - 1] * nums[i - 1];
        }

        rightProd[nums.length - 1] = 1;
        for(let i = nums.length - 2; i >=0; i--) {
            rightProd[i] = rightProd[i + 1] * nums[i + 1];
        }

        let result = [];
        for(let i = 0; i < nums.length; i++) {
            result[i] = leftProd[i] * rightProd[i];
        }

        return result;


    }
}
