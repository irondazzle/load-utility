export class Endpoint {
  constructor() {
    this.body = null;
    this.params = null;
    this.url = `https://kursk.ru/`;
  }

  getEndpoint() {
    return ['GET', this.url, this.body, this.params];
  }
}
