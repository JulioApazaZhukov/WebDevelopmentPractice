'use strict';

function bubblesort(arr){
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
    return arr;
}

let arr = new Array(1, 25, 3, 54, 8, 9, 65);
console.log(arr);

arr = bubblesort(arr);

console.log(arr);

var utils = [
   function(a, b) { return a + b; },
   function(a, b) { return a - b; }
];

console.log(utils[0](10, 20));
console.log(utils[1](50, 5));

var utils2 = {
   add: function(a, b) { return a + b; },
   diff: function(a, b) { return a - b; }
}

console.log(utils2.add(10, 20));
console.log(utils2.diff(50, 5));