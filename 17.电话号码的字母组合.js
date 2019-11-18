/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (51.30%)
 * Likes:    483
 * Dislikes: 0
 * Total Accepted:    53.6K
 * Total Submissions: 104.6K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    var phone = {};
    var output = [];

    [
        ,
        ,
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz'
    ].forEach((string, index)=>{
        if(string){
            phone[`${index}`] = string;
        }
    })

    if (digits.length != 0) {
        backtrack("", digits);
    }
    function backtrack(combination , next_digits) {
        // if there is no more digits to check
        if (next_digits === '') {
            // the combination is done
            output.push(combination);
        }
        // if there are still digits to check
        else {
            // iterate over all letters which map 
            // the next available digit
            var digit = next_digits.substring(0, 1);
            var letters = phone[digit];
            for (var i = 0; i < letters.length; i++) {
                var letter = letters[i];
                // append the current letter to the combination
                // and proceed to the next digits
                backtrack(combination + letter, next_digits.substring(1));
            }
        }
    }
    return output;
};
// @lc code=end
