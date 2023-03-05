import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacao } from "./models/negociacao.js";
const controler = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controler.adiciona();
})


const negociacao = new Negociacao(new Date(), 10, 100)
console.log(negociacao.volume);

