"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.last = exports.first = exports.tl = exports.hd = exports.addArrays = void 0;
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
function hd(a) {
    if (!a)
        throw new TypeError;
    if (a.length === 0)
        throw new TypeError('variable is empty');
    const [h, ..._] = a;
    if (typeof a === 'string') {
        return h;
    }
    return h;
}
exports.hd = hd;
function tl(a) {
    if (!a)
        throw new TypeError;
    if (a.length === 0)
        throw new TypeError('variable is empty');
    const [_, ...t] = a;
    if (typeof a === 'string') {
        return t.join('');
    }
    return t;
}
exports.tl = tl;
function first(a) {
    if (!a)
        throw new TypeError;
    if (a.length === 0)
        throw new TypeError('variable is empty');
    return [hd(a)];
}
exports.first = first;
function last(a) {
    if (!a)
        throw new TypeError;
    if (a.length === 0)
        throw new TypeError('variable is empty');
    return [[...a].pop()];
}
exports.last = last;
//# sourceMappingURL=index.js.map