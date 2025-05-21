function agregarValor(value) {
    const pantalla = document.getElementById('Pantalla');
    const operadores = ['+', '-', '*', '/'];
    const ultimo = pantalla.value.slice(-1);

    // Reemplazar operador si el último también lo es
    if (operadores.includes(value) && operadores.includes(ultimo)) {
        pantalla.value = pantalla.value.slice(0, -1) + value;
    } else {
        pantalla.value += value;
    }
}

function limpiarPantalla() {
    document.getElementById('Pantalla').value = '';
}

function eliminarUltimo() {
    const pantalla = document.getElementById('Pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}

function Calcular() {
    try {
        const resultado = eval(document.getElementById('Pantalla').value);
        const final = Number.isInteger(resultado) ? resultado : resultado.toFixed(4);
        document.getElementById('Pantalla').value = final;
    } catch {
        document.getElementById('Pantalla').value = 'Error';
    }
}

function cambiarSigno() {
    const pantalla = document.getElementById('Pantalla');
    if (pantalla.value) {
        if (pantalla.value.startsWith('-')) {
            pantalla.value = pantalla.value.substring(1);
        } else {
            pantalla.value = '-' + pantalla.value;
        }
    }
}

function popup() {
    alert("¡Gracias por usar esta calculadora!\nCreado por Yuel©");
}

// Soporte de teclado físico
document.addEventListener('keydown', function(e) {
    const permitido = '0123456789/*-+.';
    if (permitido.includes(e.key)) {
        agregarValor(e.key);
    } else if (e.key === 'Enter') {
        e.preventDefault();
        Calcular();
    } else if (e.key === 'Backspace') {
        eliminarUltimo();
    } else if (e.key === 'Escape') {
        limpiarPantalla();
    }
});
