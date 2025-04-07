var isPalindrome = function(s) {
    let arr=s.toLowerCase().split("")
    let arr2=[]
    const alp='abcdefghijklmnopqrstuvwxyz';
    const nums="0123456789"
    for(i=0;i<arr.length;i++){
        if(alp.includes(arr[i])||nums.includes(arr[i])){
            arr2.push(arr[i])
        }
    }
    let k=0,j=arr2.length-1;
    while(k<j){
        if(arr2[k]!==arr2[j]){
            return false
        }
        k++;
        j--;
    }

return true
};

s="A man, a plan, a canal: Panama";
console.log(isPalindrome(s))