export { Vue, VueConstructor } from 'vue/types/vue';
export { Plugin as VuexPlugin, Store } from 'vuex/types/index';
export interface utilsClass {
    has: (key: string) => boolean;
    get: (key: string) => any;
    set: (key: string, value: any) => void;
    del: (key: string) => void;
}
export interface Options {
    keys?: string | string[];
    mode?: string;
    stateKey?: string[];
    mutationsKey?: string[];
}
