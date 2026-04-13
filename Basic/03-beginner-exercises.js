/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
//Comentario

// 2. Escribe un comentario en varias líneas
/*comentario
en varias
líneas
*/
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myName = "Randy"
let age = 21
let height = 1.78
let student = true
let undefinedValue
let valueNull = null
let symbol = Symbol("symbol")
let bigInt = 817239871289371986589716389471628379612983761289376129n
// 4. Imprime por consola el valor de todas las variables
console.log(myName)
console.log(age)
console.log(height)
console.log(student)
console.log(undefinedValue)
console.log(valueNull)
console.log(symbol)
console.log(bigInt)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myName)
console.log(typeof age)
console.log(typeof height)
console.log(typeof student)
console.log(typeof undefinedValue)
console.log(typeof valueNull)
console.log(typeof symbol)
console.log(typeof bigInt)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Daniel"
age = 21
height = 1.79
student = false
undefinedValue = undefined
valueNull = null
symbol = Symbol("symbol2")
bigInt = 817239871289371986589716389471628379612983761289376130n
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = "false"
age = "21.4"
height = "78"
student = "hola"
undefinedValue = "null"
valueNull = "21"
symbol = "123"
bigInt = "81"
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myName2 = "Randy"
const age2 = 21
const height2 = 1.78
const student2 = true
const undefinedValue2 = undefined
const valueNull2 = null
const symbol2 = Symbol("symbol")
const bigInt2 = 817239871289371986589716389471628379612983761289376129n
// 9. A continuación, modifica los valores de las constantes
myName2 = "Daniel"
age2 = 21
height2 = 1.79
student2 = false
undefinedValue2 = "hola"
valueNull2 = "21"
symbol2 = "123"
bigInt2 = "81"

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
// myName2 = "Daniel"
// age2 = 21
// height2 = 1.79
// student2 = false
// undefinedValue2 = "hola"
// valueNull2 = "21"
// symbol2 = "123"
// bigInt2 = "81"

/*sale error al modificar el valor de las constantes, ya que no se pueden
modificar una vez asignado un valor a una constante. */