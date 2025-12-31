export function debounce(
  f: (...args: any[]) => void,
  delay: number,
): (...args: any[]) => void {
  let t: ReturnType<typeof setTimeout> | undefined = undefined
  return (...args: any[]) => {
    if (t !== undefined) {
      clearTimeout(t)
      t = undefined
    }
    t = setTimeout(() => {
      f(...args)
      t = undefined
    }, delay)
  }
}
