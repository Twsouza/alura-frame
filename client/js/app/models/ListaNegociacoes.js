class ListaNegociacoes {
    constructor() {
        this._negociacoes = [];
        //this._contexto = contexto;
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
	}

	ordena(criterio) {
		console.log('ordenando...');
		this._negociacoes.sort(criterio);
	}

	inverteOrdem() {
		this._negociacoes.reverse();
	}
}