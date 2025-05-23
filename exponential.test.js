import {expect, describe, test} from '@jest/globals';
import {Exponential} from './exponential.js';

describe('Testing Exponential function',() => {
    test('exp(2) to be equal 7.3891', () => {
        expect(Exponential(2)).toBe(7.3891);
    });
})