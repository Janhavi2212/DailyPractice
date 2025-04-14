/// Reduce
// arr.reduce((acc,curr,i,arr)=>{},initialValue)

Array.prototype.myReduce=function (cb,initialValue){
    var accumulator= initialValue;

    for(let i=0;i<this.length;i++){
        accumulator=accumulator?cb(accumulator,this[i],i,this):this[i]
    }
    return accumulator;
}

let nums=[1,2,3,4,5,6]
const sum=nums.myReduce((acc,el)=>{
    return acc+el
},0)

console.log(sum)