"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionStorage = exports.localStorage = void 0;
var utils = /** @class */ (function () {
    function utils(storage) {
        this.storage = storage;
    }
    utils.prototype.has = function (key) {
        console.log(this.storage.get(key));
        return !!this.storage.get(key);
    };
    utils.prototype.get = function (key) {
        return JSON.parse(this.storage.getItem(key));
    };
    utils.prototype.set = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    utils.prototype.del = function (key) {
        this.storage.removeItem(key);
    };
    return utils;
}());
exports.default = utils;
exports.localStorage = new utils(window.localStorage);
exports.sessionStorage = new utils(window.sessionStorage);
//# sourceMappingURL=utils.js.map