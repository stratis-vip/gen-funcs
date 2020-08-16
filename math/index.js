"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
exports.random = (max, isInt = true) => {
    if (max === 0)
        return 0;
    return isInt ? Math.floor(Math.random() * max) : Math.random() * max;
};
//# sourceMappingURL=index.js.map