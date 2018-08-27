import {Base} from './Base'

interface IData {
  data : any
}

export class Request extends Base {
  protected id : string = '1'

  public static build(config = {}) {
    return new Request(config)
  }

  public setId(id : string) {
    this.id = id
  }

  public async create({data} : IData) : Promise < any > {
    return Promise.resolve(this)
  }

  public async read() : Promise < any > {
    return Promise.resolve({})
  }

  public async update({data} : IData) : Promise < any > {
    return Promise.resolve(this)
  }

  public async delete() : Promise < any > {
    return Promise.resolve(this)
  }
}
