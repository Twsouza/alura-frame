Comandos utilizados:
# Iniciar npm
npm init

# Instalar o babel
npm install babel-preset-es2015@6.9.0 --save-dev

# Processo de build do babel
# configurado anteriomente no package
npm run build

# Watch do babel
# necessario configurar anteriormente
npm run watch

# Instalar o systemjs
npm install systemjs@0.19.31 --save-no-optional.

# Instalar o plugin babel to systemjs
npm install babel-plugin-transform-es2015-modules-systemjs@6.9.0 --save-dev-no-optional
# Ou
npm install babel-plugin-transform-es2015-modules-systemjs@6.9.0 --save-dev --no-optional
