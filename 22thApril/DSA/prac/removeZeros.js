ip=[0,1,0,2,3,0,4];
function removeZeros0(ip){
    return ip.filter(el=>el!==0)
}
console.log(removeZeros0(ip))
function removeZeros(ip){
    let idx=0;
    for(i=0;i<ip.length;i++){
        if(ip[i]!==0){
            ip[idx]=ip[i]
            idx++
        }
    }
    ip.length=idx;
    return ip;
}

console.log(removeZeros(ip));
