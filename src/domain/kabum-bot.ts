import { Bot } from "./bot";

export class KabumBot extends Bot {
  constructor() {
    super(".preco_desconto", "strong");
  }

  format(data: string): number {
    try {
      let num = data.substring(3).trim()
      return Number.parseFloat(num)
    }
    catch (e) {
      throw new Error(`Cannot parse "${data}" to float`); 
    }
  }
}