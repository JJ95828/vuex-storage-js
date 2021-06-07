import { utilsClass } from './interfaces';
export default class utils implements utilsClass {
    private storage;
    constructor(storage: Storage);
    has(key: string): boolean;
    get(key: string): any;
    set(key: string, value: any): void;
    del(key: string): void;
}
export declare const localStorage: utils;
export declare const sessionStorage: utils;
