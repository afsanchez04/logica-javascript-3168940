//1. Captura de variables
const titulo = document.querySelector(".titulo")
const screen  = document.querySelector(".screen")
const miniaturas = document.querySelector(".container-min")

console.log(titulo) //Si le sale null, está mal capturada
console.log(screen) //Si le sale null, está mal capturada
console.log(miniaturas) //Si le sale null, está mal capturada

//2. Función 
function cambiarImg (event) {
  if(!event.target.src) return
  titulo.textContent = event.target.name
  screen.src = event.target.src
}

miniaturas.addEventListener("click",cambiarImg)