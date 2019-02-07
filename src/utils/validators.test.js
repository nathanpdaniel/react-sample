import { required, mustBeWholeNumber, mustBeGreaterThan, mustBeNumeric } from './validators';

describe('Validators tests', () => {
  describe('verify required', () => {
    
    it('valid value', () => {
      expect(required(12)).toBeUndefined();
    });
    
    it('invalid value', () => {
      expect(required()).toBe('Input required');
    });
  
  });

  describe('verify mustBeWholeNumber', () => {
    
    it('valid value', () => {
      expect(mustBeWholeNumber(12)).toBeUndefined();
    });
    
    it('invalid value', () => {
      expect(mustBeWholeNumber(1.23)).toBe('Value must be a whole number');
    });
  
  });

  describe('verify mustBeGreaterThan', () => {
    
    it('valid value', () => {
      expect(mustBeGreaterThan(2)(12)).toBeUndefined();
    });
    
    it('invalid value', () => {
      expect(mustBeGreaterThan(2)(1)).toBe('Value must be greater than 2');
    });
  
  });

  describe('verify mustBeNumeric', () => {
    
    it('valid value', () => {
      expect(mustBeNumeric(12)).toBeUndefined();
    });
    
    it('invalid value', () => {
      expect(mustBeNumeric('abc')).toBe('Value must be numeric');
    });
  
  });

});