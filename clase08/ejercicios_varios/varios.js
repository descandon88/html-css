function calcularSueldoLiquido(sueldoBruto) { 
    var descuento = 0.8;
    return sueldoBruto * descuento;
}

calcularSueldoLiquido(3000)
// Ejercicio de la diapositiva 40
// Ejercicio 1 - Función que duplica un número
function duplicar(number){
    number = number*2;
    return number;
}
duplicar(4)

// Ejercicio 2 - 
function mostrarNombre(a,b){
    alert("Tu nombre es " + " a"+ " y " + " b");
} 


// Ejercicio 3 - 

// Ejercicio 4 funcion esPar
var num;

function esPar(num){
    if (num % 2==0){
        return true
    }
 
    else { 
    return false 
    }
}

// Ejericio 5 maximoDeDos

function maximodeDos(num1,num2){
    if(num1>num2 ){
        return num1
    }
    else if(num2>num1){
        return num2
    }
    else if (num1==num2){
        return num1
    }
    
}

function maximoDeTres(num1,num2,num3){
    if(num1>num2 && num1>num3 ){
        return num1
    }
    else if(num2>num1 && num2>num3){
        return num2
    }
    else if(num3>num1 && num3>num2){
        return num3
    }
    else if (num1==num2 && num1==num3){
        return num1 || num2 
    }
}

function validarnombre(variale){
    if (typeof(variale) == "string" && variale!=""){
        return true
    } else {
        return false
    }
}