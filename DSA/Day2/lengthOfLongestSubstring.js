var lengthOfLongestSubstring = function(s) {
    let maxLen=0;
  for(i=0;i<s.length;i++){
   let res=""
   for(j=i;j<s.length;j++){
       res+=s[j]
       if(check(res)){
           maxLen=Math.max(res.length,maxLen)
       }
   }
  }
  return maxLen
};

function check(s){
let freq={}
   s=s.split("")
   for(el of s){
      freq[el]=(freq[el]||0)+1
   }
   let len=Object.keys(freq).length;
   if(len==s.length){
     return true
   } else {
     return false
   }
}
s1="abcabcbb";
op1=lengthOfLongestSubstring(s1)
console.log(op1) // 3