import matchesSubstringIgnoreCaseAndAccents from '../../src/index';

/**
 * Tests example
 */

describe('function matchesSubstringIgnoreCaseAndAccents', () => {
  test('should find a matching substring', () => {
    const matchingSubstring = matchesSubstringIgnoreCaseAndAccents(
      'Telluria',
      'tell',
    );

    expect(matchingSubstring).toBeTruthy();
  });

  test('should not find a matching substring', () => {
    const matchingSubstring = matchesSubstringIgnoreCaseAndAccents(
      'Telluria',
      'topsys',
    );

    expect(matchingSubstring).toBeFalsy();
  });
});
