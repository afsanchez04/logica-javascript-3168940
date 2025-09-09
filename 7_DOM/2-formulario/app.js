
const formulario = document.querySelector(".form")
const inputNombre = document.querySelector(".inputNombre")
const listaColores = document.querySelector("#color")
const userPage = document.querySelector(".userPage")
const imgEquipo = document.querySelector(".img-equipo")
const textSaludo = document.querySelector(".text-saludo")
const textEquipo = document.querySelector(".text-equipo")

const enviarData = (e) => {
  const equipo = document.querySelector('input[name="equipo"]:checked')

  e.preventDefault() 
  const userInfo = {
    nombre: inputNombre.value,
    color: listaColores.value,
    equipo: equipo.value
  }
  console.log(userInfo)
  document.body.style.background = userInfo.color
  userPage.style.display = "block"
  formulario.style.display = "none"
  //
  //
}

formulario.addEventListener("submit",enviarData)