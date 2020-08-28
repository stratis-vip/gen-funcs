"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTH = exports.constructTimePart = exports.splitDates = exports.splitYYYYMMDDDate = exports.dateArrayToYYYMMDD = exports.makeGMTtoLocalDate = void 0;
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
/**
 * Convert a date to an array. take care the time difference from GMT
 * @param d
 */
function makeGMTtoLocalDate(d) {
    const localD = lodash_clonedeep_1.default(d);
    const offset = localD.getTimezoneOffset();
    localD.setMinutes(localD.getMinutes() - offset);
    return exports.splitDates(localD.toISOString());
}
exports.makeGMTtoLocalDate = makeGMTtoLocalDate;
exports.dateArrayToYYYMMDD = (ar) => {
    return `${ar[0].toString().padStart(4, "0")}${ar[1]
        .toString()
        .padStart(2, "0")}${ar[2].toString().padStart(2, "0")}`;
};
exports.splitYYYYMMDDDate = (d) => {
    const ret = [];
    if (d && d.length === 8) {
        ret.push(Number(d.slice(0, 4)));
        ret.push(Number(d.slice(4, 6)));
        ret.push(Number(d.slice(6, 8)));
    }
    return ret;
};
exports.splitDates = (d) => {
    if (d === undefined || d.length === 0)
        return [];
    const ar = d.split(/[TZ:.\s*\/\t*-]/g);
    return ar.filter(a => a !== '').map((n) => Number(n));
};
exports.constructTimePart = (dtOptions, d) => {
    const { date, time, secs, mils } = dtOptions;
    let retVal = "";
    if (time) {
        if (date) {
            retVal += " ";
        }
        retVal += d.hour !== undefined ? d.hour.toString().padStart(2, '0') + ':' : ' 00:';
        retVal += d.mins !== undefined ? d.mins.toString().padStart(2, '0') : '00';
        if (secs) {
            retVal += ':';
            retVal += d.sec !== undefined ? d.sec.toString().padStart(2, '0') : '00';
            if (mils) {
                retVal += '.';
                retVal += d.mil !== undefined ? d.mil.toString().padStart(3, '0') : '000';
            }
        }
    }
    return retVal;
};
exports.removeTH = (value, ada) => {
    let c = value;
    // remove thousands
    c = c / ada;
    const ar = c.toString().split('.');
    if (ar.length === 2) {
        c = Number('0.' + ar[1]) * ada;
    }
    else {
        c = 0;
    }
    return c;
};
//# sourceMappingURL=index.js.map