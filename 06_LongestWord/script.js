function LongestWord(sen) { 

    // code goes here  
  
    const words = sen.replace(/[^\w\s]/g, "").split(" ");
    // console.log(words);
    let longestWord = "";
    let maxLength = 0;
  
    for (const word of words){
      if (word.length > maxLength){
        maxLength = word.length;
        longestWord = word;
      };
    }
  
    return longestWord; 
   
  }