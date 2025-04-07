var longestPalindrome = function(s) {
    let ans=""
      let n=s.length,maxLength=0;
       for(i=0;i<n;i++){
         let res=""
        for(j=i;j<n;j++){
          res+=s[j]
          //console.log(res);
          if(isPallindrome(res)){
            let len=res.length
            if(len>maxLength){
              maxLength=len;
              ans=res;
            }
            
          }
        }
        
       } 
       //console.log(ans);
       return ans;
    };
    
    
    function isPallindrome(s){
      let i=0,j=s.length-1;
      while(i<j){
        if(s[i]!==s[j]){
          return false
        }
        i++;
        j--
      }
      return true;
    }


s="babad";
console.log(longestPalindrome(s));