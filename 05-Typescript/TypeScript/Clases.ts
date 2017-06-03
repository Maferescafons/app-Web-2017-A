/**
 * Created by usrdel on 3/6/17.
 */
class usuario{
    /*public nombre: string;
    private  apellido:string;*/

    constructor(
        public nombre:string,
        private apellido?:string){

      /*  this.nombre=nombre;
        this.apellido=apellido;*/
    }
    ImprimirNombre(saludo:string,titulo?:string):string{
            return`
            ${saludo},${titulo}
            ${this.nombre} ${this.apellido}`;
    }
}
let fernanda:usuario= new usuario(
    "Fernanda",
    "Escobar");
    console.log(fernanda.ImprimirNombre("hi","Srta"));
