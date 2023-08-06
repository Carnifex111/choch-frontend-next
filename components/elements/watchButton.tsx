import { IoIosSchool } from 'react-icons/io'

interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  className?: string
}

const WatchButton: React.FC<ButtonProps> = ({
  onClick,
  children,
  type,
  className,
}) => {
  return (
    <button type={type} className="cart-button-watch" onClick={onClick}>
      <IoIosSchool className="cart-button-watch-icon" />
      {children}
    </button>
  )
}

export default WatchButton
