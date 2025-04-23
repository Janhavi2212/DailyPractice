ip=[7,2,9,4,5]
function secondMax(ip){
    let max=ip[0]
    for(el of ip){
        max=Math.max(max,el)
    }
    let res=-Infinity;
    for(el of ip){
        if(el<max){
            res=Math.max(el,res)
        }
    }
    return res
}

console.log(secondMax(ip))
