/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = "Hola, ";
let cadena2 = "¿cómo estás?";
let resultado = cadena1 + cadena2;
console.log(resultado); // "Hola, ¿cómo estás?"
// 2. Muestra la longitud de una cadena de texto
let cadena = "Hola, ¿cómo estás?";
console.log(cadena.length); // 18
// 3. Muestra el primer y último carácter de un string
console.log(cadena[0]); // "H"
console.log(cadena[cadena.length - 1]); // "?"
// 4. Convierte a mayúsculas y minúsculas un string
console.log(cadena.toUpperCase()); // "HOLA, ¿CÓMO ESTÁS?"
console.log(cadena.toLowerCase()); // "hola, ¿cómo estás?" 
// 5. Crea una cadena de texto en varias líneas
let cadenaMultilinea = `Hola, este es un string
en varias líneas.`;
console.log(cadenaMultilinea);
// 6. Interpola el valor de una variable en un string
let nombre = "Juan";
let saludo = `Hola, ${nombre}!`;
console.log(saludo); // "Hola, Juan!"
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let cadenaConEspacios = "Hola, ¿cómo estás?";
let cadenaSinEspacios = cadenaConEspacios.replace(/ /g, "-");
console.log(cadenaSinEspacios); // "Hola,-¿cómo-estás?"
// 8. Comprueba si una cadena de texto contiene una palabra concreta
let palabra = "cómo";
console.log(cadena.includes(palabra)); // true
// 9. Comprueba si dos strings son iguales
let string1 = "Hola";
let string2 = "Hola";
let string3 = "Adiós";
console.log(string1 === string2);
// 10. Comprueba si dos strings tienen la misma longitud
let string4 = "Hola";
let string5 = "Adiós";
console.log(string4.length === string5.length); // true