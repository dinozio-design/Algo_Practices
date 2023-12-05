function QuestionsMarks(str) {
    const results = [];
    function countQuestionMarks(arr) {
        let qMarkCount = 0;
        for (const element of arr) {
            if (element === "?") {
                qMarkCount++;
            };
        };
        // console.log(qMarkCount);
        return qMarkCount;
    }
    // Iterate through the string
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length; j++) {
            // Check if the sum of the two digits is 10
            if (Number(str[i]) + Number(str[j]) === 10) {
                let newArr = str.slice(i, j).split("");
                // console.log(newArr);
                if (countQuestionMarks(newArr) === 3) {
                    results.push(true);
                } else {
                    results.push(false);
                };
                i = j;
            };
        };
    };
    // console.log(results);
    if (results.length === 0) {
        return false;
    };
    // console.log(results);
    return !results.includes(false);

}

// console.log(QuestionsMarks("aa6?9"));
// console.log(QuestionsMarks("arrb6???4xxbl5??d?eee5"));
// console.log(QuestionsMarks("9???1???9??1???9"));
// console.log(QuestionsMarks("9???1???9???1???9"));
// console.log(QuestionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?5"));
// console.log(QuestionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?a??5"));

// this code is incomplete and makes mistake. It does not return EXACTLY 3 qs, but AT LEAST
// I fixed it