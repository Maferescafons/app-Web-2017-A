/**
 * Created by usrdel on 22/5/17.
 */
var texto = "";
var texto2="";
var numero =1;
var booleano = false;
var decimal =1.2;
var fecha = new Date();
var objeto= {};

texto = 2;
texto= booleano;
texto= decimal;
texto= fecha;
texto= objeto;

// arreglos
/*
*Comentario
* en
* bloque
 */

//Areglos
var arregloNumeros=[1,2,3,4,5];
var arregloStrings= ["a","b","c"];
var arregloBooleanos=[true,false,true];
arregloNumeros=[1,"a",true,[1,b],{}];
var matriz = [[1,2][3,4]];
//objeto json
var objetoNotacion={};

var objeto2={
    llave:"valor",
    llave2: "valor",
    llave3:"valoe"
};

objeto2.llave;//valor
objeto2.llave2;//valor
objeto2.llave3;//vallor

var objetoComplejo= {
    nombre:"Fernanda",
    apellido:"",
    fechaNaciemiento: new Date(),
    mayorEdad:true,
    peso:70.2,
    altura:127,
    saltar:function () {
        console.log("Saltar");
    },

    correr:function () {
        console.log("Correr");

    },
    sumar:function (a,b) {
        return a+b;

    },
    ImprimirNombre:function () {
        return objetoComplejo.nombre + " " + objetoComplejo.apellido
        return this.nombre + " " + this.apellido;
    }
};
objetoComplejo.altura//127
objetoComplejo.apellido//""
objetoComplejo.nombre;//
objetoComplejo.nombre= "Fernanda";
objetoComplejo.nombre;//Fernanda
objetoComplejo.apellido= "Escobar";
objetoComplejo.apellido;//Escobar

objetoComplejo.titulo= "bachiller";
delete objetoComplejo.nombre;

var arreglosStrings =["1","2"];
//arreglosStrings.push("3")//["1","2","3"]
//arreglosStrings.pop("3");//["1","2"]
console.log(arreglosStrings);
arreglosStrings.splice(1,0,"3");
console.log(arreglosStrings);
var arreglosStrings =["1","3","2"];
//arreglosStrings.push("3")//["1","2","3"]
//arreglosStrings.pop("3");//["1","2"]
console.log(arreglosStrings);
arreglosStrings.splice(1,1);
console.log(arreglosStrings);
