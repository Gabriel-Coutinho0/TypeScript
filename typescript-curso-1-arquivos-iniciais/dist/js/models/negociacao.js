export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    constructor(//do jeito abaixo fica mais limpo o código, ele continua a fazr a msm coisa do de cima
    _data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    set setValor(valor) {
        this._valor = valor;
    }
}
