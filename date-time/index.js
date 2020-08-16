"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqlToyyyymmdd = exports.fromYYYYMMDDtoSql = exports.fromYYYYMMDDToJsonDate = exports.fromDateToJsonDate = exports.yyyymmdd = void 0;
const helpers_1 = require("./helpers");
function yyyymmdd(d) {
    if (d === undefined) {
        d = new Date();
    }
    const ar = helpers_1.makeGMTtoLocalDate(d);
    return helpers_1.dateArrayToYYYMMDD(ar);
}
exports.yyyymmdd = yyyymmdd;
exports.fromDateToJsonDate = (d) => {
    return exports.fromYYYYMMDDToJsonDate(yyyymmdd(d));
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
    return s.split("-").join("");
};
//# sourceMappingURL=index.js.map