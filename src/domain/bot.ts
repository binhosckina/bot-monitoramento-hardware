import { Link } from "../entities/link";

var Xray = require('x-ray')

export abstract class Bot {
  scope: string;
  selector: string;
  x: any;

  constructor(scope: string, selector: string) {
    this.scope = scope;
    this.selector = selector;
    this.x = Xray();
  }

  async execute(link: Link): Promise<number> {
    return await this.format(this.x(link.uri, this.scope, this.selector))
  }

  format(data: string): number {
    try {
      return Number.parseFloat(data)
    }
    catch (e) {
      throw new Error(`Cannot parse "${data}" to float`); 
    }
  }
}