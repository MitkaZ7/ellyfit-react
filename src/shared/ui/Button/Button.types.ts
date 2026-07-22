export type ButtonSize = 'small' | 'medium' | 'large'
export type ButtonVariant = 'primary' | 'secondary' | 'ghost'

export interface ButtonProps {
  label?: string
  disabled?: boolean
  size?: ButtonSize
  variant?: ButtonVariant
  className?: string // для кастомных стилей снаружи
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}
