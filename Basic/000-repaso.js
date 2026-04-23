// 1. Escribe un comentario en una línea
//practica

// 2. Escribe un comentario en varias líneas
/*practica de comentario
en varias lineas*/

/*
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myname = "Randy"
let age = 22
let height = 1.78
let Student = true
let undefinedValue 
let nullValue = null
let mysymbol = Symbol()
let myBigInt = BigInt(98732471387928732789327984789342)

// 4. Imprime por consola el valor de todas las variables
console.log(myname);
console.log(age);
console.log(height);
console.log(Student);
console.log(undefinedValue);
console.log(nullValue);
console.log(mysymbol);
console.log(myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myname);
console.log(typeof age);
console.log(typeof height);
console.log(typeof Student);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mysymbol);
console.log(typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myname = "Daniel"
age = 27
height = 1.80
Student = false
undefinedValue = undefined
nullValue = null
mysymbol = Symbol("newSymbol")
myBigInt = BigInt(7773293727373279327732732)
console.log(myname);
console.log(age);
console.log(height);
console.log(Student);
console.log(undefinedValue);
console.log(nullValue);
console.log(mysymbol);
console.log(myBigInt);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myname = 80
age = "veinte"
height = "unopuntoocho"
Student = null
undefinedValue = "hola"
nullValue = undefined
mysymbol = BigInt(938938923829832823892389)
myBigInt = Symbol("symbol")
console.log(myname);
console.log(age);
console.log(height);
console.log(Student);
console.log(undefinedValue);
console.log(nullValue);
console.log(mysymbol);
console.log(myBigInt);

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const newName = "Randyy"
const newAge = 22
const newHeight = 1.78
const newStudent = true
const newUndefinedValue = undefined
const newNullValue = null
const newMySymbol = Symbol("newSymbol")
const newMyBigInt = BigInt(1111111111111111111111111111)
console.log(newName);
console.log(newAge);
console.log(newHeight);
console.log(newStudent);
console.log(newUndefinedValue);
console.log(newNullValue);
console.log(newMySymbol);
console.log(newMyBigInt);

// 9. A continuación, modifica los valores de las constantes
newName = "hola"
newAge = 28
newHeight = 1.90
newStudent = false
newUndefinedValue = undefined
newNullValue = null
newMySymbol = Symbol("holaaa")
newMyBigInt = bigInt(222222222222222222222222222222)
console.log(newName);
console.log(newAge);
console.log(newHeight);
console.log(newStudent);
console.log(newUndefinedValue);
console.log(newNullValue);
console.log(newMySymbol);
console.log(newMyBigInt);
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

//TypeError: Assignment to constant variable.
*/

//--------------------------------------------------------------------------------------

/*
// 1. Crea una variable para cada operación aritmética
let suma = 10 + 5
let resta = 10 - 5
let multiplicacion = 10 * 5
let division = 10 / 5
let modulo = 10 % 5 
let exponente = 10 ** 5
let incremento = 10 
incremento++;
let decremento = 10
decremento--;
console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)
console.log(modulo)
console.log(exponente)
console.log(incremento)
console.log(decremento)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let suma2 = 15
suma2 += 15
let resta2 = 15
resta2 -= 15
let multiplicacion2 = 15
multiplicacion2 *= 15
let division2 = 15
division2 /= 15
let modulo2 = 100
modulo2 %= 100
let exponente2 = 15
exponente2 **= 15
console.log(suma2)
console.log(resta2)
console.log(multiplicacion2)
console.log(division2)
console.log(modulo2)
console.log(exponente2)
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5)
console.log(10 == 10)
console.log(99 < 100)
console.log(10 <= 10)
console.log(10 >= 6)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(10 < 5)
console.log(10 == 9)
console.log(99 > 100)
console.log(10 >= 80)
console.log(10 <= 6)
// 5. Utiliza el operador lógico and
console.log(10 < 11 && 90 > 10)
console.log(10 < 11 && 90 > 10 && 17 >= 17)
console.log(10 < 11 && 90 < 10)   //con un solo false lo toma como false
// 6. Utiliza el operador lógico or
console.log(10 == 10 || 10 < 11)
console.log(10 == 10 || 10 < 11 || 2 > 1)
console.log(10 > 20 || 10 > 11)   //tiene que ser todos falsos para que detecte false
// 7. Combina ambos operadores lógicos
console.log(15 >= 20 && 12 < 20 || 20 <= 30)
console.log(15 >= 20 && 12 < 20 || 20 >= 30)
// 8. Añade alguna negación
console.log(!(14 < 20))
console.log(!(14 > 20))
// 9. Utiliza el operador ternario
const isStudent = true
isStudent ? console.log("Es estudiante") : console.log("No es estudiante");

const isTeacher = false
isTeacher ? console.log("Es profesor") : console.log("no es profesor"); 
*/

//-------------------------------------------------------------------------------------

/*
// 1. Concatena dos cadenas de texto
let myName = "Randy"
let cadena = "Hola " + myName
console.log(cadena)
// 2. Muestra la longitud de una cadena de texto
console.log(cadena.length)
// 3. Muestra el primer y último carácter de un string
console.log(cadena[0])
console.log(cadena[9])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toUpperCase())
console.log(cadena.toLowerCase())
// 5. Crea una cadena de texto en varias líneas
let linea = `hola, este
es una string con varias lineas`
console.log(linea)
// 6. Interpola el valor de una variable en un string
let email = "randyruiz937@gmail.com"
console.log(`Hola, ${myName}! Tu email es ${email}.`)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadenaConEspacios = "Hola, ¿cómo estás?";
let cadenaSinEspacios = cadenaConEspacios.replace(/ /g, "-");
console.log(cadenaSinEspacios)
// 8. Comprueba si una cadena de texto contiene una palabra concreta
let palabra = "como";
console.log(palabra.includes("como")); // true
// 9. Comprueba si dos strings son iguales
let palabra1 = "hola"
let palabra2 = "hola"
console.log(palabra1 == palabra2)
// 10. Comprueba si dos strings tienen la misma longitud
let string4 = "Holaa";
let string5 = "Adiós";
console.log(string4.length === string5.length); // true
*/

//-------------------------------------------------------------------------------------

/*
// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = "Randy"
if (nombre) {
    console.log(nombre);
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "Randy"
let contraseña = "123"
if (usuario === "Randy" && contraseña === "123") {
    console.log("Felicidades");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
    let numeroPositivo = -3
    if (numeroPositivo > 0) {
        console.log("El numero es positivo");
    } else {
        console.log("El numero es negativo");
    }
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let persona = 15
if (persona >= 18) {
    console.log("Eres mayor de edad, puedes votar");
} else {
    console.log("Eres menor de edad, no puedes votar, Te faltan: " + (18 - persona) + " años.");
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
const adulto = persona >= 18 ? "Adulto" : "menor"
console.log("La persona es: " + adulto)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 6;
switch (mes) {
    case 12:
    case 1:
    case 2:
        console.log("Estamos en invierno.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Estamos en primavera.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Estamos en verano.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Estamos en otoño.");
        break;
    default:
        console.log("Mes inválido.");
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("El mes tiene 31 días.");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("El mes tiene 30 días.");
        break;
    case 2:
        console.log("El mes tiene 28 días (o 29 en año bisiesto).");
        break;
    default:
        console.log("Mes inválido.");
}
// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "es";
switch (idioma) {
    case "es":
        console.log("Hola!");
        break;
    case "en":
        console.log("Hello!");
        break;
        default:
        console.log("Idioma no reconocido.");
}
*/

//-------------------------------------------------------------------------------------------------

// 1. Crea un array que almacene cinco animales
let myArray = ["Perro", "Gato", "Tigre", "Oso", "Pajaro"]
console.log(myArray);

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Conejo")
myArray.push("Elefante")
console.log(myArray);
// 3. Elimina el que se encuentra en tercera posición
myArray.splice(2, 1)
console.log(myArray);
// 4. Crea un set que almacene cinco libros
let mySet = new Set (["libro1", "libro2", "libro3", "libro4", "libro5"])
console.log(mySet);
// 5. Añade dos más. Uno de ellos repetido
mySet.add("libro6", "libro1")
console.log(mySet);
// 6. Elimina uno concreto a tu elección
mySet.delete("libro4")
console.log(mySet);
// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map ([
    [1, "enero"],
    [2, "febrero"],
    [3, "marzo"],
    [4, "abril"],
    [5, "mayo"],
    [6, "junio"],
    [7, "julio"],
    [8, "agosto"],
    [9, "septiembre"],
    [10, "octubre"],
    [11, "noviembre"],
    [12, "diciembre"]
])
console.log(myMap);
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (myMap.has(5)) {
    console.log(myMap.get(5));
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
myMap.set("verano", ["junio", "julio", "agosto"]);
console.log(myMap)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myNewArray = ["Randy", "Daniel"]
let myNewSet = new Set (myNewArray);
let myNewMap = new Map ();
myNewMap.set("Nombre", myNewSet);
console.log(myNewMap);