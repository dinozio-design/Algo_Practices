function QuestionsMarks(str) {
    var res = false;

    // Iterate through the string
    for (i=0; i<str.length; i++){
        for (j=i+1; j<str.length; j++){
            // Check if the sum of the two digits is 10
            if (Number(str[i])+Number(str[j]) === 10){
                res = true;
                // cound the Q Marks between the two indexes
                if(str.slice(i,j).splice("?").length - 1 <3){
                    return false;
                };
            };
        };
    };
    return res;
}