function CodelandUsernameValidation(str) {

    // code goes here  
    const validateRegEx = /^[a-zA-Z][a-zA-Z0-9_]{2,23}[a-zA-Z0-9]$/;
    /*
        -   ^[a-zA-Z]: Ensures that the username starts with a letter.
        -   [a-zA-Z0-9_]{2,23}: Matches between 2 and 23 characters consisting of letters, numbers, and underscores.
        -   [a-zA-Z0-9]$: Ensures that the username does not end with an underscore.
    */

    return validateRegEx.test(str);
    // return str; 

};
