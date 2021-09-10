//ВАРАИАНТ 1 ------

const checkForSpam = function (message) {
  let arr = message.toLowerCase("");

  if (arr.includes("sale") || arr.includes("spam")) {
    return true;
  }
  // else if (arr.includes('spam')) {
  //     return true;
  // }
  else {
    return false;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

//ВАРАИАНТ 2 ------

// const checkForSpam = function (message) {
//     message = message.toLowerCase();
//     const arr = ['spam' , 'sale'];
//     for (let item of arr) {
//         if (message.indexOf(item) > -1) {
//             return true;
//         }
//     }
//             return false;

//     };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
