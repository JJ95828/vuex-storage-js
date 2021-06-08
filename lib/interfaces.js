(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "vue/types/vue", "vuex/types/index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Store = exports.Vue = void 0;
    var vue_1 = require("vue/types/vue");
    Object.defineProperty(exports, "Vue", { enumerable: true, get: function () { return vue_1.Vue; } });
    var index_1 = require("vuex/types/index");
    Object.defineProperty(exports, "Store", { enumerable: true, get: function () { return index_1.Store; } });
});
//# sourceMappingURL=interfaces.js.map