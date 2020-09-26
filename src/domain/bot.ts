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

  execute(url: string): Promise<any> {
    return this.x(url, this.scope, this.selector)
  }
}