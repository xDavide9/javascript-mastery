import add from "./../../src/math"; 

test("can add numbers", () => {
    // given
    const a = 1;
    const b = 1;
    const expected = 2;

    // when
    const actual = add(a, b);

    // then
    expect(actual).toBe(expected);
});