/**
 * Created by usrdel on 29/5/17.
 */
let arreglo = [1,2,3,4,5];
let resultado = arreglo.map((valor,indice,arreglo)=>{
    return (valor *2)/10;
})
    .some((valor)=>{
    return valor<=0.2;
    });
//AND todo cumplen verdaro sino falso
let resultado2 = arreglo.every((valor,indice,arreglo)=>{
    return(valor>=7);
});
console.log(resultado2);
//para correr--- tsc Every Y Some.ts
//node Every Y Some.js

// Or-- Si alguno es verdadero entoncs devuelvo true
let resultado3 = arreglo.some((valor,indice,arreglo)=>{
    return(valor<2);
});
console.log(resultado3);
