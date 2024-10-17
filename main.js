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

const contadore = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-15T00:00:00");
const tempoObjetivo2 = new Date("2024-12-25T00:00:00");
const tempoObjetivo3 = new Date("2024-11-09T00:00:00");
const tempoObjetivo4 = new Date("2024-04-12T00:00:00");
