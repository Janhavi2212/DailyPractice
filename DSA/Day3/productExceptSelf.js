var productExceptSelf = function(nums) {
    let left=[1],right=[1],m=nums.length-1,res=[];
      for(i=0;i<m;i++){
       // arr=[...nums.slice(0,i),...nums.slice(i+1)]
       // ans.push(product(arr))
       left.push(left[left.length-1]*nums[i])
       right.unshift(right[0]*nums[m-i])
      }
     for(i=0;i<=m;i++){
       res.push(left[i]*right[i])
     }
     return res
   };