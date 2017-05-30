/**
 * Created by usrdel on 29/5/17.
 */
let arreglo = [1,2,3,4,5];
let resultado = arreglo.map((valor,indice,arreglo)=>{
    return valor *indice;
});
console.log(resultado);
//para correr--- tsc map.ts
//node map.js
// map sirve para mutara el arreglo