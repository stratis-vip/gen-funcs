"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbg = exports.error = exports.info = exports.makeObject = exports.makeInfo = exports.dbgFactory = exports.identify = exports.isEmptyObject = exports.checkObject = void 0;
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
exports.identify = (what) => {
    switch (typeof what) {
        case 'string': return 'string';
        case 'number': return 'number';
        case 'object': {
            if (what === null)
                return 'null';
            if (what === undefined)
                return 'undefined';
            if (what instanceof Array) {
                return 'array';
            }
        }
        default: return typeof what;
    }
};
exports.dbgFactory = (title, msg, options) => {
    if (process.env.NODE_ENV !== 'production') {
        return constructDebug(title, msg, options);
    }
};
const constructDebug = (title, value, options) => {
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
    const FgYellow = "\x1b[33m";
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
    const { date, color, showType, json, showFileName } = options;
    const info = exports.makeInfo(title, { date, color, showFileName }); //`${FgGreen}DEBUG INFO ${new Date().toLocaleTimeString()}: `
    const objectType = exports.makeObject(value, { showType, json }); //`${Reset}${Bright}(${(typeof value).toUpperCase()})${Reset}`
    return info + objectType;
};
exports.makeInfo = (title, options) => {
    const { date, color, showFileName } = options;
    const dateString = (date ? new Date(date) : new Date()).toLocaleTimeString('el-GR', { hour12: false });
    const colorString = color ? color : '[32m';
    const fileString = showFileName ? `@${__filename}` : '';
    return `${colorString}${title}${fileString}> ${dateString} - `;
};
exports.makeObject = (obj, options) => {
    const Reset = "[0m";
    const Bright = "[1m";
    const { showType, json } = options;
    const objType = showType ? `(${exports.identify(obj).toUpperCase()}): ` : '';
    const objString = json ? JSON.stringify(obj) : `${obj}`;
    return `${Reset}${Bright}${objType}${objString}${Reset}`;
};
exports.info = (message, showFileName = false) => {
    console.log(exports.dbgFactory('INFO', message, { showFileName }));
};
exports.error = (errorMessage) => {
    const FgRed = "\x1b[31m";
    console.log(exports.dbgFactory('ERROR', errorMessage, { showFileName: true, color: FgRed }));
};
exports.dbg = (value, json = true, showFileName = false) => {
    const FgCyan = "\x1b[36m";
    console.log(exports.dbgFactory('DEBUG', value, { color: FgCyan, showType: true, showFileName, json }));
};
//# sourceMappingURL=index.js.map