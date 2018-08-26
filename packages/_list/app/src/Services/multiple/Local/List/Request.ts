import {Extend} from '../Extend'

interface IData {
  data : any
}

interface IRequestListConfig {
  list : any[]
}

export class Request extends Extend.Request {
  protected id : string = '1'
  protected list : any[]

  constructor(config : IRequestListConfig) {
    super(config)
    this.list = config.list
  }

  public static build(config : IRequestListConfig) {
    return new Request(config)
  }

  public setId(id : string) {
    this.id = id
  }

  public async create({data} : IData) {
    const clone = {
      ...data
    }
    this
      .list
      .push(clone)
    return this
  }

  public async read() {
    return this
      .list
      .find(item => item.id === this.id)
  }

  public async update({data} : IData) {
    const clone = {
      ...data
    }
    const index = this
      .list
      .findIndex(item => item.id === this.id);
    if (!index) {
      return this.error('Item not found')
    }
    this.list[index] = clone;
    return this;
  }

  public async delete() : Promise < any > {
    const index = this
      .list
      .findIndex(item => item.id === this.id);
    if (!index) {
      return this.error('Item not found')
    }
    this
      .list
      .splice(index, 1);
    return this;
  }

  protected error(msg : string) {
    throw new Error(msg)
  }
}
