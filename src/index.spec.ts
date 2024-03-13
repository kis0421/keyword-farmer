import { useKeywordFarm } from './index';

describe('test useKeywordFarm', () => {
  test('return value of useKeywordFarm is valid', () => {
    const { create, keywords } = useKeywordFarm();
    expect(typeof create).toBe('function');
    expect(Array.isArray(keywords)).toBe(true);
  });
});
