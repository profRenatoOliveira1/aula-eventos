let cont = 0;

function carregar() {
    alert('A página foi carregada...');
}

function redimensionar() {
    alert('A janela foi redimensionada...');
}

function scrollar() {
    console.log('Scroll detectado ' + cont);
    cont++;
}

// Chama as funções quando a página estiver pronta
window.addEventListener('DOMContentLoaded', carregar);

// Adiciona o evento de redimensionamento da janela
window.addEventListener('resize', redimensionar);

// Adiciona o evento de rolagem da página
window.addEventListener('scroll', scrollar);