// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

let isPalindrome = function(x) {
    //check if the number is negative, if it's negative, then return false:
    const y = x;

    let reversed = 0;

    if (x < 0) {
        return false;
    }

    if (x < 10) {
        return true;
    }

    while (x > 0) {
        reversed = (reversed * 10) + (x % 10);
        x = Math.floor(x / 10);

    }
    if (y === reversed) {
        return true;
    }
    return false;

};