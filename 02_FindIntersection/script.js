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