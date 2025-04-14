// Array.map((num,i,arr)=>{})
Array.prototype.myMap=function(cb){
    let temp=[]
    for(i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this));
    }
    return temp;
}

let nums=[1,2,3,4]
const multiplyBy3=nums.myMap((num,i,arr)=>{
    return num*3
})
console.log(multiplyBy3);