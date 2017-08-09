class NegociacoesView {

    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(modelo) {
        console.log(modelo);
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${modelo.negociacoes.map(n =>`

                        <tr>
                            <td>${DateHelper.dataParaTexto(n.data)}</td>
                            <td>${n.quantidade}</td>
                            <td>${n.valor}</td>
                            <td>${n.volume}</td>
                        </tr>

                    `).join('')}
                </tbody>
                
                <tfoot>
                    <td colspan="3">Total</td>
                    <td>${modelo.negociacoes.length}</td>
                </tfoot>
            </table> 
        `;
        /*  Immediately-invoked function expression (IIFE)
        ${
            (function() {

                let total = 0;
                model.negociacoes.forEach(n => total+= n.volume);
                return total;
        })()
        } 
        */

        /* reduce() irá processar o array e no fim disponibiliza um único resultado
        ${ model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
        */
    }

    update(modelo) {
        this._elemento.innerHTML = this._template(modelo);
    }
}