var Xray = require('x-ray')

function botFactory(store, url) {
  var bot;
  const x = Xray();

  switch (store) {
    case 'Kabum':
      bot = Kabum();
      break;  
    default:
      break;
  }

  function execute() {
    return x(url, scope, selector)
  }

  return { execute }
}

var Kabum = function () {
  this.scope = ".preco_desconto";
  this.selector = "strong";
};

module.exports = { botFactory };