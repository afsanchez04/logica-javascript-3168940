const titulo = document.querySelector(".titulo")
const contenedor = document.querySelector("#contenedor")
const btnPrev = document.querySelector(".btn-prev")
const btnNext = document.querySelector(".btn-next")
let i = 1

function prev(){
  console.log("Anterior....")
}

function next(){
  console.log("Siguiente....")
}

btnPrev.addEventListener("click",prev)
btnNext.addEventListener("click",next)