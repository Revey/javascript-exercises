const repeatString = function() {
    let word = "hey";
    let repeatedWord = "";
    for (let i = 0; i < 3; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
