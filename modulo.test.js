import {expect, describe, test} from '@jest/globals';
import { modulo } from './modulo'

describe('modulo functions', () => {
    test('1 % 2 equal 1', () => {
        expect(modulo(1, 2)).toBe(1);
    });
    test('2 % 1 equal 0', () => {
        expect(modulo(2, 1)).toBe(0);
    });
    test('2 % 2 equal 0', () => {
        expect(modulo(2, 2)).toBe(0);
    });
    test('2 % 3 equal 2', () => {
        expect(modulo(2, 3)).toBe(2);
    });
    test('3 % 2 equal 1', () => {
        expect(modulo(3, 2)).toBe(1);
    });
    test('3 % 3 equal 0', () => {
        expect(modulo(3, 3)).toBe(0);
    });
});