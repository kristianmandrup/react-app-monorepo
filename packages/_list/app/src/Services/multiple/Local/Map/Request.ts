import {Extend} from '../Extend'

interface IData {
  data : any
}

interface IRequestMapConfig {
  map : any
}

interface IIdConfig {
  id : any
}

export class Request extends Extend.Request {
  protected id : string = '1'
  protected map : any[]

  constructor(config : IRequestMapConfig) {
    super(config)
    this.map = config.map
  }

  public static build(config : IRequestMapConfig) {
    return new Request(config)
  }

  public setId(id : string) {
    this.id = id
  }

  public async create({data} : IData) {
    const {id} = data
    if (!id) {
      this.error(`create: missing 'id' field in data`, {id, map: this.map})
    }
    const clone = {
      ...data
    }
    this.map[id] = clone
    return this
  }

  public async read({id} : IIdConfig) {
    return this.map[id]
  }

  public async update({data} : IData) {
    const {id} = data
    if (!this.map[id]) {
      return this.error('update: item to update not found', {
        id: this.id,
        map: this.map
      })
    }
    const clone = {
      ...data
    }
    this.map[id] = clone
    return this;
  }

  public async delete(id : any) : Promise < any > {
    if(!this.map[id]) {
      return this.error('delete: item to delete not found', {
        id: this.id,
        map: this.map
      })
    }
    delete this.map[id];
    return this;

  }

  protected error(msg : string, ctx : any) {
    console.error(msg, ctx)
    throw new Error(msg)
  }
}
