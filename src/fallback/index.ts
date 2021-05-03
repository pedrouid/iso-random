import { fallbackRandomBytes } from '../shared';

export function randomBytes(length: number): Uint8Array {
  return fallbackRandomBytes(length);
}
