/* //Lo que esta marcado con la barra y el asterisco
es lo que hice yo por mi cuenta y funciono correctamente
pero el profesor en el ejercicio pedia que se haga con un for
entonces dejo comentado lo mio y aplico el for del profesor//

function describirPersona (p) {

    console.log(`${p.nombre} -- ${p.edad}`);

}*/


let persona1 = {
    nombre: 'Diego',
    edad:27
};

let persona2 = {
    nombre: 'Veronica',
    edad:25
};

let persona3 = {
    nombre: 'Martin',
    edad:17
};

let personas = [persona1, persona2, persona3];

for (let i = 0; i < personas.length; i++) {

    let persona = personas[i];
    console.log(`${ persona.nombre } -- ${ persona.edad}`)
}

//console.log(personas);

/*describirPersona(persona1);
describirPersona(persona2);
describirPersona(persona3);*/