import { expect } from 'earljs';
import {aBookId} from "../src/book-id";
import {containsBookAt, containsBookId} from "../src/books";
import {asOnlyDate, OnlyDate} from "../src/date-only";

describe('Brand', function () {
    it('only date is allowed', () => {
        // GIVEN; compile will fail for anUserId()/aBookId() because types do not match, but also for generic string
        const date: OnlyDate = asOnlyDate('2022-02-02');
        // WHEN
        const result = containsBookAt(date);
        // THEN
        expect(result).toEqual(true);
    });
});

describe('Flavor', function () {
    it('generic string is allowed', () => {
        // GIVEN
        const genericId = "1";
        // WHEN
        const result = containsBookId(genericId);
        // THEN
        expect(result).toEqual(true);
    })

    it('bookId is allowed', () => {
        // GIVEN; compile will fail for anUserId() because types do not match
        const bookId = aBookId();
        // WHEN
        const result = containsBookId(bookId);
        // THEN
        expect(result).toEqual(true);
    })
});