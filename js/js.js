function verificacionContraseña(elEvento){
    elEvento.preventDefault();/*Sirve para quitar el efecto que tiene submit de refrescar la página*/

var nombre1 = document.querySelector("#inputPrimerNombre").value;
var nombre2 = document.querySelector("#inputSegundoNombre").value;
var apellidos = document.querySelector("#inputApellidos").value;
var correo = document.querySelector("#inputCorreo").value;
var password = document.querySelector("#inputPassword").value;
var confirmPasword = document.querySelector("#inputConfirmPassword").value;
var mensaje = document.querySelector("#cajaMensaje");


    if(password != "" && confirmPasword != ""){
        if(password == confirmPasword){
            mensaje.innerHTML = '<p class="mensajeTrue">Contraseña correcta</p>'
        }else{
            mensaje.innerHTML = '<p class="mensajeFalse">Error el dato no es correcto</p>'
        }
    }else{
        mensaje.innerHTML = '<p class="mensajeFalse">No has completado los campos</p>'
    }

    
}

var boton = document.querySelector("#boton");
boton.addEventListener("submit", verificacionContraseña);