import crypto from 'crypto';
import randomBytes from 'randombytes';
import { bufferToArray } from 'enc-utils';

export function nodeRandomBytes(length: number): Uint8Array {
  const buf = crypto.randomBytes(length);
  return bufferToArray(buf);
}

export function fallbackRandomBytes(length: number): Uint8Array {
  return randomBytes(length);
}

export function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

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

export function isBrowser(): boolean {
  return !!getBrowerCrypto() && !!getSubtleCrypto();
}

export function isNode(): boolean {
  return (
    typeof process !== 'undefined' &&
    typeof process.versions !== 'undefined' &&
    typeof process.versions.node !== 'undefined'
  );
}

export function isValidKeyLength(length: number) {
  return !(length <= 0 || length > 1024 || parseInt(String(length)) !== length);
}
