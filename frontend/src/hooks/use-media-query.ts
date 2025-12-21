import { useEffect, useState } from "react"

export const useMediaQuery = (query: string) => {
	const [result, setResult] = useState<boolean | null>(() => {
		if (typeof window === 'undefined') {
			return null;
		}
		return window.matchMedia(query).matches
	})

	useEffect(() => {
		const match = window.matchMedia(query)
		const onMatchChange = (evt: MediaQueryListEvent) => {
			setResult(evt.matches)
		}
		match.addEventListener('change', onMatchChange)

		return () => {
			match.removeEventListener('change', onMatchChange)
		}
	}, [query])


	return result;
}