"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqualJsonDate = exports.extractTime = exports.extractDate = exports.numberToTime = exports.JsonDateToIsoString = exports.jsonDateTimeToSql = exports.sqlToJsonDateTime = exports.isValidDate = exports.sqlToyyyymmdd = exports.fromYYYYMMDDtoSql = exports.fromYYYYMMDDToJsonDate = exports.fromDateToJsonDT = exports.yyyymmdd = void 0;
const helpers_1 = require("./helpers");
const lodash_clonedeep_1 = __importDefault(require("lodash.clonedeep"));
const lodash_isequal_1 = __importDefault(require("lodash.isequal"));
const __1 = require("..");
function yyyymmdd(d) {
    const localD = d ? lodash_clonedeep_1.default(d) : new Date();
    const ar = helpers_1.makeGMTtoLocalDate(localD);
    return helpers_1.dateArrayToYYYMMDD(ar);
}
exports.yyyymmdd = yyyymmdd;
/**
 *  Μετατρέπει την ημερομηνία - ώρα σε αντικείμενο JsonDateTime,
 *  Αν δε δωθεί ημερομηνία, τότε υπολογίζει την τρέχουσα ημερομηνία
 * @param d Η ημερομηνία που θα μετατραπεί (σε μορφή Date)
 */
exports.fromDateToJsonDT = (d) => {
    const localDate = d ? new Date(d.getTime()) : new Date;
    const dateArray = helpers_1.makeGMTtoLocalDate(localDate);
    const year = dateArray[0] !== undefined ? dateArray[0] : 0;
    const month = dateArray[1] !== undefined ? dateArray[1] : 0;
    const day = dateArray[2] !== undefined ? dateArray[2] : 0;
    const hour = dateArray[3] !== undefined ? dateArray[3] : 0;
    const mins = dateArray[4] !== undefined ? dateArray[4] : 0;
    const sec = dateArray[5] !== undefined ? dateArray[5] : 0;
    const mil = dateArray[6] !== undefined ? dateArray[6] : 0;
    return {
        year,
        month,
        day,
        hour,
        mins,
        sec,
        mil,
    };
};
exports.fromYYYYMMDDToJsonDate = (s) => {
    if (s !== undefined && s.length === 8) {
        const year = Number(s.substr(0, 4));
        const month = Number(s.substr(4, 2));
        const day = Number(s.substr(6, 2));
        return { year, month, day, hour: 0, mins: 0, sec: 0, mil: 0 };
    }
    else {
        throw new Error(`${s} is not a valid date`);
    }
};
exports.fromYYYYMMDDtoSql = (d) => {
    const a = d.toString();
    return `${a.substr(0, 4)}-${a.substr(4, 2)}-${a.substr(6, 2)}`;
};
exports.sqlToyyyymmdd = (s) => {
    const sqlArray = helpers_1.splitDates(s);
    let retVal = '';
    for (let i = 0; i < 3; i++) {
        retVal += sqlArray[i].toString().padStart(2, '0');
    }
    return retVal;
};
/**
 *
 * @param d must be in format yyyymmdd
 */
exports.isValidDate = (d) => {
    const ar = helpers_1.splitYYYYMMDDDate(d);
    if (ar.length === 3) {
        if (ar[0] !== 0 && ar[1] > 0 && ar[1] <= 12 && ar[2] > 0 && ar[2] <= 31) {
            return true;
        }
    }
    return false;
};
exports.sqlToJsonDateTime = (s) => {
    const dateArray = helpers_1.splitDates(s);
    const year = dateArray[0] !== undefined ? dateArray[0] : 0;
    const month = dateArray[1] !== undefined ? dateArray[1] : 0;
    const day = dateArray[2] !== undefined ? dateArray[2] : 0;
    const hour = dateArray[3] !== undefined ? dateArray[3] : 0;
    const mins = dateArray[4] !== undefined ? dateArray[4] : 0;
    const sec = dateArray[5] !== undefined ? dateArray[5] : 0;
    const mil = dateArray[6] !== undefined ? dateArray[6] : 0;
    return {
        year,
        month,
        day,
        hour,
        mins,
        sec,
        mil,
    };
};
exports.jsonDateTimeToSql = (d) => {
    return JsonDateToIsoString(d).substr(0, 19);
};
function JsonDateToIsoString(d) {
    const dtOptions = {
        time: true,
        date: true,
        secs: true,
        mils: true
    };
    let retVal = `${d.year.toString().padStart(4, '0')}-${d.month.toString().padStart(2, '0')}-${d.day.toString().padStart(2, '0')}`;
    retVal += helpers_1.constructTimePart(dtOptions, d);
    return retVal;
}
exports.JsonDateToIsoString = JsonDateToIsoString;
exports.numberToTime = (s, showMilliseconds = false) => {
    if (s === undefined || s === 0) {
        return "00:00:00";
    }
    let retVal = "";
    const hours = Math.floor(s / 3600);
    s = s - 3600 * hours;
    const mins = Math.floor(s / 60);
    s = s - 60 * mins;
    const secs = Math.floor(s);
    retVal = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    if (showMilliseconds) {
        const st = (s - secs).toString();
        const ar = st.split('.');
        const mils = ar[1] ? ar[1] : '0';
        retVal += `.${mils.padEnd(3, '0')}`;
    }
    return retVal;
};
exports.extractDate = (s) => {
    if (!__1.checkObject(s))
        throw new Error(`${s} is not a valid date`);
    return { year: s.year, month: s.month, day: s.day };
};
exports.extractTime = (s) => {
    if (!__1.checkObject(s))
        throw new Error(`${s} is not a valid date`);
    return { hour: s.hour, mins: s.mins, sec: s.sec, mil: s.mil };
};
exports.isEqualJsonDate = (a, b, checkTime = false) => {
    if (!__1.checkObject(a) || !__1.checkObject(b)) {
        throw new Error('Δεν είναι αντικείμενα JsonDate(Time)');
    }
    if (checkTime === undefined) {
        checkTime = false;
    }
    if (checkTime) {
        return lodash_isequal_1.default(a, b);
    }
    else {
        return lodash_isequal_1.default(exports.extractDate(a), exports.extractDate(b));
    }
};
//# sourceMappingURL=index.js.map