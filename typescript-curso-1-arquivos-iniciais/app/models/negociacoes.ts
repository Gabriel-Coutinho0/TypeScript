import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
    //pode ser assim tb private negociacoes: Negociacao[] = [];

    adicona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao>{
        //pode ser assim readonly Negociacao[]
        return this.negociacoes;// assim ela evita diretamente a chamar qualquer metodo q possa modificar a lista
    //lista(): Array<Negociacao>{ 
        // return [...this.negociacoes];//criamos uma nova lista q pega cada item do array e coloca nessa nova lista.
    //Evita q possamos retirar os items dessa lista.
    }
}

