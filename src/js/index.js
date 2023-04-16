

const BOTAOFECHARMODAL = document.querySelector('.fechar-modal');
const BOTAOTRAILER = document.querySelector('.botao-trailer');
const MODAL = document.querySelector('.modal');
const $VIDEO = document.querySelector('#video');
const $VIDEO_LINK =$VIDEO.src;





function alternarModal(){
    MODAL.classList.toggle("aberto")    
};

BOTAOTRAILER.addEventListener("click",()=>{
    alternarModal();
    $VIDEO.setAttribute('src',`${$VIDEO_LINK}`);
    
});



BOTAOFECHARMODAL.addEventListener('click',()=>{
    alternarModal();
    $VIDEO.setAttribute('src','');

});




/*
    OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o vídeo do traizer

    OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal

    OBJT1
    - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando js

    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão

    - passo 3 - dar um jeito de pegar o elemento da modal no js

    -passo 4 - abrir a modal na tela

*/