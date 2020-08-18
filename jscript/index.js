"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = exports.checkObject = void 0;
/**
 * check if the value is an object
 * @param value object to check
 */
exports.checkObject = (value) => {
    return value !== null && typeof value === "object";
};
exports.isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
};
//# sourceMappingURL=index.js.map