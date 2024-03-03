import keywords, { specialKeywords } from './assets/ko/keywords';

interface Option {
  loop?: boolean
  length?: number | { min?: number, max?: number }
  excludeSpaces?: boolean
  specialCrops?: 'only' | 'mixed' | 'combine'
}

const useKeywordFarm = (option?: Option) => {
  const currentKeyword = option === undefined
    ? keywords
    : option?.specialCrops === 'only'
      ? specialKeywords
      : keywords.reduce<string[]>((previous, current) => {
        let targetKeyword = '';

        // option.keywordLength case
        if (option.length !== undefined) {
          if (typeof option.length === 'object') {
            if ((current.length >= (option.length?.min ?? 1)) && (current.length <= (option.length.max ?? Infinity))) {
              targetKeyword = current;
            }
          } else if (typeof option.length === 'number') {
            if (current.length === option.length) {
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

  const totalKeywords: string[] = option?.specialCrops === 'mixed'
    ? [...currentKeyword, ...specialKeywords]
    : currentKeyword;

  const create = (count?: number) => {
    return count !== undefined
      ? new Array(count)
        .fill(false)
        .map(() => keywords[Math.floor(Math.random() * keywords.length)])
      : keywords[Math.floor(Math.random() * keywords.length)];
  };

  return { create, totalKeywords };
};

export { useKeywordFarm };
