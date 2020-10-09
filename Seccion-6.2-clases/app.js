class Carro {

    constructor(marca1, tipo1, puertas, llantas1, motor1){

        this.marca = marca1;
        this.tipo = tipo1;
        this.puertas = puertas;
        this.llantas = llantas1;
        this.motor = motor1;

        this.creadoEn = 'hoy';
        this.encendido = false;
        this.gasolina = 100;
    }

    encenderCarro() {

            if (this.encendido) {
                console.error('El carro ya esta encendido');
            }else {
                this.encendido = true; 
                console.log('El motor esta encendido');
            }

            return this;

    }

    realizarViaje(consumo) {

        if (!this.encendido) return console.log ('Carro apagado')

        if (consumo > this.gasolina) return console.log('No puede realizar el viaje: gasolina ' + this.gasolina);

           
                
            this.gasolina = this.gasolina - consumo;
            return 'Le queda ' + this.gasolina;

    }

}

let carro = new Carro('Mazda', 'Sedan', 2, 4, 2.0);
let carro1 = new Carro ('Toyota', 'Cavalier', 2, 4, 2.4);

console.log (carro);
console.log (carro1);