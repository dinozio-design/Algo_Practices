function FirstReverse(str) { 

    // code goes here  
    const inputArr = [];
    for (i=0;i<str.length; i++){
      inputArr.unshift(str[i]);
    }
  
  
    return inputArr.join(""); 
  
  }
