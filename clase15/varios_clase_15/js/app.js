var auto ={
    marca: "Fiat",
    modelo: "Uno"
};

auto.marca

var persona1 = {
    nombre:"María",
    apellido:"Perez",
    anioDeNacimiento:"1985",
    obtenerEdad: function () {
        var anioActual = new Date().getFullYear(); 
        var mesActual = new Date().getMonth();
        var diaActual = new Date().getDay();
        var diaDelMesActual = new Date().getDate();
        console.log(diaDelMesActual);
        return anioActual - this.anioDeNacimiento;
    }
}

var miVueapp = new Vue({
    el: '#app-Vue',
    data: {
        descripcionDelProyecto: 'Este proyecto es el primero que hacemos utilizando Vue',
        mensajeUsuario:'',
        listaAutos: [ 
            {marca: 'Fiat',anio:1998,modelo:'Uno'},
            {marca: 'Nissan',anio:1995,modelo:'X-Trail'},
            {marca: 'BMW',anio:2000,modelo:'Patito'},
            {marca: 'Volvo',anio:1991,modelo:'Juanito'},
            {marca: 'Toyota',anio:2014,modelo:'Corolla'},
        ],
    }  
});

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