/**
 * check if the value is an object
 * @param value object to check
 */
export declare const checkObject: (value: any) => boolean;
export declare const isEmptyObject: (obj: any) => boolean;
export declare const identify: (what: any) => string;
export interface DebugOptions {
    date?: string;
    color?: string;
    showType?: boolean;
    json?: boolean;
    showFileName?: boolean;
}
export declare const dbgFactory: (title: string, msg: any, options: DebugOptions) => string | undefined;
export declare const makeInfo: (title: string, options: DebugOptions) => string;
export declare const makeObject: (obj: any, options: DebugOptions) => string;
export declare const info: (message: string, showFileName?: boolean) => void;
export declare const error: (errorMessage: any) => void;
export declare const dbg: (value: any, json?: boolean, showFileName?: boolean) => void;
