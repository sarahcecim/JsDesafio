let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarConsole() {
    console.log('o botão console foi clicado')
}

function exibirAlerta() {
    alert('Eu amo JS');
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite seu primeiro número'));
    let segundoNumero = parseInt(prompt('Digite seu segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert (`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}