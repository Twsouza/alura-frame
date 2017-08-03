class Negociacao {
    constructor(data, quantidade, valor) {
        // _ é uma convenção que informa que o atributo só pode ser alterado pela função
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    getVolume() {
        return this._quantidade * this._valor;
    }

    getData() {
        return this._data;
    }

    getQuantidade() {
        return this._valor;
    }

    getValor() {
        return this._valor;
    }
}