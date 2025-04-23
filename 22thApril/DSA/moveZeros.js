var moveZeroes = function(nums) {
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[idx] = nums[i];
            idx++;
        }
    }
    for (let i = idx; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums
};


console.log(moveZeroes([0,1,0,3,12]));

var moveZeroes2 = function(nums) {
    for(i=0;i<nums.length;i++){
       if(nums[i]==0){
            nums=[...nums.slice(0,i),...nums.slice(i+1)]
            nums.push(0)
        }
    }

    console.log(nums)
};

moveZeroes2([0,1,0,3,12])