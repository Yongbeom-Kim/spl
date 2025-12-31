import { SetStateAction } from 'jotai'

type JotaiSetter = <T>(atom: any, update: SetStateAction<T>) => void

export const setAtomField = <T>(
  set: JotaiSetter,
  atom: any,
  partial: Partial<T>,
): void => {
  set(atom, (prev: T) => ({ ...prev, ...partial }))
}
