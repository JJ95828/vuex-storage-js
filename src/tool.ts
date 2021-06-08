import { utilsClass } from './interfaces'
export default class toolClass implements utilsClass {
  private storage: Storage

  constructor(storage: Storage) {
    this.storage = storage
  }
  has(key: string) {
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

export const localStorage = new toolClass(window.localStorage)
export const sessionStorage = new toolClass(window.sessionStorage)
