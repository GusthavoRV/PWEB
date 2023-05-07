let windownOpen = document.getElementById('imagem')

function trocarImagemClick (cond) {
    if (cond){
        windownOpen.setAttribute ('src',  './images/window_broke.jpg');
    }

}

function trocarImagemHouver (cond) {
    if (cond){
        windownOpen.setAttribute ('src',  './images/window.clode.avif');
    }

}