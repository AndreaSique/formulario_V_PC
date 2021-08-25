function verificacionContraseña(elEvento){
    elEvento.preventDefault();/*Sirve para quitar el efecto que tiene submit de refrescar la página*/

var nombre1 = document.querySelector("#inputPrimerNombre").value;
var nombre2 = document.querySelector("#inputSegundoNombre").value;
var apellidos = document.querySelector("#inputApellidos").value;
var correo = document.querySelector("#inputCorreo").value;
var password = document.querySelector("#inputPassword").value;
var confirmPasword = document.querySelector("#inputConfirmPassword").value;



    if(password == confirmPasword){
        passwordCorrect.innerHTML = "Contraseña correcta";
    }else{
        passwordIncorrect.innerHTML = "Contraseña incorrecta";
    }
}

var boton = document.querySelector("#boton");
boton.addEventListener("submit", verificacionContraseña);