/* Crear una función que me permita determinar
la calificacion de 3 alumnos
uno con nota de 100, otro con nota de 80
y el último con nota de 59 */


function calcularNota(nota) {

let notaLetra = ''

if (nota >=90) {
    notaLetra ='A';
}  else if (nota >=80) {
    notaLetra ='B';
}  else if (nota >=70) {
    notaLetra ='C';
}  else if (nota >=60) {
    notaLetra = 'D';
}  else if (nota <60) {
    notaLetra = 'F'
}
    console.log(nota + ' es igual a ' + notaLetra);

}
    

    calcularNota(100);
    calcularNota(89);
    calcularNota(59);