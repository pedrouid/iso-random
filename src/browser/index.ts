import * as env from '@pedrouid/environment';

import { fallbackRandomBytes } from '../shared';

export function randomBytes(length: number): Uint8Array {
  const browserCrypto = env.getBrowerCrypto();
  if (typeof browserCrypto.getRandomValues !== 'undefined') {
    return browserCrypto.getRandomValues(new Uint8Array(length));
  }
  return fallbackRandomBytes(length);
}
