class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        const sortedNums = nums.sort((a, b) => a - b);

        for(let i = 0; i < sortedNums.length; i++) {
            if(i > 0 && sortedNums[i - 1] === sortedNums[i]) continue;

                let start = i + 1;
                let end = sortedNums.length - 1;

                while(start < end) {                     
                    let total = sortedNums[i] + sortedNums[start] + sortedNums[end];
                    if(total === 0) {
                        result.push([sortedNums[i], sortedNums[start], sortedNums[end]]);
                        start++;
                        end--;
                        while(start < end && sortedNums[start] === sortedNums[start - 1]) {
                            start++;
                        }
                    } else if(total < 0) {
                        start++;
                    } else {
                        end--;
                    }
                } 

                
            
        }

        return result;
    }
}
