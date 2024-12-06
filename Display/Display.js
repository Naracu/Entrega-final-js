class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora ();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            suma: '+',
            dividir: '/',
            multiplicar: '*',
            resta: '-',

        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.'))
            return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
        this.cambiarEstilo(parseFloat(this.valorActual));
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorActual) || isNaN(valorAnterior)) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual).toString();
        this.cambiarEstilo(parseFloat(this.valorActual));
    }
    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }
    cambiarEstilo(valor) {
        const esCeroOPar = valor === 0 || valor % 2 === 0;
        const nuevoColorBody = esCeroOPar ? '#E8BE48' : 'rgba(48, 48, 47, 0.808)';
        const nuevoColorHeader = esCeroOPar ? '#E89148' : 'rgb(38, 38, 156)';
        const nuevoColorCalculadora = esCeroOPar ? '#A8A15E' : 'darkmagenta';

        document.querySelector('main').style.backgroundColor = nuevoColorBody;
        document.querySelector('header').style.backgroundColor = nuevoColorHeader;
        document.querySelector('.calculadora').style.backgroundColor = nuevoColorCalculadora;
        document.querySelector('button').style.backgroundColor = nuevoColorCalculadora;
    }
}