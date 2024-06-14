// class Client {}

//You can create the array with different types of data.
// const dataArray = ["abc", 1,new Client, []];

// If do you need create a array empty, and need fill the array, use this form to fill.
/*
dataArray[0] = "abc";
dataArray[1] = 1;
dataArray[2] = new Client;
dataArray[3] = [];
*/

//You can running and access the array by index.
// dataArray.forEach((element) => {
//     console.log(element)
// });

//Module 2

// var avgTem = [];

// avgTem[0] = 31.9;
// avgTem[1] = 35.3;
// avgTem[2] = 42;
// avgTem[3] = 38;
// avgTem[4] = 25.5;

// for (var i = 0; i < avgTem.length; i++) {
//     console.log(avgTem[i]);
// }

// var fibonacci = [0, 1, 1];


// for (var i = 3; i < 20; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// console.log(fibonacci);

// var numbers = [];

// numbers.push(1);
// numbers.unshift(-1);

// console.log(numbers);

// numbers.push(10);
// numbers.pop();
// numbers.shift();
// numbers.push(20);

// console.log(numbers);

//Exemplo to remove a element in array inside a for loop. 
// the splice method remove the element in array, and the second parameter is the number of elements to remove.
var numbersP = [1, 2, 3];

for (i = 0; i < numbersP.length; i++) {
    if (numbersP[i] === 2) {
        numbersP.splice(i, 1);
        i--;
    }
}

console.log(numbersP);