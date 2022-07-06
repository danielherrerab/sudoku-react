import shuffle from ".";

describe('shuffle', () => {
  it('return an array eith de same leght after being shuffle', () => {
    const array = [1, 2, 3];
    shuffle(array);
    expect(array).toHaveLength(3);
  });

  it('return an arrat with the same elements adters being shuffled', () => {
    const array = [1, 2, 3];
    shuffle(array);
    console.log(array);
    expect(array).toContain(1);
    expect(array).toContain(2);
    expect(array).toContain(3);
  });
})
