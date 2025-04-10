var subarraySum = function(nums, k) {
    let count=0,sum=0;
    let map1= new Map;
    map1.set(0,1)
    for(num of nums){
        sum+=num
        if(map1.has(sum-k)) count+=map1.get(sum-k)
        map1.set(sum,(map1.get(sum)||0)+1)
    }    
    return count
    
    };