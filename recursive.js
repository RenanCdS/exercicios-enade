// Nome: Rachel Moreira	    RA: 081180045 	EC8  Linguagem de Programação IV 
// Nome: Renan Castro       RA: 081180029
// Nome: Wellison Sousa 	RA: 081180040
// Nome: Wesley Rogério	    RA: 081180035

// Recursive form

const fs = require('fs');

/**@description recupera os valores "m" e "n"  */
function getParams() {
    // Insira o valor "m" na primeira linha e o valor "n" na segunda linha do arquivo input.txt
    const input = fs.readFileSync('./input.txt', 'utf8').split('\r\n');
    return input.map(numberText => Number(numberText));
}

var productory = 1;
var [m, n] = getParams();

if (m <= 0) {
    throw Error('Parâmetro precisa ser maior que zero');
}

if (m > n) {
    throw Error('"n" precisa ser maior que "m"');
}

function calculateProductory(value) {
    const iterationCalculation = Number(value) + (1 / Number(value));
    productory *= iterationCalculation;
    m++;
    if (m <= n) {
        calculateProductory(m);
    }
}

calculateProductory(m);

console.log(`O resultado do produtório é: ${productory}`);