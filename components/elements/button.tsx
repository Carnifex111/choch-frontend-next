interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  className?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  type,
  className,
}) => {
  return (
    <button
      type={type}
      className={`button theme-light ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
