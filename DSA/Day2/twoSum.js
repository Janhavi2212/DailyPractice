var twoSum = function(nums, target) {
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
          //console.log(nums[i])
            if(nums[i]+nums[j]==target && i!==j){
              return [i,j] 
            }
        }
    }
};

nums=[3,2,4],target=6;
let res=twoSum(nums,target);
console.log(res) // [1,2]