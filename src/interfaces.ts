export { Plugin as VuexPlugin, Store } from 'vuex/types/index'

export interface utilsClass {
  has: (key: string) => boolean
  get: (key: string) => any
  set: (key: string, value: any) => void
  del: (key: string) => void
}

export interface Options {
  keys: string
  mode: string
}

export interface OptionsGroup {
  mode: string
  stateKey: string
  mutationsKey: string
}

export type Config = Options & OptionsGroup[]
