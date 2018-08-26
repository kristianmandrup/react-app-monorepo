import {Request} from './Request'
export const single = (config : any) => {
  return {
    request: Request.create(config)
  }
}
