import { JsonDateTime } from "api-general-classes";
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
