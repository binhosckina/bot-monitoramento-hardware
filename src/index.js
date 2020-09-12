var { botFactory } = require("./botFactory");

x = botFactory('Kabum', 'https://www.kabum.com.br/produto/96491/cooler-para-processador-cooler-master-intel-amd-masterair-ma410p-map-t4pn-220pc-r1')
x.execute()
// .write('results.json')
.then(res => {
  console.log(res)
})