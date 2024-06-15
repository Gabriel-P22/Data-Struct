/*
    In this exercise, we will implement the binary converter to decimal in binary.
*/

function Dec2Bin(decNumber) {
    var restStack = [],
    rest,
    binaryString = "";

   while (decNumber > 0) {
        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);
   }

   while (restStack.length > 0) {
        binaryString += restStack.pop().toString();
   }

   return binaryString;
}

console.log(Dec2Bin(2))