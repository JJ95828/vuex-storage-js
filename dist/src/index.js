"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
function createLocaStoragePlugin(options) {
    var _a = options.keys, keys = _a === void 0 ? '__storage_js__' : _a, _b = options.mode, mode = _b === void 0 ? 'localStorage' : _b, _c = options.stateKey, stateKey = _c === void 0 ? [] : _c, _d = options.mutationsKey, mutationsKey = _d === void 0 ? [] : _d;
    var _mode;
    if (mode === 'localStorage') {
        _mode = utils_1.localStorage;
    }
    if (mode === 'sessionStorage') {
        _mode = utils_1.sessionStorage;
    }
    return function (store) {
        if (typeof keys === 'string') {
            if (_mode.has(keys)) {
                store.replaceState(_mode.get(keys));
            }
            store.subscribe(function (mutation, state) {
                _mode.set(keys, store.state);
            });
        }
    };
}
exports.default = createLocaStoragePlugin;
//# sourceMappingURL=index.js.map