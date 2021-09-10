const findLongestWord = function(string) {
    const stringToArray = string.split(' ');
    let minWord = 0;
    let word;
    for (let i = 0; i < stringToArray.length; i += 1) {
     if (stringToArray[i].length > minWord) {
            minWord = stringToArray[i].length;
            word = i;
        }
    }
    return stringToArray[word];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
