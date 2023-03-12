export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes; // assim ela evita diretamente a chamar qualquer metodo q possa modificar a lista
        //lista(): Array<Negociacao>{ 
        // return [...this.negociacoes];//criamos uma nova lista q pega cada item do array e coloca nessa nova lista.
        //Evita q possamos retirar os items dessa lista.
    }
}
