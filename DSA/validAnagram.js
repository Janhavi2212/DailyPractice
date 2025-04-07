var isAnagram = function(s, t) {
    if(s.length!==t.length){
           return false;
       }
       s1=s.split("")
       s1=s1.sort()
       t1=t.split("")
       t1=t1.sort()
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

s="anagram"
t="nagaram"
console.log(isAnagram(s,t));