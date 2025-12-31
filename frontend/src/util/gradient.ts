export const generateLinearOpacityGradientWithStepFn = (
  color: string,
  steps: number,
  stepFunction: (pos: number) => number,
  normalizeTo: [number, number] = [0, 1],
) => {
  let maxY = normalizeTo[0]
  let minY = normalizeTo[1]
  const values = Array.from({ length: steps + 1 }).map((_, x) => {
    const y = stepFunction(x / steps)
    if (!Number.isFinite(y)) {
      throw new Error('stepFunction returned infinity or -infinity')
    }
    if (y > maxY) maxY = y
    if (y < minY) minY = y
    return y
  })

  const oldMin = minY
  const oldMax = maxY
  const normMin = normalizeTo[0]
  const normMax = normalizeTo[1]

  const normalized = values.map((y) => {
    if (oldMax - oldMin === 0) return normMin
    return normMin + ((y - oldMin) * (normMax - normMin)) / (oldMax - oldMin)
  })

  const contents = normalized.map((y, i) => {
    const percent = Math.round((i / steps) * 100)
    const val = +(y * 100).toFixed(1)
    return `color-mix(in srgb, ${color} ${val}%, transparent) ${percent}%`
  })

  return `linear-gradient(${contents.join(',')})`
}
