class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const closingOpeningMap = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        const stack = [];

        for(let i = 0; i < s.length; i++) {
            if(closingOpeningMap[s[i]]) {
                // the coming one is closing hence check for opening in stack
                if (stack[stack.length - 1] === closingOpeningMap[s[i]]) {
                    stack.pop();
                } else {
                    return false
                }
            } else {
                stack.push(s[i]);
            }
        }

        return !(stack.length > 0)
    }
}
