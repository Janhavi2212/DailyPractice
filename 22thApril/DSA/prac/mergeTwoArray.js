let arr1=[1,3,4,5,5], arr2=[2,4,6]
function merge(arr1,arr2){
    let op=[];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length){
         if(arr1[i]<arr2[j]){
            op.push(arr1[i])
            i++
        } else {
            op.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        op.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        op.push(arr2[j])
        j++
    }
    return op
}


console.log(merge(arr1,arr2))
