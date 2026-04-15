/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3;
let resta = 10 - 4;
let multiplicacion = 6 * 7;
let division = 20 / 5;
let modulo = 10 % 3;
let exponente = 2 ** 3;
let incremento = 5;
incremento++;
let decremento = 10;
decremento--;
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let asignacionSuma = 2;
asignacionSuma += 2; // 2 + 2
let asignacionResta = 10;
asignacionResta -= 2; // 10 - 2
let asignacionMultiplicacion = 4;
asignacionMultiplicacion *= 2; // 4 * 2
let asignacionDivision = 5;
asignacionDivision /= 2; // 5 / 2
let asignacionModulo = 2;
asignacionModulo %= 2; // 2 % 2
let asignacionExponente = 2;
asignacionExponente **= 2; // 2 ** 2
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(20 > 10);
console.log(5 < 10);
console.log(15 >= 15);
console.log(8 <= 10);
console.log(3 == 3);

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(20 < 10);
console.log(10 > 15);
console.log(5 >= 6);
console.log(8 <= 7);
console.log(3 == 4);
// 5. Utiliza el operador lógico and
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// 6. Utiliza el operador lógico or
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
// 7. Combina ambos operadores lógicos
console.log((5 > 3) && (10 < 20)); // true && true -> true
console.log((5 > 3) || (10 > 20)); // true || false -> true
console.log((5 < 3) && (10 < 20)); // false && true -> false
// 8. Añade alguna negación
console.log(!(5 > 3)); // !true -> false
console.log(!(5 < 3)); // !false -> true
// 9. Utiliza el operador ternario
let resultado = (5 > 3) ? "5 es mayor que 3" : "5 no es mayor que 3";
console.log(resultado);
// 10. Combina operadores aritméticos, de comparación y lógicas
let combinacion = ((5 + 3) > (10 - 4)) && ((6 * 7) < (20 / 5));
console.log(combinacion);