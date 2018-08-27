import {Base} from './Base'

export class Request extends Base {
  public async all() {
    return []
  }

  public async add(id : string, obj : any) {
    return obj
  }

  public async update(id : string, obj : any) {
    return obj
  }

  public async delete(id : string) {
    return true
  }
}
