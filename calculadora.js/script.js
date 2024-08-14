let resultado = document.getElementById('resultado');
let expressao = '';

function adicionarNumero(numero) {
    expressao += numero;
    resultado.value = expressao;
}

function adicionarOperacao(operacao) {
    expressao += ' ' + operacao + ' ';
    resultado.value = expressao;
}

function calcular() {
    try {
        resultado.value = eval(expressao);
        expressao = '';
    } catch (error) {
        resultado.value = 'Erro';
        expressao = '';
    }
}

function limpar() {
    expressao = '';
    resultado.value = '';
}
