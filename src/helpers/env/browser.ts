import { fallbackRandomBytes } from './fallback';

export function getBrowerCrypto(): Crypto {
  // @ts-ignore
  return global?.crypto || global?.msCrypto || {};
}

export function getSubtleCrypto(): SubtleCrypto {
  const browserCrypto = getBrowerCrypto();
  // @ts-ignore
  return browserCrypto.subtle || browserCrypto.webkitSubtle;
}

export function browserRandomBytes(length: number): Uint8Array {
  const browserCrypto = getBrowerCrypto();
  if (typeof browserCrypto.getRandomValues !== 'undefined') {
    return browserCrypto.getRandomValues(new Uint8Array(length));
  }
  return fallbackRandomBytes(length);
}
