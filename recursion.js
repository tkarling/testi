function assertEqual(a, b) {
    return a === b;
}




var iFactorial = function(n) {
    var result = 1;
    for(var i = n; i > 0; i--) {
        result *= i;
    }

    return result;
};

console.log("The value of 5! should be " + 5*4*3*2*1);
console.log("The value of 5! is " + iFactorial(5));
console.log("The value of 0! should be 1");
console.log("The value of 0! is " + iFactorial(0));

assertEqual(iFactorial(5), 120);
assertEqual(iFactorial(0), 1);





var factorial = function(n) {
    // base case:
    if(n === 0) {
        return 1;
    }

    // recursive case:
    return factorial(n-1)*n;

};

console.log("The value of 0! is " + factorial(0) + ".");
console.log("The value of 5! is " + factorial(5) + ".");

assertEqual(factorial(0), 1);
assertEqual(factorial(5), 120);
assertEqual(factorial(3), 6);
assertEqual(factorial(6), 720);






// PALINDRONE
// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    // base case #2
    if(str === [] || str.length === 1) {
        return true;
    }
    // recursive case
    return firstCharacter(str) === lastCharacter(str) && isPalindrome(middleCharacters(str));
};

var checkPalindrome = function(str) {
    console.log("Is this word a palindrome? " + str);
    console.log(isPalindrome(str));
};

checkPalindrome("a");
assertEqual(isPalindrome("a"), true);
checkPalindrome("motor");
assertEqual(isPalindrome("motor"), false);
checkPalindrome("rotor");
assertEqual(isPalindrome("rotor"), true);




// POWERS
var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    // console.log("Computing " + x + " raised to power " + n + ".");
    // base case
    if(n === 0) {
        return 1;
    }
    // recursive case: n is negative
    if(n < 0) {
        return 1/x * power(x, n+1);
    }
    if(isEven(n)) {
        var num = power(x, n/2);
        return num * num;
    }
    // recursive case: n is odd
    return x * power(x, n-1);
};

var displayPower = function(x, n) {
    console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);
assertEqual(power(3, 0), 1);
displayPower(3, 1);
assertEqual(power(3, 1), 3);
displayPower(3, 2);
assertEqual(power(3, 2), 9);
displayPower(3, -1);
assertEqual(power(3, -1), 1/3);
displayPower(3, 3);
displayPower(3, 4);
displayPower(3, 5);