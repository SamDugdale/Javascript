//FixStart
// Function fixStart
//     Pass In: word to manipulate
//     CREATE new word and set first letter of the new word to be first letter of the word passing in
//     LOOP through each letter in the word after first letter
//       IF current letter is the same as first letter
//           THEN append * to new word
//       ELSE 
//           THEN append letter to new word
//     Pass Out: new word

const fixStart = (word) => {
    let newWord = word[0];
    for (letter of word.slice(1)) {
        if (letter == word[0]) {
            newWord += '*';
        } else {
            newWord += letter;
        }
    }
    return newWord;
}

console.log(fixStart('babble'));



// Reading List
// CREATE an array of objects. Each object is to have properties title, author and read/not read.
// LOOP through each object in the array
//     IF the book has been read
//         THEN DISPLAY message stating you have read the book (title + author)
//     ELSE
//         THEN DISPLAY message stating you have not read the book (title + author)

let books = [ {
        "Title": "Harry Potter and the Philosophers Stone",
        "Author": "J.K. Rowling",
        "Read": true
    },

    {
        "Title": "The Hobbit",
        "Author": "J.R.R. Tolkein",
        "Read": false
    }];

for (item of books) {
    msg = "";
    if (item["Read"]) {
        msg = `You have read ${item["Title"]} by ${item["Author"]}`;
    } else {
        msg = `You have not read ${item["Title"]} by ${item["Author"]}`;
    }
    console.log(msg);
}