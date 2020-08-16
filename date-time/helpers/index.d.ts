/**
 * Convert a date to an array. take care the time difference from GMT
 * @param d
 */
export declare function makeGMTtoLocalDate(d: Date): Array<number>;
export declare const dateArrayToYYYMMDD: (ar: Array<number>) => string;
export declare const splitDates: (d: string) => Array<number>;
