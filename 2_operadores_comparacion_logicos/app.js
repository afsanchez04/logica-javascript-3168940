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
let resultado = num1 + num2 
alert( "El resultado de tu suma es " + resultado )

