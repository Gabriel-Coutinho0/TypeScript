export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    constructor(//do jeito abaixo fica mais limpo o código, ele continua a fazr a msm coisa do de cima
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) {
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }

    get data(): Date {
        return this._data
    }
    get quantidade(): number {
        return this._quantidade
    }
    get valor(): number {
        return this._valor
    }
    get volume(): number {
        return this.valor * this.quantidade
    }
    set setValor(valor: number) {
        this._valor = valor
    }

}