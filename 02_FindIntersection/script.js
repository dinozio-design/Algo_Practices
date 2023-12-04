function FindIntersection(strArr) {

    // code goes here  
    const outPut = [];
    const strArr0 = strArr[0].split(",").map(Number);
    const strArr1 = strArr[1].split(",").map(Number);
  
    for (let i = 0; i < strArr0.length; i++) {
      for (let j = 0; j < strArr1.length; j++) {
        if (strArr0[i] === strArr1[j]) {
          // console.log("found one", strArr0[i]);
          outPut.push(strArr0[i]);
        };
      };
    };
    // console.log(outPut);
    if (outPut.length > 0) {
      return outPut.join(",");
    } else {
      return false
    };

    // return outPut;
  
  }

  /*
  Calculatingruntime...
Above will be the running time of your algorithm expressed in Big-O notation. Big-O notation is used to classify algorithms according to how their run time grows as the input size grows. To learn more here is a video we published on this topic, and here is a guide on how it works.

`https://www.youtube.com/watch?v=HfIH3czXc-8`
`https://coderbyte.com/big-o-runtime-guide`
`https://en.wikipedia.org/wiki/Big_O_notation#Orders_of_common_functions`


*/
