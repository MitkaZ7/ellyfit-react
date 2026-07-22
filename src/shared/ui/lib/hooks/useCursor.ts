import { useState, useEffect, useCallback } from 'react'
import type { CursorState } from '../../Cursor/Cursor.types'

export function useCursor(): CursorState {
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    label: '',
  })

  // useCallback — чтобы функции не пересоздавались
  // при каждом ре-рендере и не тригерили лишние useEffect
  const onMove = useCallback((e: MouseEvent) => {
    setState(prev => ({ ...prev, x: e.clientX, y: e.clientY }))
  }, [])

  const onOver = useCallback((e: MouseEvent) => {
    const target = e.target as Element

    // проверяем и data-cursor, и нативные интерактивные элементы
    const cursorEl = target.closest('[data-cursor]')
    const interactiveEl = target.closest('a, button')

    if (cursorEl) {
      setState(prev => ({
        ...prev,
        isHovering: true,
        label: cursorEl.getAttribute('data-cursor') ?? '',
      }))
    } else if (interactiveEl) {
      setState(prev => ({
        ...prev,
        isHovering: true,
        label: '', // заполнение без текста
      }))
    }
  }, [])

  const onOut = useCallback((e: MouseEvent) => {
    const target = e.target as Element
    if (target.closest('[data-cursor]') || target.closest('a, button')) return
    setState(prev => ({ ...prev, isHovering: false, label: '' }))
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [onMove, onOver, onOut])

  return state
}
