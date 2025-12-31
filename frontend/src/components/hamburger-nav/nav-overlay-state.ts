import { setAtomField } from '@/util/jotai'
import { atom, useAtom } from 'jotai'
import { Dialog } from '@base-ui/react/dialog'

const _navOverlayAtom = atom({
  isOverlayOpen: false,
  isOverlayVisible: false,
  animationDelay: 300,
})

export const navOverlayAtom = atom(
  (get) => get(_navOverlayAtom),
  (
    get,
    set,
    { open }: { open: boolean },
  ) => {
    if (open) {
      setAtomField(set, _navOverlayAtom, { isOverlayOpen: true })
      setTimeout(() => {
        setAtomField(set, _navOverlayAtom, { isOverlayVisible: true })
      }, 0)
    } else {
      const animationDelay = get(_navOverlayAtom).animationDelay
      setAtomField(set, _navOverlayAtom, { isOverlayVisible: false })
      setTimeout(() => {
        setAtomField(set, _navOverlayAtom, { isOverlayOpen: false })
      }, animationDelay)
    }
  },
)

export const navOverlayDialogHandle = Dialog.createHandle()
