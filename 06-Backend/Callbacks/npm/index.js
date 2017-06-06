// Index.js
let Passwords = require('machinepack-passwords');
//passsword
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
