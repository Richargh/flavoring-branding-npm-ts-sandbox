import {expect} from "earljs";
import {asOnlyDate, isOnlyDate} from "../src/date-only";

describe('OnlyDate Type Checking', function () {
    it('correct date is an Onlydate', () => {
        expect(isOnlyDate('2022-01-01')).toEqual(true);
    });

    it('correct date can be cast', () => {
        // should not fail
        asOnlyDate('2022-01-01');
    });

    it('wrong date is not an Onlydate', () => {
        expect(isOnlyDate('1-1-1')).toEqual(false);
    });

    it('wrong date cannot be cast', () => {
        expect(() => asOnlyDate('1-1-1')).toThrow()
    });

});