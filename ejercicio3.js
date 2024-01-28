function numerosImparesHastaN(numero) {
    // si el numero es mayor a 0
    if (Number.isInteger(numero) && numero > 0) {
        let numerosImpares = [];

        for (let i = 1; i <= numero; i++) {
            // si es par o impar
            if (i % 2 !== 0) {
                numerosImpares.push(i);
            }
        }

        return numerosImpares;
    } else {
        // si el numero es invalido
        console.error("Por favor, ingresa un número entero positivo.");
        return [];
    }
}

// uso
const resultado = numerosImparesHastaN(29);
console.log(resultado); 