# 🔢 Lógica de Programación 1 — Análisis y Ordenamiento de Números

Aplicación web desarrollada en **JavaScript puro (ES6)** que solicita tres números al usuario mediante ventanas emergentes (`prompt`), realiza un análisis lógico para identificar el número mayor, el del centro y el menor, evalúa si son iguales y muestra los resultados ordenados tanto en la consola como de forma dinámica en el DOM.

---

## 🎯 El Problema que Resuelve
En la programación y el desarrollo de software, es fundamental saber manipular, comparar y ordenar conjuntos de datos numéricos. Este programa resuelve la necesidad lógica de recibir entradas de usuario (las cuales pueden venir en cualquier orden, incluir números repetidos o valores no numéricos) y procesarlas para clasificarlas de forma descendente y ascendente, asegurando una validación robusta de los datos para evitar errores en tiempo de ejecución.

---

## 🛠️ Tecnologías Usadas
* **JavaScript (ES6):** Lógica de programación, uso de funciones, condicionales, bucles de validación, manipulación de arreglos (`sort`) y manipulación del DOM.
* **HTML5:** Estructura semántica de la interfaz de usuario.
* **CSS3:** Estilos limpios y modernos centrados en la experiencia de usuario (UX).
* **Git & GitHub:** Control de versiones y alojamiento del repositorio.

---

## 🚀 Funcionalidades Principales
1. **Solicitud Interactiva:** Captura de tres números independientes mediante cuadros de diálogo (`prompt`).
2. **Validación de Datos:** Sistema de reintento automático (bucle `do-while` con `isNaN`) que detecta si el usuario ingresó letras, campos vacíos o valores inválidos, solicitándolos nuevamente hasta obtener números correctos.
3. **Identificación de Iguales:** Capacidad de detectar si los tres números ingresados son exactamente idénticos, emitiendo una alerta específica.
4. **Ordenamiento Dinámico:** Clasificación automática de los números tanto de **mayor a menor** como de **menor a mayor**.
5. **Doble Salida de Resultados:** Los datos procesados se imprimen de manera estructurada en la consola del navegador y se renderizan visualmente dentro de la página web (DOM).

---

## ⚙️ Cómo Ejecutar el Proyecto Localmente
1. Clona este repositorio en tu computadora:
2. Abre la carpeta del proyecto en tu editor de código preferido (ej. Visual Studio Code).
3. Abre el archivo index.html directamente en tu navegador web de preferencia (o utiliza la extensión Live Server).
4. Sigue las instrucciones de las ventanas emergentes que aparecerán en pantalla para ingresar los tres números.

---

## 💡 Aprendizajes Clave
- Uso de Métodos de Arreglos: Afiancé el uso del método .sort() combinado con el operador de propagación (...) para ordenar copias de arreglos sin alterar el orden original de las variables.
- Validación de Entradas (Robustez): Comprendí la importancia de utilizar bucles do-while junto con isNaN() y parseFloat() para prevenir fallos críticos cuando el usuario introduce datos inesperados en los prompt.
- Lógica Condicional Avanzada: Resolví las múltiples combinaciones posibles entre tres números (números distintos, dos iguales, o los tres iguales) estructurando las condiciones de forma limpia y eficiente.

---

## 🔮 Mejoras Futuras
- Reemplazar prompt por Inputs Web: Migrar la captura de datos a formularios con campos de entrada (<input type="number">) dentro de la interfaz gráfica para ofrecer una experiencia de usuario más moderna y fluida sin bloqueos de navegador.
- Diseño Responsivo Avanzado: Añadir animaciones de transición al mostrar los resultados y adaptar el diseño para dispositivos móviles pequeños.
- Pruebas Unitarias: Implementar un archivo de pruebas (ej. con Jest) para verificar de manera automatizada las distintas combinaciones de entrada y salida requeridas.

---

## Instrucciones:
Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.
Pruébalo con las combinaciones de números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
Colócalo en un repositorio llamado “logica-programacion-1”

---

## Sugerencias:
Recuerda convertir a number el valor solicitado por prompt y verificar que sea un número para evitar errores en tu programa.
Recuerda que para mostrar mensajes por consola o por el DOM, debes crear un archivo HTML y enlazar tu script.
Piensa en las posibles combinaciones de números, para ayudarte puedes desarrollar un algoritmo y el pseudocódigo.
