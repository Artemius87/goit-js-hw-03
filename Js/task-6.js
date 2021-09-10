let input;
const numbers = [];
let total = 0;
do {
   input = prompt('Введите число');
    
    if (input === null) {
            console.log(numbers);
        console.log(`Общая сумма чисел равна ${total}`);
        break;
    }
    numbers.push(input);    
    input = Number(input);
   
    if (!Number.isNaN(input)) {
        total += input;
    } else {
        alert("ошибка ввода");
    }
    
} while (true);

    