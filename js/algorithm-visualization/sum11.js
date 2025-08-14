let total = 0;
let cuenta = 1;
do {
    let comparar = cuenta;
    comparar -= 11; 
    if(comparar == 0){break;}
    total += cuenta;
    cuenta ++;
} while (true);
console.log(total)