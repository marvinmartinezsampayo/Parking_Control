window.onload = function () {
    const miDiv = document.getElementById('main-wrapper');
    if (miDiv) {
        miDiv.setAttribute('data-header-position', 'fixed');   
        miDiv.setAttribute('data-layout', 'horizontal');  
        miDiv.setAttribute('data-navbarbg', 'skin3');  
        miDiv.setAttribute('data-sidebartype', 'full'); 
        miDiv.setAttribute('data-sidebar-position', 'absolute'); 
        miDiv.setAttribute('data-boxed-layout', 'boxed'); 
    }
};


function mostrarDiv(txtDiv) {
    let div = document.getElementById(txtDiv);
    div.classList.remove("oculto");
}

function ocultarDiv(txtDiv) {
    let div = document.getElementById(txtDiv);
    div.classList.add("oculto");
}

function bloquearInput(id) {
    let caja = document.getElementById(id);
    caja.setAttribute("readonly", "true");
}

function desbloquearInput(id) {
    let caja = document.getElementById(id);
    caja.removeAttribute("readonly");
}

// Función para validar si la cadena es un base64 válido
function isValidBase64(str) {
    // Verifica si la cadena tiene un formato base64 válido para PDF
    const base64Regex = /^[a-zA-Z0-9+/]+={0,2}$/;
    const mimeType = "application/pdf;base64,";

    // Comprueba si la cadena tiene una longitud razonable y si cumple con el patrón base64
    return base64Regex.test(str) && str.length > 0;
}


function borderVerde(id) {
    try {
        let caja = document.getElementById(id);
        caja.classList.remove("border-danger", "alert-danger");
        caja.classList.add("border-info", "alert-info");
        ocultarDiv(id + '_Hel');
    } catch (e) { }
}

function borderRojo(id) {
    try {
        let caja = document.getElementById(id);
        caja.classList.remove("border-info", "alert-info");
        caja.classList.add("border-danger", "alert-danger");
        mostrarDiv(id + '_Hel')
    } catch (e) { }
}

async function AlertaGenericaBase(tipo, titulo, texto) {
    Swal.fire({
        type: tipo,
        title: titulo,
        text: texto
    });
}
async function AlertaConfirmacion(titulo, btnCancelar, txtBtnAccion, txtBtnAccion2, accion1, accion2) {

    Swal.fire({
        title: titulo,
        showDenyButton: true,
        showCancelButton: btnCancelar,
        confirmButtonText: txtBtnAccion,
        denyButtonText: txtBtnAccion2
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            accion1
        } else if (result.isDenied) {
            accion2
        }
    });

}




async function upperKeyObjeto(objeto) {
    var newPost = new Object();

    for (const [key, value] of Object.entries(objeto)) {
        let mayus = key.toUpperCase();
        newPost[mayus] = value;
    }
    return newPost;
}

function esPar(numero) {
    return (numero % 2) == 0;
};


//Funcion Para Extablecer Tamaño Auto de un elemento textarea
function auto_grow(element) {

    let AltoTextArea = (element.scrollHeight) + "px";
    element.style.setProperty('height', AltoTextArea, 'important');
}

