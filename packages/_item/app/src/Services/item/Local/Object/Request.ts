import {Extend} from '../Extend'

interface IData {
  data : any
}

interface IRequestObjectConfig {
  data : any
}

export class Request extends Extend.Request {
  protected data : any = {}

  constructor(config : IRequestObjectConfig) {
    super(config)
    this.data = config.data
  }

  public static build(config : IRequestObjectConfig) {
    return new Request(config)
  }

  public async create({data} : IData) {
    this.data = {
      ...data
    }
    return this
  }

  public async read() {
    return this.data
  }

  public async update({data} : IData) {
    this.data = {
      ...data,
      ...this.data
    }
    return this;
  }

  public async delete() {
    this.data = {}
    return this
  }

  protected error(msg : string) {
    return Promise.resolve(new Error(msg))
  }
}
