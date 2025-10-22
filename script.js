let imagem = document.querySelector(".troca-imagem")

function TrocaImagem(){
    if(imagem.style.opacity == 0){
        imagem.style.opacity = 1
    } else {
        imagem.style.opacity = 0

    }
    
} 

setInterval(TrocaImagem, 3000)


