//Array
// let frutas = ["mango","piña","papaya","uva","limón","aguacate"]
// let jugadores = [
//   {
//     id: 1,
//     nombre: "diaz", 
//     pais: "col"
//   },
//     "james",
//     "messi"
// ]
// console.log( jugadores[0].nombre ) //Imprimir nombre "diaz"

//Objeto
// let pelicula = {
//   nombre: "Back to the future",
//   estreno: 1986,
//   director:  "Robert Zemeckis",
//   calificacion: "8.5"
// }

// console.log( pelicula.director )

/* let num = Number( prompt("Introduce un número") )
let counter = 1 */

///Ejercicio 1 (while)
// Primero evalúa y luego ejecuta

/* while(counter <= num){
  if( counter % 5 === 0 ){
    console.log(counter)
  }
  counter++
} */

//Ejercicio 2 (do while)
//Primero ejecuta y luego evalúa
/* do{
  if( counter % 5 === 0 ){
    console.log(counter)
  }
  counter++
}
while(counter <= num) */

//Ejercicio 3 (for)

/* for(let i = 1; i <= 50; i++ ){
  if( i % 2 != 0 ){
    console.log(i)
  }
} */

//Cree un ciclo for que imprima la tabla de multiplicar del 7

/* for(let i = 1; i <= 10; i++){
  console.log(`7 x ${i} = ${7*1}`)
  //console.log("7 x " + i + " = " + (7*i) )
} */


  //Ejercicio 5

  //Cree un ciclo for que imprima 100 números
  for(let i = 1; i <= 100; i++){
    if( i >= 20 && i <= 30 ){
      continue
    }
    console.log(i)
  }