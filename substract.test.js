import {expect, describe, test} from '@jest/globals';
import { Substract } from './substract'

describe('sum functions', () => {
  test('1 - 2 equal -1', () => {
    expect(Substract(1, 2)).toBe(-1);
  });
});