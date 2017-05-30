/**
 * Created by usrdel on 29/5/17.
 */
let arregloDeNumeros = [1,2,3,4,5,6];
//lo que va dentro es una funcion anonima
let resultado= arregloDeNumeros.forEach((valor,indice,arreglo)=>{
    console.log("El valor es:"+valor);
    console.log("El valor es:"+indice);
    console.log("El volor es: "+ arreglo);
});
// para correr tsc forEach.ts
//node forEach.js
console.log("Resultado es igual a :",resultado);