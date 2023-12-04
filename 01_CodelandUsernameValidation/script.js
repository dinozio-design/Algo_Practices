function CodelandUsernameValidation(str) {

    // code goes here  
    const validateRegEx = /^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$/;
    /*
        -   ^[a-zA-Z]: Ensures that the username starts with a letter.
        -   [a-zA-Z0-9_]{2,23}: Matches between 2 and 23 characters consisting of letters, numbers, and underscores.
        -   [a-zA-Z0-9]$: Ensures that the username does not end with an underscore.
    */
    
    // this arrow function test if the input `str` is between 4 and 25 characters
    const validateLength = (str) => str.length >= 4 && str.length <= 25;

    return validateRegEx.test(str) && validateLength(str);
    // return str; 

};
