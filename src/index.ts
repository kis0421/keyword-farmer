import { keywords } from './assets/ko/keywords';

interface Option {
  loop?: boolean
  keywordLength?: number | { min?: number, max?: number }
  excludeSpaces?: boolean
}
const useKeywordFarm = (option?: Option) => {
  const currentKeyword = option === undefined
    ? keywords
    : keywords.reduce<string[]>((previous, current) => {
      let targetKeyword = '';

      // option.keywordLength case
      if (option.keywordLength !== undefined) {
        if (typeof option.keywordLength === 'object') {
          if ((current.length >= (option.keywordLength?.min ?? 1)) && (current.length <= (option.keywordLength.max ?? Infinity))) {
            targetKeyword = current;
          }
        } else if (typeof option.keywordLength === 'number') {
          if (current.length === option.keywordLength) {
            targetKeyword = current;
          }
        } else {
          // TODO: error
        }
      } else {
        targetKeyword = current;
      }

      // option.excludeSpaces case
      if (option.excludeSpaces ?? false) {
        current = current.replaceAll(' ', '');
      }

      previous.push(targetKeyword);
      return previous;
    }, []);

  const create = (count?: number) => {
    return count !== undefined
      ? new Array(count)
        .fill(false)
        .map(() => currentKeyword[Math.floor(Math.random() * currentKeyword.length)])
      : currentKeyword[Math.floor(Math.random() * currentKeyword.length)];
  };
  return { create };
};

export { useKeywordFarm };
