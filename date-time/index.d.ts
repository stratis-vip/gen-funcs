import { JsonDateTime } from 'api-general-classes';
export declare function yyyymmdd(d?: Date): string;
export declare const fromDateToJsonDate: (d: Date) => JsonDateTime;
export declare const fromYYYYMMDDToJsonDate: (s: string) => JsonDateTime;
export declare const fromYYYYMMDDtoSql: (d: string) => string;
export declare const sqlToyyyymmdd: (s: string) => string;
