import { Options, Store, VuexPlugin, utilsClass } from './interfaces'
import { localStorage, sessionStorage } from './utils'
export default function createLocaStoragePlugin(options: Options): VuexPlugin<object> {
  const { keys = '__storage_js__', mode = 'localStorage', stateKey = [], mutationsKey = [] } = options
  let _mode: utilsClass
  if (mode === 'localStorage') {
    _mode = localStorage
  }
  if (mode === 'sessionStorage') {
    _mode = sessionStorage
  }
  return (store: Store<object>) => {
    if (typeof keys === 'string') {
      if (_mode.has(keys)) {
        store.replaceState(_mode.get(keys))
      }
      store.subscribe((mutation, state) => {
        _mode.set(keys, store.state)
      })
    }
  }
}
