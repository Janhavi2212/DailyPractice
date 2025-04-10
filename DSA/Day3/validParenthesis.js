var isValid = function(s) {
    let stk=[]
    for(el of s){
        if("({[".includes(el)){stk.push(el)}
        else if(")}]".includes(el)){
        if((el==")" && stk[stk.length-1]=="(")||
        (el=="}" && stk[stk.length-1]=="{")||
        (el=="]" && stk[stk.length-1]=="[")){
            stk.pop()
        } else {
            stk.push(el)
        }
     }        
    }
    return (stk.length==0)
};