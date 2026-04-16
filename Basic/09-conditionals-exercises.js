/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
    let nombre = "Randy";
    if (nombre) {
        console.log(nombre);
    }
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuario = "admin";
let contraseña = "123456";
if (usuario === "admin" && contraseña === "123456") {
    console.log("Bienvenido, admin.");
} else {
    console.log("Usuario o contraseña incorrectos.");
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -5;
if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 16;
if (edad >= 18) {
    console.log("Puedes votar.");
} else {
    console.log("Aún no puedes votar. Te faltan " + (18 - edad) + " años.");
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let esAdulto = edad >= 18 ? "adulto" : "menor";
console.log("La persona es " + esAdulto);

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
