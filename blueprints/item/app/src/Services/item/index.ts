import {Object} from './Local/Object'
export const item = (config : any) => {
  return {
    request: Object
      .Request
      .build(config)
  }
}
