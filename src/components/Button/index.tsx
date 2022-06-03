import React from 'react'

interface IButtonProps {
  children: React.ReactNode | string
  onClick: () => void
  variant?: 'success' | 'error' | 'warning' | 'info'
  className?: string
  type: "button" | "submit" | "reset" | undefined
  outline: boolean
}

const Button = (props: IButtonProps) => {
  const { children, onClick, variant, className, type, outline } = props

  const classNames = ['button']

  if (variant) {
    classNames.push(`button--${variant}`);
  }

  if (variant && outline) {
    classNames.push(`button--outline--${variant}`);
  }

  if (className) {
    classNames.push(className);
  }

  return (
    <button className={classNames.join(' ')} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button