var search = function(nums, target) {
    if(nums.length<2){
        if(nums[0]===target){
            return 0
        } else {
            return -1
        }
    }
    let s=0,e=nums.length-1,mid=0;
    while(s<=e){
        mid=Math.floor((e+s)/2)
        if(nums[mid]===target){
            return mid
        } else if (nums[mid]>target){
            e=mid-1
        } else {
            s=mid+1
        }
    }
    return -1;
};

let nums = [-1,0,3,5,9,12], target = 9;
console.log(search(nums,target))