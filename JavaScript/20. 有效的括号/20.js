/**
* @param {string} s
* @return {boolean}
*/
var isValid = function(s) {
    // 如果数组的长度为奇数，直接返回false
    if (s.length%2===1){
        return false;
    }


    // 定义一个数组，模拟栈的结构
    const stack = [];
    for(let i=0;i<s.length;i+=1){
        const c = s[i];
        // 判断函数参数里面是否含有括号。如果有就加入数组 stack
        if(c==='('||c==='{'||c==='['){
            stack.push(c);
        }else{
            // 将 stack 的最后一位取出，与第一位存入的c 做判断，如果不匹配就返回 false
            const top = stack[stack.length-1];
            if(
                (top === '(' && c===')') ||
                (top === '[' && c===']') ||
                (top === '{' && c==='}')
            ){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
};
