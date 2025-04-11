var longestConsecutive = function(nums) {
    let maxCount=0
      if(nums.length==0){
          return 0
      }
      nums.sort((a,b)=>a-b)
      count = 1;
      for(i=0;i<nums.length;i++){
        if(nums[i+1]==nums[i]+1) 
          count++
        else if(nums[i+1]==nums[i]) continue
        else count=1
        maxCount=Math.max(maxCount,count)
      }
      console.log(maxCount)
      return maxCount
  };
  longestConsecutive([0,3,7,2,5,8,4,6,0,1])//9