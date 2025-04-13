    var removeDuplicates = function(nums) {
        let i=0,j=1,k=1;
        while(i<j && j<nums.length){
          if(nums[i]!==nums[j]){
              nums.splice(i+1,0,nums[j])
              k++
              i++;
          }
          j++;
        }
        console.log(nums,k)
        return k
      };
  
  removeDuplicates([0,0,1,1,1,2,2,3,3,4]) ///

  var removeDuplicates1 = function(nums) {
    let   set1=new Set(nums)
    console.log([...set1])
  };
  removeDuplicates1([0,0,1,1,1,2,2,3,3,4])


  function removeAdjacentDuplicatesCorrected(arr) {
    if (arr.length === 0) {
      console.log("Array is empty:", arr);
      return;
    }
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j];
      }
    }
    arr.length = i + 1; 
    console.log("Modified array:", arr);
  }
  
  removeAdjacentDuplicatesCorrected(arr);