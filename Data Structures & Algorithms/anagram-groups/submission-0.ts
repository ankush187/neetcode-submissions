class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const anagramMap = {};

        strs.forEach(item => {
            const sorted = item.split('').sort().join('');

            if(anagramMap[sorted]) {
                anagramMap[sorted].push(item);
            } else {
                anagramMap[sorted] = [item];
            }
        });

        return Object.values(anagramMap);
    }
}
