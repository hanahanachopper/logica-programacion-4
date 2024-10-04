function obtenerNumero() {
    let numero;

    while (true) {
        // Pedir al usuario que ingrese un número
        let entrada = prompt("Por favor, ingresa un número para generar la serie de Fibonacci:");
        
        // Convertir la entrada a número
        numero = Number(entrada);
        
        // Validar si la entrada es un número y mayor que 0
        if (!isNaN(numero) && numero > 0) {
            break; // Si es válido, salir del bucle
        } else {
            alert("Error: Por favor, ingresa un número válido mayor que 0.");
        }
    }
    
    return numero;
}

function generarFibonacci(n) {
    let fibonacci = [0, 1]; // Inicializar la serie con los dos primeros números

    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // Sumar los dos anteriores
    }
    
    // Retornar solo la cantidad solicitada
    return fibonacci.slice(0, n);
}

function mostrarResultado(resultado) {
    console.log("Serie de Fibonacci:", resultado.join(", "));
}

// Ejecutar el programa
let numero = obtenerNumero();
let serieFibonacci = generarFibonacci(numero);
mostrarResultado(serieFibonacci);