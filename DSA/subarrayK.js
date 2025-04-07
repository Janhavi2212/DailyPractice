var subarraySum = function(nums, k) {
    let count=0;
   for(i=0;i<nums.length;i++){
     let sum=0;
     for(j=i;j<nums.length;j++){
       sum+=nums[j]
       if(sum==k){
         count++
       }
     }
   }
    return count
};

nums=[1,2,3]
k=3

console.log(subarraySum(nums,k));