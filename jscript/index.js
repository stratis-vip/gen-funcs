"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbg = exports.isEmptyObject = exports.checkObject = void 0;
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
exports.dbg = (msg) => {
    if (process.env.NODE_ENG !== 'production') {
        if (msg === undefined) {
            return constructDebug(msg);
        }
        if (exports.checkObject(msg)) {
            return constructDebug(msg, `\n${JSON.stringify(msg, null, 2)}`);
        }
        else {
            if (msg === null) {
                return constructDebug(msg, `null`);
            }
        }
        switch (typeof msg) {
            case 'boolean': return constructDebug(msg, (msg ? 'TRUE' : 'FALSE'));
            default: return constructDebug(msg);
        }
    }
};
const constructDebug = (value, messageOverride) => {
    const Reset = "\x1b[0m";
    const Bright = "\x1b[1m";
    // const Dim = "\x1b[2m"
    // const Underscore = "\x1b[4m"
    // const Blink = "\x1b[5m"
    // const Reverse = "\x1b[7m"
    // const Hidden = "\x1b[8m"
    //
    // const FgBlack = "\x1b[30m"
    // const FgRed = "\x1b[31m"
    const FgGreen = "\x1b[32m";
    // const FgYellow = "\x1b[33m"
    // const FgBlue = "\x1b[34m"
    // const FgMagenta = "\x1b[35m"
    // const FgCyan = "\x1b[36m"
    // const FgWhite = "\x1b[37m"
    //
    // const BgBlack = "\x1b[40m"
    // const BgRed = "\x1b[41m"
    // const BgGreen = "\x1b[42m"
    // const BgYellow = "\x1b[43m"
    // const BgBlue = "\x1b[44m"
    // const BgMagenta = "\x1b[45m"
    // const BgCyan = "\x1b[46m"
    // const BgWhite = "\x1b[47m"
    const info = `${FgGreen}DEBUG INFO ${new Date().toLocaleTimeString()}: `;
    const objectType = `${Reset}${Bright}(${(typeof value).toUpperCase()})${Reset}\t`;
    const msg = messageOverride ? messageOverride : value ? String(value) : '';
    return console.log(info + objectType + msg);
};
//# sourceMappingURL=index.js.map