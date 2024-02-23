import { keywords } from './assets/ko/keywords'

const useKeywordFarm = () => {
  const create = () => {
    return keywords[Math.floor(Math.random() * keywords.length)]
  }
  return { create }
}

const { create } = useKeywordFarm();

export { useKeywordFarm }
