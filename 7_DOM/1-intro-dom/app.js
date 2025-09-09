//Seleccionar los elementos con los que va a interactuar o los que responden a la interacción

const pantalla = document.querySelector(".pantalla")
const btnMenos = document.querySelector(".btn-menos")
const btnMas = document.querySelector(".btn-mas")
let counter = 0

//2. Función
function incrementar () {
  counter++
  if(counter>=10){
    pantalla.style.color = "red"
  }
  pantalla.textContent = counter
}

function decrementar () {
  counter--
  if(counter<10){
    pantalla.style.color = "black"
  }
  pantalla.textContent = counter
}


//3. Crear el evento
btnMas.addEventListener("click", incrementar)
btnMenos.addEventListener("click", decrementar)