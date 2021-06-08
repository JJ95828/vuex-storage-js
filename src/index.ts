import { Config, Store, VuexPlugin, utilsClass } from './interfaces'
import { localStorage, sessionStorage } from './tool'
export default function vuexStorageJs(options: Config): VuexPlugin<object> {
  if (typeof options === 'object') {
    const opt = { keys: '__storage_js__', mode: 'localStorage', ...options }
    let _mode: utilsClass
    if (opt.mode === 'localStorage') {
      _mode = localStorage
    }
    if (opt.mode === 'sessionStorage') {
      _mode = sessionStorage
    }
    return (store: Store<object>) => {
      if (typeof opt.keys === 'string') {
        if (_mode.has(opt.keys)) {
          store.replaceState(_mode.get(opt.keys))
        }
        store.subscribe((mutation, state) => {
          _mode.set(opt.keys, store.state)
        })
      }
    }
  }
}
