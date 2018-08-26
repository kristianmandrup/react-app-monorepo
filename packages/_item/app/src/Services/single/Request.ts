import {Base} from './Base'

interface IData {
  data : any
}

export class Request extends Base {
  protected id : string = '1'

  public setId(id : string) {
    this.id = id
  }

  public async create({data} : IData) {
    return data
  }

  public async read() {
    return {}
  }

  public async update({data} : IData) {
    return data
  }

  public async delete() {
    return true
  }
}
