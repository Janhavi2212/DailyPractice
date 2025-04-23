function valFreq(arr,value){
let count=0;
for(el of arr){
    if(el==value){
        count++
    }
}
return count
}
let arr=[2,3,2,4,2], value=2;
console.log(valFreq(arr,value)); //3