// 1. Detectar cuando el usuario hace clck en el boton
// 2. Chequear una variable para saber si el fondo es verde o no.
// 3. Si el fondo es verde encontes cambio el color a rojo.
// 4. Si el fondo no es verde entonces cambio el color a verde.

var elFondoEsVerde=true;
$("#btn-cambiar").on("click", function(){
    if(elFondoEsVerde === true){
        $("body").css("background-color","red")
        elFondoEsVerde = false;
    } else {
        $("body").css("background-color","green")
        elFondoEsVerde = true;
    } 
})