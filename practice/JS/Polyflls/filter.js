Array.prototype.myFilter=function(cb){
    let temp=[]
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)) temp.push(this[i])
    }
return temp
}

nums=[1,2,-1,3,8]
const moreThan2=nums.myFilter((el)=>{
    return el>2;
})
console.log(moreThan2);