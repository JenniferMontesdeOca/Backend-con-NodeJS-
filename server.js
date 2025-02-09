
const express = require("express");
const app = express();
const port = 3000;

// Función para calcular la secuencia de Collatz
function collatzSequence(n) {
    let sequence = [];
    while (n !== 1) {
        sequence.push(n);
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
    }
    sequence.push(1); // Agregar el último número (1)
    return sequence;
}

// Ruta GET para la secuencia de Collatz
app.get("/collatz", (req, res) => {
    const { numero } = req.query;
    const num = parseInt(numero, 10);
    
    if (isNaN(num) || num <= 0) {
        return res.status(400).json({ error: "El número debe ser un entero positivo." });
    }
    
    const sequence = collatzSequence(num);
    res.status(200).json({ numero: num, secuencia: sequence });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
