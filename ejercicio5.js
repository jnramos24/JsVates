
//Crear un programa que simule un sistema de login.
// El programa debe permitir 3 intentos de ingresar una contraseña correcta usando un bucle,
// y mostrar un mensaje apropiado si se alcanza el límite de intentos.

let intentos = 0;
let autenticado = false;
let contraseñasIntentadas = ["incorrecta1", "incorrecta2","correctas"];
let contraseñaCorrecta = "correcta";

while (intentos < 3 && !autenticado) {
    let contraseña = contraseñasIntentadas[intentos]; //simulo las entradas de contraseña
    console.log("intento numero: " + (intentos + 1)); 
    if(contraseña === contraseñaCorrecta){
        
        console.log("Usuario autenticado");
        autenticado = true;
    } else{
        console.log("contraseña incorrecta. intente nuevamente");
        intentos++;
    }
}

if(!autenticado){
    console.log("Demasiados intentos fallidos. Acceso denegado");
}



