let mensaje = document.querySelector('#mensaje');
mensaje.addEventListener('input', obtenerMensaje)

function obtenerMensaje(){
    mensajeValor = mensaje.value; 
    areaTexto.value = mensajeValor;
}


let encriptacion = document.querySelector("#encriptacion")
let imagen = document.createElement("img");
imagen.src = "/assets/img/Muñeco.png";

let areaTexto = document.createElement("textarea");
areaTexto.classList.add('mensaje_salida');
areaTexto.disabled = true;




console.log(areaTexto);
console.log(areaTexto.value);

console.log(mensaje);

function salidaDatos(){
    if(mensaje.length == 0){
        encriptacion.appendChild(imagen);
    } else {
        encriptacion.append(areaTexto);
    }
}

salidaDatos();