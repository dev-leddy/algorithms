/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    if(s.length % 2) return false;
    
    for(let i = 0; i < s.length; i++)
        {
            let curr = s[i];
            if(curr == "(" || curr == "[" || curr == "{")
                {
                    switch(curr)
                        {
                            case "(":
                                stack.push(")");
                                break;
                            case  "[":
                                stack.push("]");
                                break;
                            case "{":
                                stack.push("}");
                                break;
                        }                   
                }
            else if(curr == ")" || curr == "]" || curr == "}")
                {
                    if(stack.pop() != curr) return false;
                }
        }
    if(stack.length != 0) return false;
    return true;
};
