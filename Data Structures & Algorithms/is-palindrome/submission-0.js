class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let start = 0, end = s.length - 1;
        const result = true;

        while(start <= end) {
            const startChar = s[start];
            const regex = /^[a-zA-Z0-9]$/;
            if(!regex.test(startChar)) {
                start++;
                continue;
            }
            const endChar = s[end];
            if(!regex.test(endChar)) {
                end--;
                continue;
            }
            if(startChar.toLowerCase() !== endChar.toLowerCase()) {
                return false;
            }
            start++;
            end--;
        }

        return result
    }
}
