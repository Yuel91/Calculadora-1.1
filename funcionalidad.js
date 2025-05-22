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
    const pantalla = document.getElementById('Pantalla');
    const historial = document.getElementById('Historial');
    try {
        const resultado = eval(pantalla.value);
        const operacion = pantalla.value + ' = ' + resultado;
        pantalla.value = resultado;

        // Crear nuevo registro visual
        const nuevoRegistro = document.createElement('div');
        nuevoRegistro.textContent = operacion;
        historial.appendChild(nuevoRegistro);

        // Guardar en localStorage
        guardarEnHistorial(operacion);

        // Scroll automático
        historial.scrollTop = historial.scrollHeight;
    } catch {
        pantalla.value = 'Error';
    }
}

function limpiarHistorial() {
    document.getElementById('Historial').innerHTML = '';
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

function guardarEnHistorial(operacion) {
    const historialGuardado = JSON.parse(localStorage.getItem('historial')) || [];
    historialGuardado.push(operacion);
    localStorage.setItem('historial', JSON.stringify(historialGuardado));
}

function cargarHistorial() {
    const historial = document.getElementById('Historial');
    const historialGuardado = JSON.parse(localStorage.getItem('historial')) || [];
    historialGuardado.forEach(op => {
        const div = document.createElement('div');
        div.textContent = op;
        historial.appendChild(div);
    });
    historial.scrollTop = historial.scrollHeight;
}

function limpiarHistorial() {
    document.getElementById('Historial').innerHTML = '';
    localStorage.removeItem('historial');
}

window.onload = function () {
    cargarHistorial();
};

//Ocultar historial
function toggleHistorial() {
    const historial = document.getElementById('Historial');
    const toggleBtn = document.getElementById('ToggleHistorial');
    if (historial.style.display === 'none' || historial.style.display === '') {
        historial.style.display = 'block';
        toggleBtn.textContent = '🙈';
    } else {
        historial.style.display = 'none';
        toggleBtn.textContent = '🧾';
    }
}