class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        // ... (3 pontos) é o spread operator, indica q cada posição do array é uma posição do construtor
        
        /* let data = new Date(...
            this._inputData.value
            .split('-')
            .map(function(item, index){
                if(index == 1) return --item;
                return item;
            })
        ); */
        
        // arrow function
        let data = new Date(
            ...
            this._inputData.value
            .split('-')
            .map((item, index) => item - index % 2)
        );

        console.log(data);
        let negociacao = new Negociacao(
            data,
            //this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
        this.cleanForm();
    }

    cleanForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';

        this._inputData.focus();
    }
}