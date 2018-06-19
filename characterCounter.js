//https://www.codewars.com/kata/56786a687e9a88d1cf00005d

// You are going to be given a word. Your job will be to make sure that each character in that word has the exact same number of occurrences. You will return true if it is valid, or false if it is not.

// For example:

// "abcabc" is a valid word because 'a' appears twice, 'b' appears twice, and'c' appears twice.
// "abcabcd" is NOT a valid word because 'a' appears twice, 'b' appears twice, 'c' appears twice, but 'd' only appears once!
// "123abc!" is a valid word because all of the characters only appear once in the word.

// For this kata, capitals are considered the same as lowercase letters. Therefore: 'A' == 'a' .

// #Input A string (no spaces) containing [a-z],[A-Z],[0-9] and common symbols. The length will be 0 < string < 100.

// #Output true if the word is a valid word, or false if the word is not valid.

//내 방법
function validateWord(s) {
    var valid = true,
        stringArray;

    s = s.toLowerCase();
    stringArray = s.split('');
    for(var i = 0; i <= s.length-2; i++) {
        if (s.split(stringArray[i]).length !== s.split(stringArray[i+1]).length) {
            valid = false;
        }
    };

    function isOnce(val) {
        var re = new RegExp('\\' + val, "g");
        return s.match(re) === 1;
    }
    if (stringArray.every(isOnce)) valid = true;
    
    return valid;
}

//Best Practices - 1
function validateWord(s) {
    var freq = {}
    s.toLowerCase().split('').forEach(function(s) {
        freq[s] ? freq[s]++ : freq[s] = 1
    })
  
    return new Set(Object.values(freq)).size == 1
}

//Best Practices - 2
function validateWord(s){
    var counts = {};
    for(var c of s.toLowerCase()){
        if(counts[c] === undefined){counts[c] = 0;}
        counts[c]++;
    }
    return Math.max(...Object.values(counts)) === Math.min(...Object.values(counts));
}