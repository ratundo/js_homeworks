function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    };


let sentence = prompt('Enter your sentence');
let operationId = prompt('Enter operation ID: \n1. Unicode\n2. Delete symbol\n3. Replace symbol with random emoji\n4. Quantity of symbols');
let symbolIndex;
if (operationId !== "4") {
    symbolIndex = parseInt(prompt('Enter index of symbol'))
    }

let smilesList = [
    "😊", 
    "🌟", 
    "🐧", 
    "🎈", 
    "🌺", 
    "🚀", 
    "🍕", 
    "🎉", 
    "📚", 
    "💻"
    ];

let result;

if (operationId === "1") {
    let charAtIndex = sentence.charAt(symbolIndex);
    result = charAtIndex.charCodeAt(0);

    } else if (operationId === "2") {
        result = sentence.slice(0, symbolIndex) + sentence.slice(symbolIndex + 1);

        } else if (operationId === "3") {
            let smileIndex = getRandomIntInclusive(0, smilesList.length);
            let smile = smilesList[smileIndex];
            result = sentence.slice(0, symbolIndex) + smile + sentence.slice(symbolIndex + 1);

            } else if (operationId === "4") {
                result = 0;
                sentence = sentence.toLowerCase()
                for (let i = 0; i < sentence.length; i++) {
                    if (sentence.charAt(i) >= 'a' && sentence.charAt(i) <= 'z') {
                        result++;
                        }
                    }
                }

console.log(result)
