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

function salidaDatos(){
    if(mensaje.textLength == 0){
        encriptacion.appendChild(imagen);
    } else {
        encriptacion.append(areaTexto);
    }
}

salidaDatos();