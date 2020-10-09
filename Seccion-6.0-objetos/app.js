function describirPersona( p ) {
    
    
    
    console.log(`${ p.nombre } tiene una edad de ${p.edad} y mide ${p.estatura}`)
}

let persona = {
    nombre: 'Diego',
    edad: 27,
    estatura: 1.82
    
}

//console.log(persona.edad)
describirPersona(persona);
