import {Request} from './Local/List'
export const single = (config : any) => {
  return {
    request: Request.build(config)
  }
}
