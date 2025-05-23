import {expect, describe, test} from '@jest/globals';
import {Pow} from './pow.js';

describe('Testing Pow function',() => {
    test('2^3 to be equal 8', () => {
        expect(Pow(2,3)).toBe(8);
    });
})