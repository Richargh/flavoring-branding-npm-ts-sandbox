import {Flavor} from "src/commons/flavor";

export type UserId = Flavor<string, 'UserId'>;

export function anUserId(): UserId {
    return "an id";
}