import { Crypto } from '@peculiar/webcrypto';

import * as helpers from '../src/helpers';

declare global {
  interface Window {
    msCrypto: Crypto;
  }
}

//  using msCrypto because Typescript was complaing read-only
window.msCrypto = new Crypto();

describe('Fallback', () => {
  describe('RandomBytes', () => {
    let length: number;
    let key: Uint8Array;

    beforeEach(async () => {
      length = 32;
      key = helpers.fallbackRandomBytes(length);
    });

    it('should generate random bytes sucessfully', async () => {
      expect(key).toBeTruthy();
    });

    it('should match request byte length', async () => {
      expect(key.length).toEqual(length);
    });
  });
});
