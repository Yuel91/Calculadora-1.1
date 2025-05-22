function agregarValor(value) {
    const pantalla = document.getElementById('Pantalla');
    const operadores = ['+', '-', '*', '/'];
    const ultimo = pantalla.value.slice(-1);

    if (pantalla.value === '' && operadores.includes(value)) return;

    if (operadores.includes(value) && operadores.includes(ultimo)) {
        pantalla.value = pantalla.value.slice(0, -1) + value;
        return;
    }

    if (value === '.') {
        const partes = pantalla.value.split(/[\+\-\*\/]/);
        const ultimoNumero = partes[partes.length - 1];
        if (ultimoNumero.includes('.')) return;
    }

    pantalla.value += value;
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
        document.getElementById('Pantalla').value = resultado;
    } catch {
        document.getElementById('Pantalla').value = 'Error';
    }
}

function cambiarSigno() {
    const pantalla = document.getElementById('Pantalla');
    const valor = pantalla.value;

    try {
        if (valor) {
            const resultado = eval(valor) * -1;
            pantalla.value = resultado;
        }
    } catch {
        pantalla.value = 'Error';
    }
}

function popup() {
    alert('Creado por Yuel©');
}

function cambiarTema() {
    document.body.classList.toggle('light-mode');
}

// Teclado físico
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const operadores = ['+', '-', '*', '/'];
    const numeros = '0123456789';

    if (numeros.includes(key) || operadores.includes(key) || key === '.') {
        agregarValor(key);
    }

    if (key === 'Enter') Calcular();
    if (key === 'Backspace') eliminarUltimo();
    if (key === 'Escape') limpiarPantalla();
});
