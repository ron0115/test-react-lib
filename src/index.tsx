import * as React from 'react'
import styles from './styles.module.css'

type Props = {
  text?: string
  variant?: 'primary' | 'secondary' | string
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

export const Button = ({ text, variant, disabled, ...otherProps }: Props) => {
  return (
    <button
      className={styles.test + ` ${disabled && styles.disabled}`}
      {...otherProps}
    >
      {variant}
      Example Component: {text}
    </button>
  )
}
