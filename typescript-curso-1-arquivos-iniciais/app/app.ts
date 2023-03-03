import { Negociacao } from "./models/negociacao.js";

const negociacao = new Negociacao(new Date())
console.log(negociacao.data);
console.log(negociacao.valor);
console.log(negociacao.quantidade);
console.log(negociacao.volume);
negociacao.setValor=12
console.log(negociacao.valor);

