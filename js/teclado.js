function teclaPressionada() {
    const input = document.getElementById('evento-key-down');
    if (!input) return;

    input.addEventListener('keydown', (event) => {
        const rangeHexadecimal = '0123456789abcdef';

        let novaCor = '';

        novaCor = '#';
        for (let i = 0; i < 6; i++) {
            novaCor += rangeHexadecimal[Math.floor(Math.random() * rangeHexadecimal.length)];
        }

        console.log("Tecla pressionada:", event.key);
        if (input.value == "reset") {
            document.body.style.backgroundColor = "#cacaca";
        } else {
            document.body.style.backgroundColor = novaCor;
        }
    });
}

function mostrarTexto() {
    const input = document.getElementById('campo');
    const saida = document.getElementById('saida');

    if (!input || !saida) return;

    input.addEventListener('keyup', () => {
        const texto = input.value;
        saida.textContent = "Você digitou: " + texto;
    });
}

function mostrarLetra() {
    const input = document.getElementById('campo-keypress');
    const saida = document.getElementById('saida-keypress');

    if (!input || !saida) return;

    input.addEventListener('keypress', (event) => {
        saida.textContent = "Você pressionou: " + event.key;
    });
}

// Chama as funções quando a página estiver pronta
window.addEventListener('DOMContentLoaded', () => {
    teclaPressionada();
    mostrarTexto();
    mostrarLetra();
});