export function debounce(
  f: (...args: Array<any>) => void,
  delay: number,
): (...args: Array<any>) => void {
  let t: ReturnType<typeof setTimeout> | undefined = undefined
  return (...args: Array<any>) => {
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
