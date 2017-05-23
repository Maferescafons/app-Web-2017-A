/**
 * Created by usrdel on 22/5/17.
 */
function ImprimirHolaMundo() {
    console.log("hola mundo");
}

ImprimirHolaMundo();//undefined
function Imprimir(texto) {
    console.log(texto);
}
Imprimir("fernanda");
function Suma2Numeros(a,b) {
    return a+b;

}
var resultado = Suma2Numeros(1,2);//3
console.log(Suma2Numeros(1,2));
function Operar2Numeros(n1,n2,funcion) {
    n1=n1+1;
    n2=n2+2;
    funcion(n1,n2);

}
Operar2Numeros(2,4,function (primerNumero,segundoNumero) {
//primer nuemero vale=3
    //segundoNumjero vale =6
    return primerNumero*segundoNumero; //3*6=18;
})
//foreach
//[1,2,3,4].forEach(function(valorIteracion,Indice,Arreglo)){
//
// console.log(valorIteraccion)//
//
// }