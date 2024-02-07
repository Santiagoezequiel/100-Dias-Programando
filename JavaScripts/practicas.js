//  Ejercisio:      De un array con numeros, mostrar solo los que son numeros pares

// Solucion:
const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);

/*  APUNTES: En el metodo filter, el nombre de la funcion y
    de su parametro son arbitrarios, osea que podemos usar el nombre
    que mas nos guste */

/*********************************************************************************/


// Ejercisio: De un array con numeros, mostrar solo los que son numeros inpares

// Solucion
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const impares = numeros.filter(numero => numero % 2 !== 0);
console.log(impares);

/* APUNTES: Podemos hacer lo mismo que en el anterior, solo cambiamos la expresion a !== */


/*********************************************************************************/


// Ejercisio: Dado un array de cadenas, crea un nuevo array con la longitud de cada cadena.

// Solucion
const arrays = ["Dominik","Santiago","Gatito","Pedro","Hola"];
const longitud = arrays.map(longitud => longitud.length);
console.log(longitud);



// Ejercisio: Dado un array de números, encuentra el número más grande.

// Solucion
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const max = Math.max(...numeros3);
console.log(max);

/* APUNTES: El operador de propagación (...) se utiliza para
expandir el array numeros3 en una lista de argumentos. En este caso, 
se está utilizando para pasar cada número individualmente 
a la función Math.max. */



// Ejercisio: Dado un array de cadenas, encuentra la cadena más larga.

//Solucion
const cadenasMax = ["Palabra","Mas","Larga","Es","Pteranodon"];
const maxima = cadenasMax.map(longitud => longitud.length)
const maximaFinal = Math.max(...maxima);
console.log(maximaFinal)

//Crea un array vacío llamado miArray.
//Agrega los números del 1 al 5 en miArray.
const miArray = [1, 2, 3, 4, 5];

//Imprime en la consola el tercer elemento de miArray.
console.log(miArray[2]);

//Reemplaza el segundo elemento de miArray con el número 10.
miArray.splice(1,1,10);
console.log(miArray);

//Elimina el cuarto elemento de miArray.
miArray.splice(3,1);
console.log(miArray);

//Crea un nuevo array llamado otroArray con los números del 6 al 10.
const otroArray = [6, 7, 8, 9, 10];

//Concatena otroArray con miArray
const ambosArrays = miArray.concat(otroArray);
console.log(ambosArrays);

//Ordena los elementos de miArray de manera ascendente.
miArray.sort((a, b) => a - b);
console.log(miArray)

//Verifica si el número 10 está presente en miArray.
const busqueda = miArray.includes(10);
console.log(busqueda)

//Crea un nuevo array llamado filtradoArray
//que contiene solo los números pares de miArray.

const filtradoArray = ambosArrays.filter(numero => numero % 2 === 0);
console.log(filtradoArray);


const array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
function eliminarDuplicados(array) {
    return [...new Set(array)];
    }
    console.log(eliminarDuplicados(array))



/******************************EJERCISIO DE FUNCIONES************************************/

// CREAR UNA FUNCION QUE PUEDA SUMAR 2 NUMEROS
function sumar(num1,num2){
    console.log(num1 + num2);
}
sumar(2,3);


// CREAR UNA FUNCION QUE PUEDA RESTAR 2 NUMEROS

function restar(num1,num2){
    console.log(num1 - num2);
}
restar(2,1);

// CREAR UNA FUNCION QUE PUEDA MULTIPLICAR 2 NUMEROS

function multiplicar(num1,num2){
    console.log(num1 * num2);
}
multiplicar(2,5);

// CREAR UNA FUNCION QUE PUEDA DIVIDIR 2 NUMEROS

function dividir(num1,num2){
    console.log(num1 / num2);
}
dividir(4,2);


//Crea una función que tome un nombre como parámetro y devuelva un saludo personalizado.

function saludo(nombre){
    console.log(`Hola ${nombre} como estuvo tu dia hoy?`)
}

saludo("Hernan");


// Implementa una función que tome una cadena como parámetro y devuelva su longitud.

function largo (cadena){
    console.log(cadena.length);
}

largo("Chupala");

//Escribe una función que tome dos números y devuelva el mayor de ellos.

function elMayor(num1,num2){
    return Math.max(num1,num2)
}

console.log(elMayor(1,2));

//Crea una función que determine si un número dado es par o impar.

function esPar(num) {
    return num % 2 === 0;
    }

console.log(esPar(2))


//Escribe una función que tome un array de números como parámetro y devuelva un nuevo array con cada número elevado al cuadrado.
const elArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function elevados (elArray){
    return elArray.map(num => num * num);
}

console.log(elevados(elArray))
