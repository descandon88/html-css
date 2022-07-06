
//con jquery

$("#campomensaje").on("input", function() {
    var mensaje = $("#campoMensaje").val();
    $("app-jquery p").text(mensaje);
});

// con Vue.js

var app = new Vue({
    el:"app-vue",
    data:{
        mensaje: "",
    },
})

$.ajax({
    url: "https://swapi.dev/api/people/1/?format=json",
    success: function(IdatosObtenidos){
        console.log("Nombre del personaje:"+ datosObtenidos.name);
    }

})

//llamada de ajax para 
//conectar en el input que el usuario estaba buscando
// 