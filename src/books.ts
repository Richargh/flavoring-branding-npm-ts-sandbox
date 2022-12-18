import {BookId} from "src/book-id";
import {OnlyDate} from "src/date-only";

export function containsBookId(id: BookId): boolean {
    // contains all books
    return true;
}

export function containsBookAt(date: OnlyDate): boolean {
    // contains all dates
    return true;
}