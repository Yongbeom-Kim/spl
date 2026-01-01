import { useEffect, useRef } from 'react'
import type { KeyboardEvent } from 'react'

export type UseListKeyboardNavigationProps = {
  enabled: boolean
  handleArrowKeys: boolean
  handleHomeKey: boolean
  handleEndKey: boolean
  getFocusableElements: () => Array<HTMLElement>
}

export const useListKeyboardNavigation = ({
  enabled,
  handleArrowKeys,
  handleHomeKey,
  handleEndKey,
  getFocusableElements,
}: UseListKeyboardNavigationProps) => {
  const enabledRef = useRef(enabled)
  const handleArrowKeysRef = useRef(handleArrowKeys)
  const handleHomeKeyRef = useRef(handleHomeKey)
  const handleEndKeyRef = useRef(handleEndKey)
  const getFocusableElementsRef = useRef(getFocusableElements)

  useEffect(() => {
    enabledRef.current = enabled
  }, [enabled])

  useEffect(() => {
    handleArrowKeysRef.current = handleArrowKeys
  }, [handleArrowKeys])

  useEffect(() => {
    handleHomeKeyRef.current = handleHomeKey
  }, [handleHomeKey])

  useEffect(() => {
    handleEndKeyRef.current = handleEndKey
  }, [handleEndKey])

  useEffect(() => {
    getFocusableElementsRef.current = getFocusableElements
  }, [getFocusableElements])

  useEffect(() => {
    const handleKeyDown = (e: Event) => {
      if (!enabledRef.current) return
      const keyboardEvent = e as unknown as KeyboardEvent
      if (!('key' in keyboardEvent)) return
      const focusableElements = getFocusableElementsRef.current()

      if (focusableElements.length === 0) {
        console.warn('No focusable elements available for keyboard navigation.')
        return
      }
      if (
        handleArrowKeysRef.current &&
        (keyboardEvent.key === 'ArrowDown' || keyboardEvent.key === 'ArrowUp')
      ) {
        keyboardEvent.preventDefault()
        const activeElement = document.activeElement as HTMLElement
        const currentIndex = focusableElements.indexOf(activeElement)

        if (currentIndex === -1) {
          if (keyboardEvent.key === 'ArrowDown') {
            focusableElements[0]?.focus()
          } else {
            focusableElements.at(-1)?.focus()
          }
        } else {
          const nextIndex =
            keyboardEvent.key === 'ArrowDown'
              ? (currentIndex + 1) % focusableElements.length
              : (currentIndex - 1 + focusableElements.length) %
                focusableElements.length
          focusableElements[nextIndex]?.focus()
        }
        return
      }

      if (handleHomeKeyRef.current && keyboardEvent.key === 'Home') {
        keyboardEvent.preventDefault()
        focusableElements[0]?.focus()
        return
      }

      if (handleEndKeyRef.current && keyboardEvent.key === 'End') {
        keyboardEvent.preventDefault()
        focusableElements[focusableElements.length - 1]?.focus()
        return
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}
