import {Base} from './Base'

export class Request extends Base {
  protected id : string = '1'

  public setId(id : string) {
    this.id = id
  }

  public async create(id : string, obj : any) {
    this.setId(id)
    return await this.update(obj)
  }

  public async read() {
    return {}
  }

  public async update(obj : any) {
    return obj
  }

  public async delete() {
    return true
  }
}
