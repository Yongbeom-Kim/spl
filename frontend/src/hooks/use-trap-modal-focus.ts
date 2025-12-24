import { RefObject, useEffect, useRef } from 'react'
import { FocusableElement, tabbable } from 'tabbable'

type UseTrapModalFocusParams = {
  modalRef: RefObject<HTMLElement | null>
  requestModalCloseCallback: () => void
  escapeClosesModal: boolean
  isActive: boolean
  overrideFirstFocusElement?: FocusableElement
}

export const useTrapModalFocusForceOrder = ({
  modalRef,
  requestModalCloseCallback,
  escapeClosesModal,
  isActive,
  overrideFirstFocusElement,
}: UseTrapModalFocusParams) => {
  const escapeClosesModalRef = useRef<boolean>(escapeClosesModal)
  const firstFocusElRef = useRef<FocusableElement | undefined>(
    overrideFirstFocusElement,
  )
  const requestModalCloseCallbackRef = useRef<() => void>(
    requestModalCloseCallback,
  )
  const isActiveRef = useRef<boolean>(isActive)

  useEffect(() => {
    escapeClosesModalRef.current = escapeClosesModal
  }, [escapeClosesModal])

  useEffect(() => {
    firstFocusElRef.current = overrideFirstFocusElement
  }, [overrideFirstFocusElement])

  useEffect(() => {
    requestModalCloseCallbackRef.current = requestModalCloseCallback
  }, [requestModalCloseCallback])

  useEffect(() => {
    isActiveRef.current = isActive
  }, [isActive])

  useEffect(() => {
    if (!isActive) return
    if (!modalRef.current) return
    const tabbableList = tabbable(modalRef.current)
    if (
      firstFocusElRef.current &&
      !tabbableList.includes(firstFocusElRef.current)
    ) {
      firstFocusElRef.current = tabbableList[0]
    }
    ;(firstFocusElRef.current || tabbableList[0])?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
			if (!isActiveRef.current) return;
      if (e.key === 'Escape' && escapeClosesModalRef.current) {
        requestModalCloseCallbackRef.current() // callback should set isActive to false and trigger cleanup
      }
      if (e.key === 'Tab') {
				if (!modalRef.current) return;
        const tabbableList = tabbable(modalRef.current)
				if (tabbableList.length === 0) {
					console.error('No tabbable elements found in the modal to trap focus. Modal element:', modalRef.current)
					return;
				}
        e.preventDefault()
				const focusedEl = document.activeElement as FocusableElement | null;
				const focusedElIdx = focusedEl !== null ? tabbableList.indexOf(focusedEl) : -1

				if (focusedElIdx === -1) {
					if (e.shiftKey) {
						tabbableList.at(-1)?.focus()
					} else {
						tabbableList[0].focus()
					}
				} else {
					const nextIdx = (focusedElIdx + (e.shiftKey ? -1 : 1) + tabbableList.length) % tabbableList.length
					tabbableList[nextIdx].focus()
				}
      }
    }

		document.addEventListener('keydown', onKeyDown, true)

		return () => {
			document.removeEventListener('keydown', onKeyDown, true)
		}
  }, [isActive])
}

// type UseTrapModalFocusParams = {
//   modalRef: RefObject<HTMLElement | null>
//   requestModalCloseCallback: () => void
//   escapeClosesModal: boolean
//   isActive: boolean
//   overrideFirstFocusElement?: HTMLElement
// }

// export const useTrapModalFocus = ({
//   modalRef,
//   isActive,
//   escapeClosesModal,
//   requestModalCloseCallback,
//   overrideFirstFocusElement,
// }: UseTrapModalFocusParams) => {
//   const escapeClosesModalRef = useRef<boolean>(escapeClosesModal)
//   const firstFocusElRef = useRef<HTMLElement | undefined>(
//     overrideFirstFocusElement,
//   )
//   const requestModalCloseCallbackRef = useRef<() => void>(
//     requestModalCloseCallback,
//   )
//   const isActiveRef = useRef<boolean>(isActive)

//   useEffect(() => {
//     escapeClosesModalRef.current = escapeClosesModal
//   }, [escapeClosesModal])

//   useEffect(() => {
//     firstFocusElRef.current = overrideFirstFocusElement
//   }, [overrideFirstFocusElement])

//   useEffect(() => {
//     requestModalCloseCallbackRef.current = requestModalCloseCallback
//   }, [requestModalCloseCallback])

//   useEffect(() => {
//     isActiveRef.current = isActive
//   }, [isActive])

//   useEffect(() => {
//     if (!isActive) return
//     if (!modalRef.current) return
//     const tabbableList = tabbable(modalRef.current)
//     if (
//       firstFocusElRef.current &&
//       !tabbableList.includes(firstFocusElRef.current)
//     ) {
//       console.error(
//         'overrideFirstFocusElement is not a tabbable element within the modalRef.',
//       )
//       firstFocusElRef.current = (tabbableList[0] ?? undefined) as
//         | HTMLElement
//         | undefined
//     }

//     (firstFocusElRef.current || tabbableList[0])?.focus()

//     const onTab = (e: KeyboardEvent) => {
//       if (e.key !== 'Tab') return
//       if (!modalRef.current) return
//       if (!isActiveRef.current) return

//       const tabbableList = tabbable(modalRef.current)
//       if (tabbableList.length === 0) return

//       const focusedEl = document.activeElement
//       const focusedElIdx =
//         focusedEl === null ? -1 : tabbableList.indexOf(focusedEl as HTMLElement)

// 			console.log(tabbableList, focusedEl, focusedElIdx)
//       const focusFirst = () => {
//         e.preventDefault()
// 				console.log("Focusing first")
//         if (
//           firstFocusElRef.current &&
//           tabbableList.includes(firstFocusElRef.current)
//         ) {
//           firstFocusElRef.current.focus()
//         } else {
//           tabbableList[0].focus()
//         }
//       }

//       const focusLast = () => {
//         e.preventDefault()
//         const firstRefIdx =
//           firstFocusElRef.current === undefined
//             ? -1
//             : tabbableList.indexOf(firstFocusElRef.current)
//         if (
//           firstFocusElRef.current &&
//           firstRefIdx !== -1
//         ) {
//           tabbableList
//             .at(firstRefIdx - 1)
//             ?.focus()
//         } else {
//           tabbableList.at(-1)?.focus()
//         }
//       }

//       if (focusedElIdx === -1) {
//         if (e.shiftKey) {
//           focusLast()
//         } else {
//           focusFirst()
//         }
//         return
//       } else if (focusedElIdx === 0 && e.shiftKey) {
//         focusLast()
//       } else if (focusedElIdx === tabbableList.length - 1 && !e.shiftKey) {
//         focusFirst()
//       }
//     }

//     const onEsc = (e: KeyboardEvent) => {
//       if (!isActiveRef.current) return
//       if (e.key !== 'Escape') return
//       if (!escapeClosesModalRef.current) return

//       requestModalCloseCallbackRef.current?.() // callback should set isActive to false and cause cleanup.
//     }

//     document.addEventListener('keydown', onTab)
//     document.addEventListener('keydown', onEsc)
//     return () => {
//       document.removeEventListener('keydown', onTab)
//       document.removeEventListener('keydown', onEsc)
//     }
//   }, [isActive])
// }
