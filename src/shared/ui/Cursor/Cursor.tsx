import { useRef, useEffect } from 'react'
import classNames from 'classnames'
import { useCursor } from '../lib/hooks/useCursor'
import styles from './Cursor.module.scss'

export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const currentX = useRef(0)
  const currentY = useRef(0)
  const { x, y, isHovering, label } = useCursor()

  useEffect(() => {
    let rafId: number

    const lerp = (start: number, end: number, t: number) =>
      start + (end - start) * t

    const tick = () => {
      currentX.current = lerp(currentX.current, x, 0.11)
      currentY.current = lerp(currentY.current, y, 0.11)

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${currentX.current}px, ${currentY.current}px)`
      }

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [x, y])

  return (
    <>
      <div
        className={classNames(styles.dot, {
          [styles.dotHovering]: isHovering,
        })}
        style={{ transform: `translate(${x}px, ${y}px)` }}
        aria-hidden='true'
      />
      <div
        ref={ringRef}
        className={classNames(styles.ring, {
          [styles.ringHovering]: isHovering,
        })}
        data-label={label}
        aria-hidden='true'
      />
    </>
  )
}
