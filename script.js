document.querySelector('.btn').addEventListener('click', function() {
    var imagem = document.getElementById('imagem');
    // Verifica qual imagem está atualmente exibida
    if (imagem.src.endsWith('joon.jpg')) {
        // Se a imagem atual for 'joon.jpg', troca para a próxima imagem
        imagem.src = 'img/kim.jpg';
    } else if (imagem.src.endsWith('kim.jpg')) {
        // Se a imagem atual for 'segunda-imagem.jpg', troca para a terceira imagem
        imagem.src = 'img/nam.jpg';
    } else {
        // Se a imagem atual for diferente de 'joon.jpg' e 'segunda-imagem.jpg', troca de volta para 'joon.jpg'
        imagem.src = 'img/joon.jpg';
    }
});
