// Create empty array to store string
// Loop through the string
// While looping, add each character *at the beginning* of the array so contents become reversed
// Use ToString() to return the new array as a String value



const reverseString = function(word) {

    let originalWord = word;
    let originalWordArray = [];

    for(let i = 0; i < originalWord.length; i++) {

        originalWordArray.unshift(originalWord.charAt(i));
    }

    let reversedWord = originalWordArray.join("")
    return reversedWord
    // console.log(reversedWord);
};

// reverseString('hello');



// Do not edit below this line
module.exports = reverseString;
