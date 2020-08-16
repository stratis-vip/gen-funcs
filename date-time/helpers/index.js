"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitDates = exports.dateArrayToYYYMMDD = exports.makeGMTtoLocalDate = void 0;
/**
 * Convert a date to an array. take care the time difference from GMT
 * @param d
 */
function makeGMTtoLocalDate(d) {
    const offset = d.getTimezoneOffset();
    d.setMinutes(d.getMinutes() - offset);
    return exports.splitDates(d.toISOString());
}
exports.makeGMTtoLocalDate = makeGMTtoLocalDate;
exports.dateArrayToYYYMMDD = (ar) => {
    return `${ar[0].toString().padStart(4, "0")}${ar[1]
        .toString()
        .padStart(2, "0")}${ar[2].toString().padStart(2, "0")}`;
};
exports.splitDates = (d) => {
    if (d === undefined || d.length === 0)
        return [];
    const ar = d.split(/[TZ:.\s*\/\t*-]/g);
    return ar.filter(a => a !== '').map((n) => Number(n));
};
//# sourceMappingURL=index.js.map