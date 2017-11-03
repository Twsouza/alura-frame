var ConnectionFactory = (function() {
	const stores  	= ['negociacoes'];
	const version 	= 4;
	const dbName	= 'aluraframe';

	var connection  = null;
	var close 		= null;

	return class ConnectionFactory {
		constructor() {
			throw new Error('Não é possivel instanciar essa classe');
		}

		static getConnection() {
			return new Promise((resolve, reject) => {
				let openRequest = window.indexedDB.open(dbName, version);
				openRequest.onupgradeneeded = e => {
					ConnectionFactory._createStores(e.target.result);
				};

				openRequest.onsuccess = e => {
					if(!connection) {
						connection 	= e.target.result;
						close 		= connection.close.bind(connection);
						// só pode fechar conexão pelo metodo abaixo
						connection.close = function() {
							throw new Error('Não é possivel fechar conexão diretamente');
						}
					}

					resolve(connection);
				};

				openRequest.onerror = e => {
					console.log(e.target.error);
					// só a string
					reject(e.target.error.name);
				};
			});
		}

		static _createStores(connection) {
			stores.forEach(store => {
				// se tiver, deleta a anterior
				if(connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);

				// cria a store
				connection.createObjectStore(store, { autoIncrement: true });
			});
		}

		static cloneConnection() {
			if(connection) {
				close();
				// anula pra se precisar fazer uma nova conexão
				connection = null;
			}
		}
	}
})();