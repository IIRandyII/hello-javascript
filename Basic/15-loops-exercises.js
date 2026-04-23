/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
                14, 15, 16, 17, 18, 19, 20]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Número: ${numbers[i]}`);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let sum = 0
for (let i = 1; i <= 100; i++) {
    sum += i
}
console.log(`Suma: ${sum}`);
// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let pares = []
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        pares.push(i)
    }
}
console.log(`Números pares: ${pares}`);

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
const names = ["Alice", "Bob", "Charlie", "David", "Eve"]
for (let i = 0; i < names.length; i++) {
    console.log(`Nombre: ${names[i]}`);
}
// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
const text = "¡Hola, JavaScript!"
let vowelCount = 0
for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase()
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++
    }
}
console.log(`Número de vocales: ${vowelCount}`);
// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
const numArray = [1, 2, 3, 4, 5]
let product = 1
for (let i = 0; i < numArray.length; i++) {
    product *= numArray[i]
}
console.log(`Producto: ${product}`);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}
// 8. Usa un bucle para invertir una cadena de texto
const originalString = "¡Hola, JavaScript!"
let reversedString = ""
for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i]
}
console.log(`Cadena invertida: ${reversedString}`);
// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fibArray = [0, 1]
for (let i = 2; i < 10; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
}
console.log(`Secuencia de Fibonacci: ${fibArray}`);
// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
const mixedNumbers = [5, 12, 8, 20, 3, 15]
let greaterThanTen = []
for (let i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] > 10) {
        greaterThanTen.push(mixedNumbers[i])
    }
}
console.log(`Números mayores a 10: ${greaterThanTen}`);