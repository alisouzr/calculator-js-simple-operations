"use strict";
let valor;
let displayTest;
let displayTest2;
//isso

/* document.querySelector(".botao").addEventListener('click', (num) => {
    let valor = document.querySelector("#display").value += num;

    return valor;
}) */

const botao = (num) => {
    valor = document.querySelector("#display").value += num;

    return valor;
}

document.querySelector('#clean-all').addEventListener('click', () => {
    document.getElementById("display").value = '';
})

document.querySelector('#sub').addEventListener('click', () => {
    document.getElementById("display").value += '-'
})

document.querySelector('#sum').addEventListener('click', () => {
    document.getElementById("display").value += '+'
})

document.querySelector('#div').addEventListener('click', () => {
    document.getElementById("display").value += '/'
})

document.querySelector('#mult').addEventListener('click', () => {
    document.getElementById("display").value += '*'
})

document.querySelector('#dot').addEventListener('click', () => {
    document.getElementById("display").value += '.'
})


document.querySelector('#igual').addEventListener('click', () => {
    document.getElementById("display").value = ''
    var inicial = 0;
    var other = 1;
    if (valor.includes("+")) {
        var resultado = valor.split("+");
        /* console.log(resultado.length) */
        for (var i = 0; i < resultado.length; i++) {
            var number = parseFloat(resultado[i]);
            inicial += number;
        }
        document.getElementById("display").value += inicial
    } else if (valor.includes("-")) {
        var resultado = valor.split("-")
        for (var i = 0; i < resultado.length; i++) {
            var number = parseFloat(resultado[i]);
            if ((number.lengt - 1) > number[0]) {
                inicial = inicial - number;
            } else {
                inicial = - (inicial + number);
            }

        }
        document.getElementById("display").value += inicial
    } else if (valor.includes("*")) {
        var resultado = valor.split("*");
        for (var i = 0; i < resultado.length; i++) {
            var number = parseFloat(resultado[i]);
            other *= number;
        }
        document.getElementById("display").value += other
    } else if (valor.includes("/")) {
        var resultado = valor.split("/");
        for (var i = 0; i < resultado.length; i++) {
            var number = parseFloat(resultado[i]);
            other = (1 / number) / other;
        }
        document.getElementById("display").value += other
    }
});