const titulo = document.querySelector(".titulo")
const contenedor = document.querySelector("#contenedor")
const btnPrev = document.querySelector(".btn-prev")
const btnNext = document.querySelector(".btn-next")
const titulos = [
  "Primera imagen",
  "Segunda imagen",
  "Tercera imagen",
  "Cuarta imagen",
  "Quinta imagen",
]
let i = 1

function prev() {
  console.log("Anterior....")
}

function next() {
  console.log(i)
  if (i === 5) {
    i = 0
  }
  titulo.textContent = titulos[i]
  contenedor.style.marginLeft = `-${400 * i}px`
  contenedor.style.transitionDuration = ".5s"
  i++ //i=1
}

btnPrev.addEventListener("click", prev)
btnNext.addEventListener("click", next)