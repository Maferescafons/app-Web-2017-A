// Index.js
var Passwords = require('machinepack-passwords');
exports.CalculadoraUdla={
    sumar: (n1,n2)=>{
        return n1+n2;
    },
    restar:(n1,n2)=>{
        return n1-n2;
    },
    multiplicar:(n1,n2)=>{
        return n1*n2;
    },
    password:Passwords
};
