const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoresultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "pergunta 1",
    alternativas: [
        "alternativa 01",
        "alternativa 02"
    ]
},
{
    enunciado: "pergunta 2",
    alternativas: [
        "alternativa 03",
        "alternativa 04"
    ]
},
{
    enunciado: "pergunta 3",
    alternativas: [
        "alternativa 05",
        "alternativa 06"
    ]
},
{
    enunciado: "pergunta 3",
    alternativas: [
        "alternativa 07",
        "alternativa 08"
    ]
}
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}
mostraPergunta();

console.log(perguntas)

