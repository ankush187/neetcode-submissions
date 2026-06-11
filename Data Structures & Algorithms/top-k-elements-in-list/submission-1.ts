class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const freqMap = {};
        nums.forEach(item => {
            if(freqMap[item]) {
                freqMap[item] += 1;
            } else {
                freqMap[item] = 1;
            }
        })

        const bucket = new Array(nums.length);

        for(let item in freqMap) {
            const freq = freqMap[item];
            if(bucket[freq]) {
                bucket[freq].push(item);
            } else {
                bucket[freq] = [item];
            }
        }

        const result = [];

        for(let i = bucket.length, count = k; i > 0 && count > 0; i--) {
            if(bucket[i]) {
                result.push(...bucket[i]);
                count  = count - bucket[i].length;
            }
        }

        return result;
    }
}
