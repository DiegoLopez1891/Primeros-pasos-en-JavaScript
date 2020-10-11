/* Crear una función que reciba como argumento un arreglo,
la función debe de retornar el nombre que tenga más letras del arreglo,
 y debe de trabajar así:
 
 let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
 let heroeLargo = masLargo( heroes );
 console.log( heroeLargo ); Profesor Charles Xavier*/

function masLargo (a) {

    let nombreLargo = '';

    for (let i = 0; i < a.length; i++) {

        let nombre = a[i];

        if (nombre.length > nombreLargo.length) {
            nombreLargo = nombre;
        }



    }


    return nombreLargo;
}


 let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

 let heroeLargo = masLargo( heroes );

 console.log( heroeLargo );