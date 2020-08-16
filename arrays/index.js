"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addArrays = void 0;
const findNext = (item, idx, array) => {
    let it = item;
    if (array[idx])
        it += array[idx];
    return it;
};
const add2Arrays = (a, b) => {
    if (!a && !b)
        return [];
    if (!a)
        return b;
    if (!b)
        return a;
    if (a.length > b.length) {
        return a.map((item, idx) => findNext(item, idx, b));
    }
    else {
        return b.map((item, idx) => findNext(item, idx, a));
    }
};
exports.addArrays = (...args) => {
    let ret = add2Arrays(args[0], args[1]);
    for (let i = 2; i < args.length; i++) {
        ret = add2Arrays(ret, args[i]);
    }
    return ret;
};
//# sourceMappingURL=index.js.map