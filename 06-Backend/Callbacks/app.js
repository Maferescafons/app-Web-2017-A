
const fs = require('fs');
const express= require('express');
calculadora = require('twj-escobar');
//Callback

//
let a= 2,
b=3,
resultado;
resultado= resultado.calculadoraUdla.sumar(a,b);

console.log(`Resultado es: ${resultado}`);

let passwordAEncrptar="1234";
calculadora.CalculadoraUdla.password.encryptedPassword({
    password:passwordAEncrptar,
})
    .exec({
        error:(err)=>{
            console.log(`Error:${err}`);
        },
        success:(res)=>{
            console.log(`Resultado:${res}`);
        },
    });
console.log("Empieza");
//1. Nombre y ruta del archivo
//2 Codificacion
//3 Anonymus Function
fs.readFile('texto.txt', 'utf8',
(err, data)=>{
    if (err) throw err;
console.log(data);
});