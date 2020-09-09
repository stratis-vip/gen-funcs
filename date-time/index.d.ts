import { JsonDateTime, JsonDate, DateTimeShowOptions, JsonTime } from "api-general-classes";
/** μετατρέπει το αντικείμενο Date σε ημερομηνία με την μορφή ΕΕΕΕΜΜΗΗ
 * Αν δεν δοθεί ημερομηνία δημιουργεί μια με την τρέχουσα ώρα - ημέρα*/
export declare function yyyymmdd(d?: Date): string;
/** μετατρέπει την ημερομηνία της μορφής ΕΕΕΕΜΜΗΗ σε αντικείμενο JsonDateTime.
 * Ta πεδία της ώρας είναι μηδενικά*/
export declare const fromYYYYMMDDToJsonDate: (s: string) => JsonDateTime;
export declare const fromYYYYMMDDtoSql: (d: string) => string;
export declare const sqlToyyyymmdd: (sql: string) => string;
/**
 *
 * @param d must be in format yyyymmdd
 */
export declare const isValidDate: (d: string) => boolean;
export declare const sqlToJsonDateTime: (s: string) => JsonDateTime;
/**
 *  Μετατρέπει την ημερομηνία - ώρα σε αντικείμενο JsonDateTime,
 *  Αν δε δωθεί ημερομηνία, τότε υπολογίζει την τρέχουσα ημερομηνία
 * @param d Η ημερομηνία που θα μετατραπεί (σε μορφή Date)
 */
export declare const fromDateToJsonDT: (d?: Date | undefined) => JsonDateTime;
export declare const jsonDateTimeToSql: (d: JsonDateTime) => string;
export declare function JsonDateToString(d: JsonDateTime, dtOptions: DateTimeShowOptions): string;
export declare function JsonDateToString(d: JsonDate, dtOptions: DateTimeShowOptions): string;
export declare function JsonDateToIsoString(d: JsonDateTime): string;
export declare function JsonDateToIsoString(d: JsonDate): string;
export declare const numberToTime: (s: number, showMilliseconds?: boolean) => string;
export declare const extractDate: (s: JsonDateTime) => JsonDate;
export declare const extractTime: (s: JsonDateTime) => JsonTime;
export declare const isEqualJsonDate: (a: JsonDateTime, b: JsonDateTime, checkTime?: boolean) => boolean;
export declare const getYearToTwodigits: (value: number) => number;
