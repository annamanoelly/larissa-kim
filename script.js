document.querySelector('.btn').addEventListener('click', function() {
    var imagem = document.getElementById('imagem');
   
    if (imagem.src.endsWith('joon.jpg')) {
       
        imagem.src = 'img/kim.jpg';
    } else if (imagem.src.endsWith('kim.jpg')) {
        
        imagem.src = 'img/nam.jpg';
    } else {
       
        imagem.src = 'img/joon.jpg';
    }
});
