/*Crear una función que reciba un arreglo como argumento,
la función debe de retornar OTRO arreglo pero
filtrando todos los nombres que empiezan con una determinada letra.*/
function filtrarPorLetra (a, letra) {

    let nuevoA = [];
    let heroes = [0];

    for( let i = 0; i < a.length; i++) {

        let nombre = a[i];

        if ( nombre[0] === letra ) {
            nuevoA.push(nombre);
        }

    }


    return nuevoA;
}


let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

let heroesCon = filtrarPorLetra( heroes, 'S');
console.log( heroesCon ); // She Hulk, Spiderman