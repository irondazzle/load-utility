export class Endpoint {
  constructor() {
    this.body = null;
    this.params = null;
    this.url = `target host`;
  }

  getEndpoint() {
    return ['GET', this.url, this.body, this.params];
  }
}
