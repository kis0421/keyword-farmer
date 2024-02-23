import { keywords } from './assets/ko/keywords'

const useKeywordFarm = () => {
  const create: () => string = () => {
    return keywords[Math.floor(Math.random() * keywords.length)]
  }
  return { create }
}

export { useKeywordFarm }
