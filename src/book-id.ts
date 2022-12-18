import {Flavor} from "src/commons/flavor";

export type BookId = Flavor<string, 'BookId'>;

export function aBookId(): BookId {
    return "an id";
}