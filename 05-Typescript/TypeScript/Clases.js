/**
 * Created by usrdel on 3/6/17.
 */
var usuario = (function () {
    /*public nombre: string;
    private  apellido:string;*/
    function usuario(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        /*  this.nombre=nombre;
          this.apellido=apellido;*/
    }
    usuario.prototype.ImprimirNombre = function (saludo, titulo) {
        return "\n            " + saludo + "," + titulo + "\n            " + this.nombre + " " + this.apellido;
    };
    return usuario;
}());
var fernanda = new usuario("Fernanda", "Escobar");
console.log(fernanda.ImprimirNombre("hi", "Sr"));
