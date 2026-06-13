class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        
        if(strs.length === 0) return String.fromCharCode(258);

        const seperator = String.fromCharCode(257);

        return strs.join(seperator);
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str === String.fromCharCode(258) ) return [];

        const seperator = String.fromCharCode(257);

        return str.split(seperator);
    }
}
