//Dado el siguiente arreglo:
//let numeros =[1,6,8,4,2,7,10,3,5];
//Utilizando un ciclo FOR, barra todo el arrego
//y determine ¿Cuál es el numero mayor?

let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
let mayor = 0;

for (let i=0; i <= numeros.length ; i++) {
    
    if (numeros[i] >= mayor) {
        mayor = numeros[i];
    }

}

console.log('El número mayor es: ' + mayor )