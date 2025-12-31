import { useMediaQuery } from './use-media-query'

export const useIsLargeScreen = () => {
  return useMediaQuery('(min-width: 64rem)')
}
