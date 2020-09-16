var { botFactory } = require("./botFactory");
import { Bot } from "./model/Bot";
// import { botFactory } from "./botFactory";

const bot: Bot = botFactory('Kabum')
bot.execute('https://www.kabum.com.br/produto/96491/cooler-para-processador-cooler-master-intel-amd-masterair-ma410p-map-t4pn-220pc-r1')
// .write('results.json')
.then(res => {
  console.log(res)
})