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
   
    if(/^([a-zñ]+\s)*[a-zñ]+$/.test(mensaje.value)){
    let mensajeEncriptar = mensajeValor;
    mensajeEncriptar = mensajeEncriptar.replace(/e/g, "enter");
    mensajeEncriptar = mensajeEncriptar.replace(/i/g, "imes");
    mensajeEncriptar = mensajeEncriptar.replace(/a/g, "ai");
    mensajeEncriptar = mensajeEncriptar.replace(/o/g, "ober");
    mensajeEncriptar = mensajeEncriptar.replace(/u/g, "ufat");
    areaTexto.value = mensajeEncriptar;
    } else {
        openModal(0); 
        const miModal = document.querySelector('#mi-modal');
        miModal.classList.add('open');
    }
    
}

function desencriptar(){
    if(/^([a-zñ]+\s)*[a-zñ]+$/.test(mensaje.value)){
    let mensajeDesencriptar = areaTexto.value;
        mensajeDesencriptar = mensajeDesencriptar.replace(/enter/g, "e");
        mensajeDesencriptar = mensajeDesencriptar.replace(/imes/g, "i");
        mensajeDesencriptar = mensajeDesencriptar.replace(/ai/g, "a");
        mensajeDesencriptar = mensajeDesencriptar.replace(/ober/g, "o");
        mensajeDesencriptar = mensajeDesencriptar.replace(/ufat/g, "u");

    areaTexto.value = mensajeDesencriptar;
        } else {
            openModal(0); 
            const miModal = document.querySelector('#mi-modal');
            miModal.classList.add('open');
        }
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
btnCopiar.addEventListener('click', botonCopiar);

let btnCopiado = document.createElement("button");
btnCopiado.classList.add("boton", "boton--copiado");
btnCopiado.textContent = "Texto Copiado!";

function botonCopiar(){
    botonCopiado();
    copiarTexto();
}

function copiarTexto(){
    areaTexto.value;
    areaTexto.select();
    areaTexto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(areaTexto.value);
}
function botonCopiado() {
    btnCopiar.remove();
    aviso.appendChild(btnCopiado);
    setTimeout(() => {
        aviso.removeChild(btnCopiado);
        aviso.appendChild(btnCopiar);
        if(mensaje.textLength == 0){
            btnCopiar.remove();
        }
    }, 2000);
    
  }

modalTexto1 = document.querySelector("#modal-texto1");
modalTexto2 = document.querySelector("#modal-texto2");

observarMensaje();



// Modal alerta | https://www.cssscript.com/modal-zoom-animation/
const modals = document.querySelectorAll('.modal');
const toggleBtns = document.querySelectorAll('.toggle_btn');
const closeBtns = document.querySelectorAll('.close_btn');
const openModal = (index) => {
  modals[index].classList.add('open');
  if (mensaje.value.length == 0 ){
        modalTexto1.textContent = "No hay nada que procesar";
        modalTexto2.textContent = "Escribe o inserta un mensaje :)";
    } else {
        modalTexto1.textContent = "No se aceptan caracteres especiales o mayúsculas";
        modalTexto2.textContent = "( ,-+>@!|/$?#%&*# ABC etc..)";
    }
};
const closeModal = (index) => {
  modals[index].classList.remove('open');
};

// closing the current opened Modal.
closeBtns.forEach((currCloseBtn, index) => {
    currCloseBtn.addEventListener('click', () => {
        closeModal(index);
    });
});

// close the current opened Modal on clicking outside.
window.addEventListener('click', (e) => {
  if (e.target.className === 'modal_wrapper') {
    modals.forEach((currModal) => {
      currModal.classList.remove('open');
    });
  }
});