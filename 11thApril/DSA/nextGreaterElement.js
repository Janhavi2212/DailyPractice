var nextGreaterElement = function(nums1, nums2) {
    let op=[]
  for(el of nums1){
      op.push(check(nums2,el))
  }
  console.log(op)
  return op
  };
  
  function check(nums,elm){
  let i=nums.indexOf(elm)
  nums3=nums.slice(i+1)
  //console.log(nums3)
  for(el of nums3){
    if(el>elm){
      return el
    }
  }
  return -1
  }
  //console.log(check([1,3,4,2],1))
  nextGreaterElement([4,1,2],[1,3,4,2])