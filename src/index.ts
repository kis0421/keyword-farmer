import { specialKeywords, ko, en } from './assets';

interface Config {
  lang?: 'en' | 'kr'
  length?: number | { min?: number, max?: number }
  excludeSpaces?: boolean
  specialKeywords?: 'only' | 'mixed' | 'combine'
}

const getRandomIndex = (arr: string[]) => Math.floor(Math.random() * arr.length);
const getRandomValue = (arr: string[]) => arr[getRandomIndex(arr)];
const useKeywordFarm = (option?: Config) => {
  const originKeywords = option?.lang === 'kr'
    ? ko
    : en;
  const currentKeyword = option === undefined
    ? originKeywords
    : option?.specialKeywords === 'only'
      ? specialKeywords
      : originKeywords.reduce<string[]>((previous, current) => {
        let targetKeyword = '';

        // option.length use case
        if (option.length !== undefined) {
          if (typeof option.length === 'object' && (typeof option.length.min === 'number' || typeof option.length.max === 'number')) {
            if ((current.length >= (option.length?.min ?? 1)) && (current.length <= (option.length.max ?? Number.MAX_SAFE_INTEGER))) {
              targetKeyword = current;
            }
          } else if (typeof option.length === 'number') {
            if (current.length === option.length) {
              targetKeyword = current;
            }
          } else {
            throw new Error('invalid option.length type');
          }
        } else {
          targetKeyword = current;
        }

        // option.excludeSpaces case
        if (option.excludeSpaces ?? false) {
          targetKeyword = targetKeyword.replaceAll(' ', '');
        }

        if (option.specialKeywords === 'combine') {
          const chars = targetKeyword.split('');
          // TODO: use toSpliced()
          chars.splice(getRandomIndex(chars), 0, getRandomValue(specialKeywords));
          targetKeyword = chars.join('');
        }

        previous.push(targetKeyword);
        return previous;
      }, []);

  const keywords = option?.specialKeywords === 'mixed'
    ? [...currentKeyword, ...specialKeywords]
    : currentKeyword;

  const create = (count?: number) => {
    return count !== undefined
      ? new Array(count)
        .fill(false)
        .map(() => getRandomValue(keywords))
      : getRandomValue(keywords);
  };

  return { create, keywords };
};

export { useKeywordFarm };
