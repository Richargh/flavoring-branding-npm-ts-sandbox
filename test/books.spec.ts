import { expect } from 'earljs';
import {aBookId} from "../src/book-id";
import {containsBook} from "../src/books";

describe('Books', function () {
    it('generic string is allowed', () => {
        // GIVEN
        const genericId = "1";
        // WHEN
        const result = containsBook(genericId);
        // THEN
        expect(result).toEqual(true);
    })

    it('bookId is allowed', () => {
        // GIVEN; compile will fail for anUserId() because types do not match
        const bookId = aBookId();
        // WHEN
        const result = containsBook(bookId);
        // THEN
        expect(result).toEqual(true);
    })

});