import { JsonDateTime, JsonDate, DateTimeShowOptions, JsonTime } from "api-general-classes";
export declare function yyyymmdd(d?: Date): string;
/**
 *  Μετατρέπει την ημερομηνία - ώρα σε αντικείμενο JsonDateTime,
 *  Αν δε δωθεί ημερομηνία, τότε υπολογίζει την τρέχουσα ημερομηνία
 * @param d Η ημερομηνία που θα μετατραπεί (σε μορφή Date)
 */
export declare const fromDateToJsonDT: (d?: Date | undefined) => JsonDateTime;
export declare const fromYYYYMMDDToJsonDate: (s: string) => JsonDateTime;
export declare const fromYYYYMMDDtoSql: (d: string) => string;
export declare const sqlToyyyymmdd: (s: string) => string;
/**
 *
 * @param d must be in format yyyymmdd
 */
export declare const isValidDate: (d: string) => boolean;
export declare const sqlToJsonDateTime: (s: string) => JsonDateTime;
export declare const jsonDateTimeToSql: (d: JsonDateTime) => string;
export declare function JsonDateToString(d: JsonDateTime, dtOptions: DateTimeShowOptions): string;
export declare function JsonDateToString(d: JsonDate, dtOptions: DateTimeShowOptions): string;
export declare function JsonDateToIsoString(d: JsonDateTime): string;
export declare function JsonDateToIsoString(d: JsonDate): string;
export declare const numberToTime: (s: number, showMilliseconds?: boolean) => string;
export declare const extractDate: (s: JsonDateTime) => JsonDate;
export declare const extractTime: (s: JsonDateTime) => JsonTime;
export declare const isEqualJsonDate: (a: JsonDateTime, b: JsonDateTime, checkTime?: boolean) => boolean;
