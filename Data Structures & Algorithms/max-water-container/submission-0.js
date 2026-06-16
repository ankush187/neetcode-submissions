class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let start = 0, end = heights.length - 1;
        let maxTillNow = 0;

        while(start < end) {
            const height = Math.min(heights[start], heights[end]);
            const width = end - start;
            const area = width * height;
            if(maxTillNow < area) {
                maxTillNow = area;
            }
            if (heights[start] < heights[end]) {
                start++;
            } else {
                end--;
            }
        }

        return maxTillNow
    }
}
