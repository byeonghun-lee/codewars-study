//https://www.codewars.com/kata/559c7b6e3c38b1d1b900006f

//Write a function format that takes two arguments, text and width, and formats the text to fit the width.

//Your function should divide the given text into lines using newline characters. It should fit as many words into each line as possible without exceeding the given width or splitting any words between two lines. There should not be a space at the beginning or end of any line. For example, here is some text formatted with a width of 50:

// Lorem ipsum dolor sit amet, consectetur adipiscing
// elit. Aliquam nec consectetur risus. Cras vel urna
// a tellus dapibus consequat. Duis bibendum
// tincidunt viverra. Phasellus dictum efficitur sem
// quis porttitor. Mauris luctus auctor diam id
// ultrices. Praesent laoreet in enim ut placerat.
// Praesent a facilisis turpis.
// And the same text formatted with a width of 30:

// Lorem ipsum dolor sit amet,
// consectetur adipiscing elit.
// Aliquam nec consectetur risus.
// Cras vel urna a tellus dapibus
// consequat. Duis bibendum
// tincidunt viverra. Phasellus
// dictum efficitur sem quis
// porttitor. Mauris luctus
// auctor diam id ultrices.
// Praesent laoreet in enim ut
// placerat. Praesent a facilisis
// turpis.

// For the purpose of this exercise, words can contain any non-whitespace character and all words are separated by a single space. Words will never be longer than the provided width.

// Note for rubists: Function must be named format_ for ruby already has a built in format function.

//내 방법
//split를 쓰지 말고 해보자.
function format(text, width) {
    var index = 0,
        spaceIndex,
        i,
        textArray = [];

    for (i = 0; i <= text.length; i++) {       
        spaceIndex = index + width;
        while (text.slice(spaceIndex, spaceIndex+1) !== ' ' && spaceIndex < text.length) {
            spaceIndex--;
        };
        textArray.push(text.slice(index, spaceIndex));
        index = spaceIndex+1;
        if (spaceIndex > text.length) break;
    }
    textArray[textArray.length-1].length === 0 ? textArray.pop() : textArray[textArray.length-1];
    return textArray.join('\n');
}

//Best Practices - 1
function format(text, width) {
    var re = new RegExp("(?=\\S).{1," + +width + "}(?=\\s|$)", "g");
    return text.match(re).join("\n");
}

//Best Practices - 2
function format(text, width) {
    var words = text.split(' '), output = [], line;
    while (words.length) {
        line = words.shift();
        while (words.length && line.length + words[0].length < width) {
            line += ' ' + words.shift();
        }
        output.push(line);
    }
    return output.join('\n');
}