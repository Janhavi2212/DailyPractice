var removeDuplicates = function(s) {
    let stk=[]
    for(let el of s){
        if(stk.length>0 && stk[stk.length-1]==el){
            stk.pop()
        } else {
            stk.push(el)
        }
    }
    return stk.join("")
};