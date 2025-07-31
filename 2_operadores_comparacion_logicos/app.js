//Boolean(...)

console.log( ' "5" == "5" ', "5" != "5" ) //false
console.log( ' "5" === "5" ', "5" !== "5" ) //false
console.log( ' 5 === "5" ', 5 === "5" ) //false
console.log( ' 5 == "5" ', 5 !== "5" ) //true
console.log( ' 5 === (3+2) ', "5" === (3+2) ) //false
console.log( ' 5 === 5 ', 5 === 5 ) //true


//Concatenar ( + )

console.log( 5 + "3" ) // 53
console.log( 5 + Number("3") ) // 8
console.log( 5 * "3" ) // 15
console.log( 5 + 3 ) // 8

//Pida dos números al usuario y sumelos
let num1 = Number( prompt('Dame num 1') )  //"5"
let num2 = Number( prompt('Dame num 3') ) //"3"
let suma = num1 + num2 
let resta = num1 - num2 
let multiplicacion = num1 * num2 
let division = num1 / num2 

//Solución del ejercicio concatenando (+)
/* console.log('La suma de ' + num1 + ' + ' + num2 + ' = ' + suma)
console.log('La resta de ' + num1 + ' - ' + num2 + ' = ' + resta)
console.log('La multiplicacion de ' + num1 + ' * ' + num2 + ' = ' + multiplicacion)
console.log('La division de ' + num1 + ' / ' + num2 + ' = ' + division) */

//
console.log(`Tu número es ${num1}`)

