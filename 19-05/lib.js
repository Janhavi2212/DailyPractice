// Mini Data Processing Utility Lib

miniUtility={
  deepFlatten:function(arr){
    let res=[]
    for(el of arr){
      if(Array.isArray(el)){
        res=[...res,...this.deepFlatten(el)]
      } else {
        res.push(el)
      }
    }
    return res
  },
  groupBy: function(arr, key){
    let res={}
    for(el of arr){
      for(keys in el){
        if(keys==key){
          res[el[keys]]=res[el[keys]]?[...res[el[keys]],el]:[el]
        }
      }
    }
    return res
  },
  deepClone: function(obj){
    let objClone={};
  for(keys in obj){
    if(typeof(obj[keys])=="object"){
      objClone[keys]=this.deepClone(obj[keys])
    } else {
      objClone[keys]=obj[keys]
    }
  }
  return objClone
  },
  
  polyfillMap: function(cb,arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        res.push(cb(arr[i],i,arr))
    }
    return res
  },
}

Array.prototype.myMap=function(cb){
  let res=[]
  for(let i=0;i<this.length;i++){
    res.push(cb(this[i],i,this))
  }
  return res
}


Array.prototype.myReduce = function(cb,initialVal){
  let acc= initialVal
  for(let i=0;i<this.length;i++){
    acc=acc?cb(acc,this[i],i,this):this[0]
  }
  return acc
}
let arr=[1,2,3,4,[3,4,5],9,0,[9,9,0,[2,3,4]]]
let flattenedArr = miniUtility.deepFlatten(arr)

let sum_reduce = flattenedArr.myReduce((acc,el)=>acc+el,0)
console.log(sum_reduce)

console.log(miniUtility.deepFlatten(arr));
const myBooks = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949
  },
  
   {
    title: "abs",
    author: "George R. Orwell",
    year: 1949
  }
];
console.log(miniUtility.groupBy(myBooks,"year"))
