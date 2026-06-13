class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const seqStart = [];
        let maxLength = 0;

        const numSet =  new Set(nums);
        

        numSet.forEach(item => {
            if(numSet.has(item - 1) === false) {
                // this is the starting of seq
                seqStart.push(item);
            }
        })


        seqStart.forEach(item => {
            let count = 1;
            while(numSet.has(item + count)) {
                count++;
            }
            if(maxLength < count) {
                maxLength = count
            }
        })

        return maxLength;

        
    }
}
