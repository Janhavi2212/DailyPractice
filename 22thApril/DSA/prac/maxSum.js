//Find the maximum sum of any contiguous subarray (Kadane’s algorithm).
ip=[-2,1,-3,4,-1,2,1,-5,4]
function maxSubarr1(ip){
    let res=ip[0]
    for(i=1;i<ip.length;i++){
        let sum=0
        for(j=i;j<ip.length;j++){
            sum+=ip[j]
            res=Math.max(res,sum)
        }
    }
    return res;
}
console.log(maxSubarr1(ip))

//// Kayden'd approach

function maxSubarrSum(ip){
    let res=ip[0]
    let max=ip[0]
    for(i=0;i<ip.length;i++){
        max=Math.max(max+ip[i],ip[i])
        res=Math.max(res,max)
    }
    return res
}
console.log(maxSubarrSum(ip))


