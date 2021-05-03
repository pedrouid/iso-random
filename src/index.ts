import * as env from '@pedrouid/environment';

import {
  isValidKeyLength,
  browserRandomBytes,
  nodeRandomBytes,
  fallbackRandomBytes,
} from './helpers';

export function randomBytes(length: number): Uint8Array {
  if (!isValidKeyLength(length)) {
    throw new Error(`randomBytes - invalid key length: ${length}`);
  }
  let result;
  if (env.isBrowser()) {
    result = browserRandomBytes(length);
  } else if (env.isNode()) {
    result = nodeRandomBytes(length);
  } else {
    result = fallbackRandomBytes(length);
  }
  return result;
}

export default randomBytes;
