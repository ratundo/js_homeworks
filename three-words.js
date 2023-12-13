function hasDigits (word) {
    for (var i = 0; i < word.length; i++) {
        if (!isNaN(word[i])) {
            return true
            }     
        }
    };

function enterWord(wordNumber) {
    let word;
    while ((!word) || (hasDigits (word))) {  
        word = prompt('Enter word number ' + wordNumber + ' ');  
        }
    return word
    };

function enterOption () {
    let option;
    let optionList = ['uppercase', 'lowercase', 'capitalize']
    while ((!option) || (optionList.indexOf(option) === -1)) {
        option = prompt('Choose option ' + optionList);
        }
    return option
    };

function wordListModifier (wordList, option) {
    switch (option) {
        case 'uppercase':
            return wordList.map(word => word.toUpperCase());
        case 'lowercase':
            return wordList.map(word => word.toLowerCase());
        case 'capitalize':
            return wordList.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        }
    }

let wordList = [enterWord(1), enterWord(2), enterWord(3)];

let wordListModified = wordListModifier(wordList, enterOption());

console.log(`${wordListModified[0]} ${wordListModified[1]} ${wordListModified[2]}!`);
