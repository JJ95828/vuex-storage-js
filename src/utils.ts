import { utilsClass } from './interfaces'
export default class utils implements utilsClass {
  private storage: Storage

  constructor(storage: Storage) {
    this.storage = storage
  }
  has(key: string) {
    console.log(this.get(key))
    return !!this.get(key)
  }
  get(key: string) {
    return JSON.parse(this.storage.getItem(key))
  }
  set(key: string, value: any) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  del(key: string) {
    this.storage.removeItem(key)
  }
}

export const localStorage = new utils(window.localStorage)
export const sessionStorage = new utils(window.sessionStorage)
