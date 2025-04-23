function removingDuplicates(str){
    str=str.split("")
    let i=0
    while(i<str.length){
      let j=i+1
      while(j<str.length){
      if(str[i]==str[j]){
        str.splice(j,1)
      }
      j++
    }
     i++
    }
    
    console.log(str.join(""))
  }
  
  function removingDuplicates2(s){
    s=s.split("")
    let freq={}
    for(el of s){
      freq[el]=freq[el]||0+1
    }
    let res= Object.keys(freq)
    console.log(res.join(""))
  }
  
  removingDuplicates("programming")
  removingDuplicates2("programming")