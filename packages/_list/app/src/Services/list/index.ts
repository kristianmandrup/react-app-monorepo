import {Request} from './Request'
export const item = (config : any) => {
  return {
    request: Request.create(config)
  }
}
