let mensaje = document.querySelector('#mensaje');
let aviso = document.querySelector('#aviso');
mensaje.addEventListener('input', observarMensaje);

function observarMensaje(){
    if(mensaje.textLength == 0){
        encriptacion.appendChild(imagen);
        aviso.append(avisoTitulo);
        aviso.append(avisoTexto);
        areaTexto.remove();
        btnCopiar.remove();

    } else {
        encriptacion.append(areaTexto);
        aviso.appendChild(btnCopiar);
        imagen.remove();
        avisoTitulo.remove();
        avisoTexto.remove();
    }
    
    obtenerMensaje();
    
}


function obtenerMensaje(){
    mensajeValor = mensaje.value; 
    areaTexto.value = mensajeValor;
}

function encriptar(){
    if(mensaje.value === mensaje.value.toLowerCase()){
    let mensajeEncriptar = mensajeValor;
    mensajeEncriptar = mensajeEncriptar.replace(/e/g, "enter");
    mensajeEncriptar = mensajeEncriptar.replace(/i/g, "imes");
    mensajeEncriptar = mensajeEncriptar.replace(/a/g, "ai");
    mensajeEncriptar = mensajeEncriptar.replace(/o/g, "ober");
    mensajeEncriptar = mensajeEncriptar.replace(/u/g, "ufat");
    areaTexto.value = mensajeEncriptar;
    } else {
        alert("No se puede encriptar");
    }
    
}

function desencriptar(){
    let mensajeDesencriptar = areaTexto.value;
    mensajeDesencriptar = mensajeDesencriptar.replace(/enter/g, "e");
    mensajeDesencriptar = mensajeDesencriptar.replace(/imes/g, "i");
    mensajeDesencriptar = mensajeDesencriptar.replace(/ai/g, "a");
    mensajeDesencriptar = mensajeDesencriptar.replace(/ober/g, "o");
    mensajeDesencriptar = mensajeDesencriptar.replace(/ufat/g, "u");

    areaTexto.value = mensajeDesencriptar;
}


let botonEncriptar = document.querySelector("#encriptar");
botonEncriptar.addEventListener('click', encriptar);

let botonDesencriptar = document.querySelector("#desencriptar");
botonDesencriptar.addEventListener('click', desencriptar);

let encriptacion = document.querySelector("#encriptacion");

let imagen = document.createElement("img");
imagen.src = "/assets/img/Muñeco.png";

let areaTexto = document.createElement("textarea");
areaTexto.classList.add('mensaje_salida');
areaTexto.disabled = true;

let avisoTitulo = document.createElement("P");
avisoTitulo.classList.add("salida-datos__titulo");
avisoTitulo.textContent = "Ningún mensaje fue encontrado";

let avisoTexto = document.createElement("P");
avisoTexto.classList.add("salida-datos__parrafo");
avisoTexto.textContent = "Ingresa el texto que desees encriptar o desencriptar";

let btnCopiar = document.createElement("button");
btnCopiar.textContent = "Copiar Texto";
btnCopiar.classList.add("boton", "boton--copiar");

let btnCopiado = document.createElement("button");
btnCopiado.textContent = "Mensaje copiado!";
btnCopiado.classList.add("boton", "boton--copiado");


observarMensaje();
