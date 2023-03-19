export class Negociacao {
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    constructor(//do jeito abaixo fica mais limpo o código, ele continua a fazr a msm coisa do de cima
    _data, quantidade, //assim mesmo ela estando public ela só pode ficar pra leitrua
    valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return this._data;
    }
    // get quantidade(): number {
    //     return this.quantidade
    // }
    // get valor(): number {
    //     return this.valor
    // }
    get volume() {
        return this.valor * this.quantidade;
    }
}
