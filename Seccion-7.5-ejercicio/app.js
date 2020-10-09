/*Dado el siguiente arreglo:let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5 ];
Haga una impresión en consola así: 1 es un número impar
6 es un número par 
Debe de utilizar un ciclo FOR para generar dicha impresión*/

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for (let i=0; i < numeros.length ; i++) {

    let numero = numeros [i];

    if (numero % 2 === 0 ) {
        console.log(numero + ' es un numero par');
    } else {
        console.log(numero + ' es un numero impar');
    }

}