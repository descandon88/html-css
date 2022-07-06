function buscarTitulo() {
    var titulo = document.querySelector("h1");
    if (titulo===null) {
    alert("Error: Falta título");
    }
    else {
        titulo.style.fontFamily ="Arial";
    }
}

buscarTitulo();

function buscarTitulo_2(textoAlert) {
    var titulo = document.querySelector("h1");
    if (titulo === null) {
    alert(textoAlert);
    }
    else {
        titulo.style.fontFamily ="Arial";
    }
}

buscarTitulo_2("Error: Nuevo error");

