var isAnagram = function(s, t) {
    if(s.length!==t.length){
           return false;
       }
       s1=s.split("").sort()
       t1=t.split("").sort()
       //console.log(s1,t1)
       let k=0,j=0;
       while(k<s1.length && j<t1.length){
           if(s1[k]!==t1[j]){
               return false
           }
           k++;
           j++
       }
       return true
   };
   