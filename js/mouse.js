function saudacoes() {
    alert('Olá, você clicou no botão!');
}

function duploClique() {
    const elements = document.getElementsByClassName('ondclick');
    const rangeHexadecimal = '0123456789abcdef';

    let novaCor = '';

    novaCor = '#';
    for (let i = 0; i < 6; i++) {
        novaCor += rangeHexadecimal[Math.floor(Math.random() * rangeHexadecimal.length)];
    }

    for (let element of elements) {
        element.style.backgroundColor = novaCor;
    }
}

function mudaOTexto() {
    const paragrafo = document.getElementById("evonmouseover");
    if (!paragrafo) return;

    paragrafo.addEventListener('mouseenter', () => {
        paragrafo.textContent = "🙉";
    });

    paragrafo.addEventListener('mouseleave', () => {
        paragrafo.textContent = "🙈";
    });
}

function UpAndDown() {
    const botao = document.getElementById("btn-up-and-down");
    if (!botao) return;

    botao.addEventListener('mousedown', () => {
        botao.textContent = "Botão pressionado";
        botao.style.backgroundColor = "red";
    });

    botao.addEventListener('mouseup', () => {
        botao.textContent = "Botão liberado";
        botao.style.backgroundColor = "green";
    });
}

// Chama a função quando a página estiver pronta
window.addEventListener('DOMContentLoaded', UpAndDown);
window.addEventListener('DOMContentLoaded', mudaOTexto);