"use strict";
let valor;
let displayTest;
let displayTest2;
//isso
function botao(num) {
    valor = document.getElementById("display").value += num;

    return valor;
}

function resetar() {
    document.getElementById("display").value = '';
}

function subtracao() {
    document.getElementById("display").value += '-'
}

function soma() {
    document.getElementById("display").value += '+'
}

function divisao() {
    document.getElementById("display").value += '/'
}

function multiplicar() {
    document.getElementById("display").value += '*'
}

function ponto() {
    document.getElementById("display").value += '.'
}


function igual() {
    document.getElementById("display").value = ''
    var inicial = 0;
    var other = 1;
    if (valor.includes("+")) {
        var resultado = valor.split("+")
        /* console.log(resultado.length) */
        for (var i = 0; i < resultado.length; i++) {
            var number = parseFloat(resultado[i])
            inicial += number
        }
        document.getElementById("display").value += inicial
    } else if (valor.includes("-")) {
        var resultado = valor.split("-")
        for (var i = 0; i < resultado.length; i++) {
            var number = parseFloat(resultado[i])
            if ((number.lengt - 1) > number[0]) {
                inicial = inicial - number
            } else {
                inicial = - (inicial + number)
            }

        }
        document.getElementById("display").value += inicial
    } else if (valor.includes("*")) {
        var resultado = valor.split("*")
        /* console.log(resultado.length) */
        for (var i = 0; i < resultado.length; i++) {
            var number = parseFloat(resultado[i])
            other *= number
        }
        document.getElementById("display").value += other
    } else if (valor.includes("/")) {
        var resultado = valor.split("/")
        /* console.log(resultado.length) */
        for (var i = 0; i < resultado.length; i++) {
            var number = parseFloat(resultado[i])
            other = (1 / number) / other
        }
        document.getElementById("display").value += other
    }
}