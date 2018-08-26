export class Base {
  constructor(public config : any) {}

  public static create(config = {}) {
    return new Base(config)
  }
}
