// Función principal para solicitar y procesar los números
function analizarNumeros() {
    let num1, num2, num3;

    // Bucle para solicitar y validar que las 3 entradas sean números válidos
    do {
        num1 = parseFloat(prompt("Ingresa el primer número:"));
        num2 = parseFloat(prompt("Ingresa el segundo número:"));
        num3 = parseFloat(prompt("Ingresa el tercer número:"));

        if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
            alert("⚠️ Por favor, ingresa únicamente números válidos.");
        }
    } while (isNaN(num1) || isNaN(num2) || isNaN(num3));

    const contenedorResultado = document.getElementById("resultado");
    let mensajeDOM = "";

    // 1. Verificar si todos los números son iguales
    if (num1 === num2 && num2 === num3) {
        const mensajeIguales = `Los tres números son iguales: ${num1}`;
        console.log(mensajeIguales);
        contenedorResultado.innerHTML = `<p><strong>${mensajeIguales}</strong></p>`;
        return;
    }

    // 2. Guardar los números en un arreglo para ordenarlos
    const numeros = [num1, num2, num3];

    // Ordenar de mayor a menor (Copia del arreglo)
    const mayorAMenor = [...numeros].sort((a, b) => b - a);

    // Ordenar de menor a mayor (Copia del arreglo)
    const menorAMayor = [...numeros].sort((a, b) => a - b);

    // 3. Identificar Mayor, Centro y Menor
    const mayor = mayorAMenor[0];
    const centro = mayorAMenor[1];
    const menor = mayorAMenor[2];

    // 4. Salida por Consola (tal como lo pide la prueba)
    console.log("--- RESULTADOS EN CONSOLA ---");
    console.log(`Entradas: ${num1}, ${num2}, ${num3}`);
    console.log("Ordenados de mayor a menor:", mayorAMenor.join(", "));
    console.log("Ordenados de menor a mayor:", menorAMayor.join(", "));
    console.log(`Mayor: ${mayor} | Centro: ${centro} | Menor: ${menor}`);

    // 5. Salida por el DOM (Pantalla HTML)
    mensajeDOM = `
        <p><strong>Números ingresados:</strong> ${num1}, ${num2}, ${num3}</p>
        <p><strong>De mayor a menor:</strong> ${mayorAMenor.join(", ")}</p>
        <p><strong>De menor a mayor:</strong> ${menorAMayor.join(", ")}</p>
        <hr>
        <p>📌 <strong>Detalle:</strong></p>
        <ul>
            <li><strong>Número mayor:</strong> ${mayor}</li>
            <li><strong>Número del centro:</strong> ${centro}</li>
            <li><strong>Número menor:</strong> ${menor}</li>
        </ul>
    `;

    // Si hay dos números iguales (pero no los 3), agregar nota aclaratoria
    if (num1 === num2 || num1 === num3 || num2 === num3) {
        mensajeDOM += `<p><em>Nota: Se detectaron números duplicados en la entrada.</em></p>`;
    }

    contenedorResultado.innerHTML = mensajeDOM;
}

// Ejecutar la función al cargar la página
analizarNumeros();