import { useMediaQuery } from "./use-media-query"

export const useIsLargeScreen = () => {
	return useMediaQuery('width >= 64rem')
}