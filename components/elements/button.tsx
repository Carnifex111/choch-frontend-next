interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type }) => {
  return (
    <button type={type} className={`button theme-light`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
