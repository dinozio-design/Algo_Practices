function QuestionsMarks(str) {
    // var res = false;

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
                    return true;
                }
            };
        };
    };
    return false;
}

console.log(QuestionsMarks("arrb6????4xxbl5??d?eee5"));

// this code is incomplete and makes mistake. It does not return EXACTLY 3 qs, but AT LEAST
// I fixed it