import { Store } from "../entities/store";
import { Bot } from "./bot";
import { makeKabumBot } from "./kabum-bot-factory";

export const makeBot = (store: Store): Bot => {
  var bot: Bot;

  if (store.name === 'Kabum') {
    bot = makeKabumBot()
  } else {
    throw new Error('Unknow store')
  }

  return bot;
}
