$("#boton-enviar").on("click",function(){
    var textoTitulo = $("#tituloH1").val();
    if(textoTitulo===""){
        alert("Te olvidaste del Título")
    }else {
        $("#tituloH1").text("#titulo").val();
    }

    var textoParrafo = $("#parrafo").val();
    if (textoParrafo === ""){
        alert("Te olvidaste del párrafo");
    } else {
    }


var valorDelTamanio = $("#inputTamanio").val();

    if (valorDelTamanio ===""){
        alert("Te olvidaste de poner el tamaño del título");
    } else {
        $("h1").css("font-size", valorDelTamnaio + "px");
    }
    
var valorDeColor = $("input[name=opcion-color]:chequed").val();

if(valorDeColor === "") {
    alert("Te olvidaste de elegir el color!");
} else {
    $("h1").css("color",valorDeColor);
}
});
