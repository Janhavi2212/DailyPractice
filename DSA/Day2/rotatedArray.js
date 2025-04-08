// Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
// Output: {3, 4, 5, 6, 1, 2}

let ip=[1,2,3,4,5,6], d=2;
function rotatedArray(ip,d){
let n=ip.length;
if(d>n){
    d=d%n;
  }
let p1=ip.slice(d)
p2=ip.splice(0,d)
//console.log(p1,p2);
res=[...p1,...p2]
return res
}
op=rotatedArray(ip,d)
console.log(op);//[ 3, 4, 5, 6, 1, 2 ]

// Input: arr[] = {1, 2, 3}, d = 4
// Output: {2, 3, 1}
ip2=[1,2,3],d2=4;
op2=rotatedArray(ip2,d2); 
console.log(op2) //[ 2, 3, 1 ]
