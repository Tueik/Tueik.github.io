let mensaje = document.querySelector('#mensaje');

mensajeValor = mensaje.value;

console.log(mensajeValor.length);


let encriptacion = document.querySelector("#encriptacion")
let imagen = document.createElement("img");
imagen.src = "/assets/img/Muñeco.png";

let areaTexto = document.createElement("p");



function salidaDatos(){
    if(mensajeValor == 0){
        encriptacion.appendChild(imagen);
    } else {

    }
}

salidaDatos();