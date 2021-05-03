import randomBytes from 'randombytes';

export function fallbackRandomBytes(length: number): Uint8Array {
  return randomBytes(length);
}
