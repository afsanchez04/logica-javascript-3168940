//EJERCICIO 1

/* let nombre = prompt("Ingresa tu nombre:").toLowerCase().trim();
let edad = parseInt(prompt("Ingresa tu edad:"));

// Primero validamos si puede entrar a la discoteca
if (edad >= 18) {
    alert("Puedes ingresar a la discoteca.");

    // Si tiene la edad permitida, verificamos si puede ingresar a la zona VIP
    if (nombre === "mario" || nombre === "carlos") {
        alert("Tienes acceso a la zona VIP.");
    } else {
        alert("No tienes acceso a la zona VIP.");
    }

} else {
    // Si no cumple con la edad, no puede entrar a nada
    alert("No puedes ingresar a la discoteca ni a la zona VIP.");
} */

//EJERCIO 2: 

// Pedir datos al usuario
let nombre = prompt("¿Cuál es tu nombre?").toLowerCase().trim();
let estatura = parseInt(prompt("¿Cuál es tu estatura en cm?"));
let velocidad = parseInt(prompt("¿Cuál es tu velocidad en km/h?"));
let edad = parseInt(prompt("¿Cuál es tu edad en años?"));

// Validar si el usuario cumple con la estatura y velocidad
if (estatura >= 170 && velocidad >= 27) {
  alert("Felicidades, cumples con los requisitos para ingresar al equipo.");

  // Verificar edad para determinar división
  if (edad < 18) {
    alert("Eres menor de edad, puedes ingresar a la división juvenil.");
  } else {
    alert("Eres mayor de edad, puedes ingresar a la división adulta.");
  }
} else {
  alert("Lo siento, no cumples con los requisitos para ingresar al equipo.");
}