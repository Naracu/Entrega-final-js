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

$(document).ready(function(){
    $('.calculadoraw').prepend('<h2>Mi Calculadora para JS</h2>');
});


function calcularConConversion() {
    const cantidad = document.getElementById('cantidad').value;
    const divisa = document.getElementById('divisa').value;
        fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
          .then(response => response.json())
          .then(data => {
            const tasa = data.rates[divisa];
            const resultado = cantidad * tasa;
            // Mostrar el resultado en la calculadora
            document.getElementById('resultado').textContent = resultado;
          })
          .catch(error => {
            console.error('Error al obtener la tasa de cambio:', error);
          });
      }  