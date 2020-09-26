import { Bot } from "./bot";
import { KabumBot } from "./kabom-bot";

var Xray = require('x-ray')

export const BotFactory = (store: string): Bot => {
  var bot: Bot;
  const x = Xray();

  switch (store) {
    case 'Kabum':
      bot = new KabumBot();
      break;  
    default:
      bot = new KabumBot();
      break;
  }

  return bot;
}
