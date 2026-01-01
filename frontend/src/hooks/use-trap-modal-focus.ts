import { useEffect, useRef } from 'react'
import { tabbable } from 'tabbable'
import type { RefObject } from 'react'
import type { FocusableElement } from 'tabbable'

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

    if (tabbableList.length === 0) {
      console.warn('No tabbable elements found in modal.')
      return
    }

    if (
      firstFocusElRef.current &&
      !tabbableList.includes(firstFocusElRef.current)
    ) {
      firstFocusElRef.current = tabbableList[0]
    }
    ;(firstFocusElRef.current || tabbableList[0]).focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isActiveRef.current) return
      if (e.key === 'Escape' && escapeClosesModalRef.current) {
        requestModalCloseCallbackRef.current() // callback should set isActive to false and trigger cleanup
      }
      if (e.key === 'Tab') {
        if (!modalRef.current) return
        const modalTabbableList = tabbable(modalRef.current)
        if (modalTabbableList.length === 0) {
          console.error(
            'No tabbable elements found in modal to trap focus. Modal element:',
            modalRef.current,
          )
          return
        }
        e.preventDefault()

        const focusedEl = document.activeElement as FocusableElement | null
        const focusedElIdx = focusedEl
          ? modalTabbableList.indexOf(focusedEl)
          : -1
        const firstFocusElIdx = (() => {
          if (!firstFocusElRef.current) return 0
          const idx = modalTabbableList.indexOf(firstFocusElRef.current)
          return idx === -1 ? 0 : idx
        })()

        if (focusedElIdx === -1) {
          if (e.shiftKey) {
            modalTabbableList.at(firstFocusElIdx - 1)?.focus()
          } else {
            modalTabbableList.at(firstFocusElIdx)?.focus()
          }
          return
        }

        if (focusedElIdx === 0 && e.shiftKey) {
          modalTabbableList.at(-1)?.focus()
          return
        }
        if (focusedElIdx === modalTabbableList.length - 1 && !e.shiftKey) {
          modalTabbableList[0]?.focus()
          return
        }

        const nextIdx =
          (focusedElIdx + (e.shiftKey ? -1 : 1) + modalTabbableList.length) %
          modalTabbableList.length
        modalTabbableList[nextIdx]?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown, true)

    return () => {
      document.removeEventListener('keydown', onKeyDown, true)
    }
  }, [isActive])
}
