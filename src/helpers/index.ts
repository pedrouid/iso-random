import crypto from 'crypto';
import randomBytes from 'randombytes';
import * as env from '@pedrouid/environment';
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

export function browserRandomBytes(length: number): Uint8Array {
  const browserCrypto = env.getBrowerCrypto();
  if (typeof browserCrypto.getRandomValues !== 'undefined') {
    return browserCrypto.getRandomValues(new Uint8Array(length));
  }
  return fallbackRandomBytes(length);
}

export function isValidKeyLength(length: number) {
  return !(length <= 0 || length > 1024 || parseInt(String(length)) !== length);
}
