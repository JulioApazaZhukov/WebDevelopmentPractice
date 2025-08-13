'use strict';

let arr = [1, 25, 3, 54, 8, 9, 65];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        let aux;
        if (arr[j] > arr[j + 1]) {
            aux = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = aux;
        }
    }
}

// BigInt: 123456789123456798123456798n
const num = 900719925474099549494848n;
const num2 = 900719925474095494948485656n;
console.log(num+num2);
let n = undefined;

console.log(arr);
