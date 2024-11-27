// 1.- Crea un array amb 5 números de manera aleatòria. Utilitza les funcions necessàries per, en aquest ordre, ordenar de menor a major i obtenir el primer i últim valor.

let numeros = Array.from({length: 5}, () => Math.floor(Math.random() * 100));

numeros.sort((a, b) => a - b);

let primerValor = numeros[0];
let ultimoValor = numeros[numeros.length - 1];

console.log("Array ordenado:", numeros);
console.log("Primer Valor:", primerValor);
console.log("Ultimo Valor:", ultimoValor);

console.log("\n==================================================")
// 2.- Utilitza l’operador de propagació per crear un altre array usant els valors de l’exercici anterior

let nuevoArray = [...numeros];
console.log("Nuevo Array usando operador de propagación", nuevoArray);

console.log("\n==================================================")
// 3.- Fusiona dos arrays i esborren els valors duplicats (no utilitzis el Set).

let array2 = [10,20,30, ...numeros];
let fusionar2 = [];

array2.forEach(num => {
    if (!fusionar2.includes(num)) fusionar2.push(num);
});
console.log("Array fusionado sin duplicados", fusionar2);

console.log("\n==================================================")
// 4.- Modifica l’exercici anterior per utilitzar una estructura que no permeti duplicats.

let sinDuplicados = new Map();
array2.forEach(num => sinDuplicados.set(num, true));
let resultadoDuplicados = Array.from(sinDuplicados.keys());

console.log("Array sin duplicados usando MAP:", resultadoDuplicados);

console.log("\n==================================================")
// 5.- Codifica la funció map d’una Array perquè en creï una nova amb el valor cúbic de cada número. Exemple: [1, 3, 6] => [1, 27, 216]

function calcularCubos(array) {
    return array.map(num => Math.pow(num, 3));
}
let arrayCubos = calcularCubos([1, 3, 6]);
console.log("Valores cubicos del Array:", arrayCubos);

console.log("\n==================================================")
// 6.- A partir d’una array de strings, es creï una nova amb aquelles que tinguin més d’una lletra ‘a’



console.log("\n==================================================")
// 7.- Crea una estructura Map i insereix 3 claus – valor. Les 3 claus han de ser de tipus de dades diferents. Et deixa?



console.log("\n==================================================")
// 8.- Donada una paraula, insereix cada caràcter dins d’una cua. Extreu ara de la cua els caràcters un a un per poder decidir si és un palíndrom o no.



console.log("\n==================================================")
// 9.- Crea una Cua d’Objectes amb dades de 3 pel·lícules. Itera la cua per mostrar per pantalla la pel·lícula més antiga.
