import * as isoRandom from '../src';

describe('RandomBytes', () => {
  let length: number;
  let key: Uint8Array;

  beforeEach(async () => {
    length = 32;
    key = isoRandom.randomBytes(length);
  });

  it('should generate random bytes sucessfully', async () => {
    expect(key).toBeTruthy();
  });

  it('should match request byte length', async () => {
    expect(key.length).toEqual(length);
  });
});
