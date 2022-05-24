"use strict";
let valor;
let displayTest;
let displayTest2;


/* arrow function para o quer vai estar escrito no display da calculadora */
const botao = (num) => {
    valor = document.querySelector("#display").value += num;

    return valor;
}

/* apagar tudo do display */
document.querySelector('#clean-all').addEventListener('click', () => {
    document.getElementById("display").value = '';
})

/* deletar o último número, um por vez */
document.querySelector('#del').addEventListener('click', () => {
    let input = document.querySelector("#display").value;
    input = document.getElementById("display").value = input.slice(0, -1);
})


/* adicionar o sinal de - no display */
document.querySelector('#sub').addEventListener('click', () => {
    document.getElementById("display").value += '-'
})

document.querySelector('#sum').addEventListener('click', () => {
    document.getElementById("display").value += '+'
})

/* adicionar o sinal de divisão no display */
document.querySelector('#div').addEventListener('click', () => {
    document.getElementById("display").value += '/'
})

/* adicionar o sinal de * no display */
document.querySelector('#mult').addEventListener('click', () => {
    document.getElementById("display").value += '*'
})

/* adicionar o . no display */
document.querySelector('#dot').addEventListener('click', () => {
    document.getElementById("display").value += '.'
})




document.querySelector('#igual').addEventListener('click', () => {
    document.querySelector("#display").value = ''
    var inicial = 0;
    var other = 1;

    if (valor.includes("+")) {
        if (valor.includes("-") || valor.includes("*") || valor.includes("/")) {
            alert("Somente uma operação por vez, por favor");
            location.reload();

        }
        let resultado = valor.split("+");
        for (var i = 0; i < resultado.length; i++) {
            var number = parseFloat(resultado[i]);
            inicial += number;
        }
        document.getElementById("display").value += inicial
    } else if (valor.includes("-")) {
        if (valor.includes("+") || valor.includes("*") || valor.includes("/")) {
            alert("Somente uma operação por vez, por favor");
            location.reload();
        }
        let resultado = valor.split("-")
        for (let i = 0; i < resultado.length; i++) {
            let number = parseFloat(resultado[i]);
            if ((number.lengt - 1) > number[0]) {
                inicial = inicial - number;
            } else {
                inicial = - (inicial + number);
            }

        }
        document.getElementById("display").value += inicial
    } else if (valor.includes("*")) {
        if (valor.includes("-") || valor.includes("+") || valor.includes("/")) {
            alert("Somente uma operação por vez, por favor");
            location.reload();
        }
        let resultado = valor.split("*");
        for (let i = 0; i < resultado.length; i++) {
            let number = parseFloat(resultado[i]);
            other *= number;
        }
        document.getElementById("display").value += other
    } else if (valor.includes("/")) {
        if (valor.includes("-") || valor.includes("*") || valor.includes("+")) {
            alert("Somente uma operação por vez, por favor");
            location.reload();
        }
        let resultado = valor.split("/");
        for (let i = 0; i < resultado.length; i++) {
            let number = parseFloat(resultado[i]);
            other = (1 / number) / other;
        }
        document.getElementById("display").value += other;
    }

});

const oneMore = () => {
    if (valor.includes("+")) {
        if (valor.include("-") || valor.includes("*") || valor.includes("/")) {
            alert("Somente uma operação por vez, por favor")
        }
    }
    else if (valor.includes("-")) {
        if (valor.include("+") || valor.includes("*") || valor.includes("/")) {
            alert("Somente uma operação por vez, por favor")
        }
    }
    else if (valor.includes("*")) {
        if (valor.include("-") || valor.includes("+") || valor.includes("/")) {
            alert("Somente uma operação por vez, por favor")
        }
    }
    else if (valor.includes("/")) {
        if (valor.include("-") || valor.includes("*") || valor.includes("+")) {
            alert("Somente uma operação por vez, por favor")
        }
    }
}