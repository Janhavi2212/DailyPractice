//Question: For each day’s temperature in an array, determine how many days you’d have to wait until a warmer day. If no warmer day comes, use 0.

function calTemp(arr){
let res=[]
for(i=0;i<arr.length;i++){
    let count=0,j=i+1
    while(j<arr.length){
        if(arr[j]>arr[i]){
            count=j-i
            break;
        }
        j++
    }
    res.push(count)
}
return res
}

T = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(calTemp(T));
//[1, 1, 4, 2, 1, 1, 0, 0]
