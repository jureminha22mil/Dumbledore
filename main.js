const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

for(let j=0; j < botoes.length; j++){
    botoes[j].onclick = function(){
        for(let i = 0; i < botoes.length; i++){
            botoes[i].classList.remove("ativo");
            textos[i].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        botoes[i].classList.add("ativo");
    }
}
