import {expect, describe, test} from '@jest/globals';
import { Modulo } from './modulo'

describe('modulo functions', () => {
    test('1 % 2 equal 1', () => {
        expect(Modulo(1, 2)).toBe(1);
    });
    test('2 % 1 equal 0', () => {
        expect(Modulo(2, 1)).toBe(0);
    });
    test('2 % 2 equal 0', () => {
        expect(Modulo(2, 2)).toBe(0);
    });
    test('2 % 3 equal 2', () => {
        expect(Modulo(2, 3)).toBe(2);
    });
    test('3 % 2 equal 1', () => {
        expect(Modulo(3, 2)).toBe(1);
    });
    test('3 % 3 equal 0', () => {
        expect(Modulo(3, 3)).toBe(0);
    });
});