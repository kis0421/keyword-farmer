import { keywords } from './assets/ko/keywords'

interface Option {
  loop?: boolean,
  keywordLength?: number,
  excludeSpaces?: boolean,
}
const useKeywordFarm = (option?: Option) => {
  const currentKeyword = option ? keywords.filter((keyword) => {
    return option.keywordLength ? option.keywordLength === keyword.length : true
  }) : keywords
  const create = () => {
    return currentKeyword[Math.floor(Math.random() * currentKeyword.length)]
  }
  return { create }
}

const { create } = useKeywordFarm();

export { useKeywordFarm }
