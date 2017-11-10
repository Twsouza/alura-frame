'use strict';

System.register([], function (_export, _context) {
	"use strict";

	var _createClass, stores, version, dbName, connection, close, ConnectionFactory;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [],
		execute: function () {
			_createClass = function () {
				function defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i];
						descriptor.enumerable = descriptor.enumerable || false;
						descriptor.configurable = true;
						if ("value" in descriptor) descriptor.writable = true;
						Object.defineProperty(target, descriptor.key, descriptor);
					}
				}

				return function (Constructor, protoProps, staticProps) {
					if (protoProps) defineProperties(Constructor.prototype, protoProps);
					if (staticProps) defineProperties(Constructor, staticProps);
					return Constructor;
				};
			}();

			stores = ['negociacoes'];
			version = 4;
			dbName = 'aluraframe';
			connection = null;
			close = null;

			_export('ConnectionFactory', ConnectionFactory = function () {
				function ConnectionFactory() {
					_classCallCheck(this, ConnectionFactory);

					throw new Error('Não é possivel instanciar essa classe');
				}

				_createClass(ConnectionFactory, null, [{
					key: 'getConnection',
					value: function getConnection() {
						return new Promise(function (resolve, reject) {
							var openRequest = window.indexedDB.open(dbName, version);
							openRequest.onupgradeneeded = function (e) {
								ConnectionFactory._createStores(e.target.result);
							};

							openRequest.onsuccess = function (e) {
								if (!connection) {
									connection = e.target.result;
									close = connection.close.bind(connection);
									// só pode fechar conexão pelo metodo abaixo
									connection.close = function () {
										throw new Error('Não é possivel fechar conexão diretamente');
									};
								}

								resolve(connection);
							};

							openRequest.onerror = function (e) {
								console.log(e.target.error);
								// só a string
								reject(e.target.error.name);
							};
						});
					}
				}, {
					key: '_createStores',
					value: function _createStores(connection) {
						stores.forEach(function (store) {
							// se tiver, deleta a anterior
							if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store);

							// cria a store
							connection.createObjectStore(store, { autoIncrement: true });
						});
					}
				}, {
					key: 'cloneConnection',
					value: function cloneConnection() {
						if (connection) {
							close();
							// anula pra se precisar fazer uma nova conexão
							connection = null;
						}
					}
				}]);

				return ConnectionFactory;
			}());

			_export('ConnectionFactory', ConnectionFactory);
		}
	};
});
//# sourceMappingURL=ConnectionFactory.js.map