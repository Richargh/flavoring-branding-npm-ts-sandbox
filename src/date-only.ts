import {Brand} from "src/commons/brand";

export type OnlyDate = Brand<string, 'OnlyDate'>;

export function asOnlyDate(str: string): OnlyDate {
    if(!isOnlyDate(str))
        throw new Error("Not an OnlyDate");
    return str;
}

export function isOnlyDate(str: string): str is OnlyDate {
    return str.match(/^\d{4}-\d{2}-\d{2}$/) !== null;
}
