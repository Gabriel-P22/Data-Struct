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
// var numbersP = [1, 2, 3];

// for (i = 0; i < numbersP.length; i++) {
//     if (numbersP[i] === 2) {
//         numbersP.splice(i, 1);
        // We need decrese the index to not skip the element in array.
        // You remove the element in array and in the index.
//         i--;
//     }
// }

// console.log(numbersP);

// bideimensional array

// var avgTempWeek = []

// var avgTempWeek1 = [33, 31, 35, 37, 34, 31, 32];
// var avgTempWeek2 = [34, 33, 32, 36, 37, 39, 40];

// avgTempWeek.push(avgTempWeek1)
// avgTempWeek.push(avgTempWeek2)

// console.log(avgTempWeek1[1][2]);

// for (var i = 0; i < avgTempWeek.length; i++) {
//     for (var j = 0; j < avgTempWeek[i].length; j++) {
//         console.log(avgTempWeek[i][j]);
//     }
// }


// tridimensional array
// In this case, we have a array with two arrays, and each array has two arrays.
// month[firstWeek[avgTempWeek1, avgTempWeek2], lastWeek[avgTempWeek3, avgTempWeek4]]
var month = []

var firstWeeks = [];
var lastWeeks = [];

var avgTempWeek1 = [33, 31, 35, 37, 34, 31, 32];
var avgTempWeek2 = [34, 33, 32, 36, 37, 39, 40];

var avgTempWeek3 = [33, 31, 35, 37, 34, 31, 32];
var avgTempWeek4 = [34, 33, 32, 36, 37, 39, 40];

avgTempWeek1.push(avgTempWeek1)
avgTempWeek1.push(avgTempWeek2)

lastWeeks.push(avgTempWeek3)
lastWeeks.push(avgTempWeek4)

month.push(firstWeeks)
month.push(lastWeeks)

console.log(month[1][1][1]);

// In  this case, we running the array to show all positions.
for(var x = 0; x < month.length; x++) {
    for (var b = 0; b < month[x].length; b++) {
        for(i = 0; i < month[x][b].length; i++) {
            console.log(month[x][b][i]);
        }
    }
}