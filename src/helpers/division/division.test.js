import { division } from "./division";

describe('division', function () {
    test('positive', () => {
        expect(division(10, 2)).toBe(5);
    })

    test('negative', () => {
        expect(division(-15, -3)).toBe(5);
    })
});
