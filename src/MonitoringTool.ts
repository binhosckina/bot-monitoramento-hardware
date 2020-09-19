import { BotFactory } from "./BotFactory"
export class MonitoringTool {
  start(): void {

    const bot = BotFactory('Kabum')
    bot.execute('https://www.kabum.com.br/produto/96491/cooler-para-processador-cooler-master-intel-amd-masterair-ma410p-map-t4pn-220pc-r1')
    .then(res => {
      console.log(res)
    })
  }
}