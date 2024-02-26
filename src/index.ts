import { keywords } from './assets/ko/keywords'

interface Option {
  loop?: boolean,
  keywordLength?: number | { min?: number, max?: number },
  excludeSpaces?: boolean,
}
const useKeywordFarm = (option?: Option) => {
  const currentKeyword = option ? keywords.filter((keyword) => {
    return option.keywordLength !== undefined ?
      typeof option.keywordLength === 'object' ?
        keyword.length >= (option.keywordLength?.min || 1) && keyword.length <= (option.keywordLength.max || Infinity)
        : option.keywordLength === keyword.length
      : true
  }) : keywords
  const create = () => {
    return currentKeyword[Math.floor(Math.random() * currentKeyword.length)]
  }
  return { create }
}


export { useKeywordFarm }
