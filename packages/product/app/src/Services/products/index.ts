import {List} from './List'
export const products = config => {
  return {
    list: List.create(config)
  }
}
