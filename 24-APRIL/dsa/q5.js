//Question: Given an integer array and a window size k, slide the window from left to right and record the maximum in each position.

nums = [1, 3, -1, -3, 5, 3, 6, 7],  k = 3
//[3, 3, 5, 5, 6, 7]

function result(nums,k){
    let res=[];
    let arr=nums.slice(0,k)
    let ele=maximum(arr)
    res.push(ele)
    for(i=k;i<nums.length;i++){
        arr.push(nums[i])
        arr.shift()
        ele=maximum(arr)
        res.push(ele)
    }
    console.log(res)
    return
}

function maximum(arr){
    let max=-Infinity;
    for(el of arr){
        max=Math.max(max,el)
    }
    return max
}

result(nums,k);