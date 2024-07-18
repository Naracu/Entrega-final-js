const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display (displayValorActual, displayValorAnterior);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        display.agregarNumero(boton.innerHTML)
    });
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value) )
})

const boton0 = document.getElementById('boton0');

boton0.addEventListener('click', () => {
  display.agregarNumero.bind(display)(boton0.innerHTML);
});