    var removeDuplicates = function(nums) {
        let i=0,j=1,k=1;
        while(i<j && j<nums.length){
          if(nums[i]!==nums[j]){
              nums.splice(i+1,0,nums[j])
              k++
              i++;
          }j++;
        }
        console.log(nums,k)
        return k
      };
  
  removeDuplicates([0,0,1,1,1,2,2,3,3,4]) ///

  var removeDuplicates1 = function(nums) {
    let   set1=new Set()
    for(el of nums){
      set1.add(el);
    }
    console.log([...set1])
  };
  removeDuplicates1([0,0,1,1,1,2,2,3,3,4])
