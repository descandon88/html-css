

$.ajax({
    url: "https://private.omdbapi.com/?apikey=bef9c583&t=cinema+paradiso",
    success: function(datosObtenidos){
        console.log("Nombre del personaje:"+ datosObtenidos.Title);
        buscador.pelicula = 
    }

})

var buscador = new Vue({
    el:"#buscador",
    data: {
        peliculaBuscada:"",
        pelicula: null,
    }
});

$("#boton").on("click",function(){
    $.ajax({

    })
})