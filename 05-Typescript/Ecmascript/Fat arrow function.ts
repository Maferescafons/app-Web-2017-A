/**
 * Created by usrdel on 29/5/17.
 */


let Holamundo2= function () {
    console.log("holaMindo");
};
let holaMundo3 = ()=> {
    console.log("holaMundo");
}
let  holamundo4 = ()=>console.log("holaMundo");

let HolaMundo5 = function () {
    return 5;
}
let holaMundo6 = ()=>{
    let a =6;
    return a+3;
};
//tsc Fat\ arrow \ fuction.ts---- para transformar a js
let saludar= nombre=>"Hola"+nombre;
let saludarConApellido= (nombre,apellido)=>`hola ${nombre} ${apellido}`;

console.log(saludarConApellido("Fernada","Escobar"));
