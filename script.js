alert("¡Bienvenido, a continuación tenemos un juego para ti!");

let num1 = Number(prompt("Ingresa el primer número que se te ocurra: "));
let num2 = Number(prompt("Ingresa un segundo número: "));
let num3 = Number(prompt("Ingresa por último un tercer número: "));

// Validamos si alguno de los 3 no es un número
if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Por favor ingresa números válidos para continuar el juego.");
    document.getElementById("resultado").innerText = "Error: Debes ingresar solo números.";
} else {
    console.log("Excelente, los números ingresados son válidos.");
    
    console.log(`Los números ingresados son: ${num1}, ${num2}, ${num3}`);
    
    // LÓGICA DE COMPARACIÓN
}