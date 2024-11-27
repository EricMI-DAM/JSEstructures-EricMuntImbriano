// 1.- Crea un array amb 5 números de manera aleatòria. Utilitza les funcions necessàries per, en aquest ordre, ordenar de menor a major i obtenir el primer i últim valor.
console.log("============Ejercicio 1============");

let numeros = Array.from({length: 5}, () => Math.floor(Math.random() * 100));

numeros.sort((a, b) => a - b);

let primerValor = numeros[0];
let ultimoValor = numeros[numeros.length - 1];

console.log("Array ordenado:", numeros);
console.log("Primer Valor:", primerValor);
console.log("Ultimo Valor:", ultimoValor);

console.log("============Ejercicio 2============");
// 2.- Utilitza l’operador de propagació per crear un altre array usant els valors de l’exercici anterior

let nuevoArray = [...numeros];
console.log("Nuevo Array usando operador de propagación", nuevoArray);

console.log("============Ejercicio 3============");
// 3.- Fusiona dos arrays i esborren els valors duplicats (no utilitzis el Set).

let array2 = [10,20,30, ...numeros];
let fusionar2 = [];

array2.forEach(num => {
    if (!fusionar2.includes(num)) fusionar2.push(num);
});
console.log("Array fusionado sin duplicados", fusionar2);

console.log("============Ejercicio 4============");
// 4.- Modifica l’exercici anterior per utilitzar una estructura que no permeti duplicats.

let sinDuplicados = new Map();
array2.forEach(num => sinDuplicados.set(num, true));
let resultadoDuplicados = Array.from(sinDuplicados.keys());

console.log("Array sin duplicados usando MAP:", resultadoDuplicados);

console.log("============Ejercicio 5============");
// 5.- Codifica la funció map d’una Array perquè en creï una nova amb el valor cúbic de cada número. Exemple: [1, 3, 6] => [1, 27, 216]

function calcularCubos(array) {
    return array.map(num => num ** 3);
}
let arrayCubos = calcularCubos([1, 3, 6]);
console.log("Valores cubicos del Array:", arrayCubos);

console.log("============Ejercicio 6============");
// 6.- A partir d’una array de strings, es creï una nova amb aquelles que tinguin més d’una lletra ‘a’

let arrayStrings = ["samira", "apple", "alojomora", "pera", "vallecas"];
let stringsConMas1A = arrayStrings.filter(str => {
    let countA = str.split('').filter(char => char === 'a').length;
    return countA > 1;
});
console.log("Strings con +1 a: ", stringsConMas1A);

console.log("============Ejercicio 7============");
// 7.- Crea una estructura Map i insereix 3 claus – valor. Les 3 claus han de ser de tipus de dades diferents. Et deixa?

let mapa3Claus = new Map();
mapa3Claus.set("nombre", "Guanito");
mapa3Claus.set(12, "edad");
mapa3Claus.set(true, "holiwis");

console.log("Contenido del MAP: ", mapa3Claus);
console.log("Valor para clave NOMBRE: ", mapa3Claus.get("nombre"));
console.log("Valor para clave 12: ", mapa3Claus.get(12));
console.log("Valor para clave TRUE: ", mapa3Claus.get(true));

console.log("============Ejercicio 8============");
// 8.- Donada una paraula, insereix cada caràcter dins d’una cua. Extreu ara de la cua els caràcters un a un per poder decidir si és un palíndrom o no.

function esPalindromo(pokemon) {
    let cola = [];
    let inverso = [];

    for (let char of pokemon) {
        cola.push(char);
        inverso.unshift(char);
    }
    return cola.join('') === inverso.join('');
}
let pokemon = "farigiraf";
    console.log("Es pokemon un palindromo?", esPalindromo(pokemon));

console.log("============Ejercicio 9============");
// 9.- Crea una Cua d’Objectes amb dades de 3 pel·lícules. Itera la cua per mostrar per pantalla la pel·lícula més antiga.

let listaPeliculas = [
    { titulo: "El Lobo de Guolmenstrit", año: 2013, director: "Martin Scorsese"},
    { titulo: "El Padriño", año: 1972, director: "Francis Ford Coppola"},
    { titulo: "Lluvia Incontenible de Albondigas", año: 2009, director: "Phil Lord"},
    { titulo: "El Planeta de los Orangutanes", año: 2001, director: "Tim Burton"},
    { titulo: "La Fiesta de las Butifarras", año: 2016, director: "Conrad Vernon"}
];

let peliculaMasAntigua = listaPeliculas[0];

// Iteración:
for (let pelicula of listaPeliculas) {
    if (pelicula.año < peliculaMasAntigua.año) {
        peliculaMasAntigua = pelicula;
    }
}

console.log("La pelicula mas antigua es:", peliculaMasAntigua.titulo);