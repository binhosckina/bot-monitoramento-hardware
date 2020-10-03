import { History, Link } from "../entities/"
import { makeBot } from "./bot-factory"

export class MonitoringTool {
  constructor() {  }

  start() {
    this.run()
  }

  async run(): Promise<void> {
    let links = await Link.find()
    links.forEach(link => {
      const bot = makeBot(link.store)
      bot.execute(link)
      .then(data => {
        console.log(data)
        this.save(link, data)
      })
    })
  }

  private async save(link: Link, data: number) {
    let history = new History()
    history.date = new Date()
    history.value = data
    history.link = link
    await history.save()
  }
}