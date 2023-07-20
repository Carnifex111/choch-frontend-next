import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '@/components/elements/button'

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false)

  const toggleBurger = () => {
    setBurgerOpen((prevOpen) => !prevOpen)
  }

  return (
    <header className="header">
      <div
        className={`header-icon ${burgerOpen ? 'open' : ''}`}
        onClick={() => toggleBurger()}
      >
        {burgerOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className="header-min-btn">
        <Button>Вход</Button>
      </div>
      <nav className={`navbar ${burgerOpen ? 'open' : ''}`}>
        <div className="navlink-wrap">
          <ul className="navlink">
            <div>
              <li className="logo">CHOCH</li>
              <li className="navlink-item">Главная</li>
              <li className="navlink-item">Каталог</li>
              <li className="navlink-item">О нас</li>
            </div>
            <div>
              <li className="navlink-item item-link-btn">
                <Button>Вход</Button>
              </li>
              {/* <li className="navlink-item">Регистрация</li>
              <li className="navlink-item">Профиль</li> */}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
