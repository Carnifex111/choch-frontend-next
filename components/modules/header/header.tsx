import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import Button from '@/components/elements/button'
import ROUTES from '@/utils/routes.enum'
import Link from 'next/link'
import { logoutFx } from '@/app/api/auth'
import { SlUser, SlLogin } from 'react-icons/sl'
import { FiShoppingCart } from 'react-icons/fi'
import { MdOutlineLogout } from 'react-icons/md'
import { useRouter } from 'next/router'
import useUserCheckAuth from '@/hooks/useUserCheckAuth'
import CartPopup from '@/components/elements/cart/cart-popup'
import { getCartItemsFx } from '@/app/api/shopping-cart'

const Header = () => {
  const [isCartPopupOpen, setCartPopupOpen] = useState(false)
  const [burgerOpen, setBurgerOpen] = useState(false)
  const router = useRouter()
  let user = useUserCheckAuth()

  const toggleBurger = () => {
    setBurgerOpen((prevOpen) => !prevOpen)
  }

  const handleLogout = async () => {
    await logoutFx('/users/logout')
    router.push(ROUTES.SINGIN)
  }

  const openCart = async () => {
    setCartPopupOpen(!isCartPopupOpen)
    if (isCartPopupOpen === false)
      await getCartItemsFx(`/shopping-cart/${user.userId}`)
  }

  return (
    <header className="header">
      <div
        className={`header-icon ${burgerOpen ? 'open' : ''}`}
        onClick={() => toggleBurger()}
      >
        {burgerOpen ? (
          <AiOutlineClose style={{ color: '#fff' }} />
        ) : (
          <AiOutlineMenu />
        )}
      </div>

      <div className="header-min-btn">
        {user ? (
          <p style={burgerOpen ? { display: 'none' } : { display: 'block' }}>
            <FiShoppingCart
              style={{
                marginRight: '5px',
                marginTop: '15px',
                fontSize: '30px',
              }}
            />
          </p>
        ) : (
          <Link
            style={burgerOpen ? { display: 'none' } : { display: 'block' }}
            href={ROUTES.SINGIN}
          >
            <SlLogin
              style={{
                marginRight: '5px',
                marginTop: '15px',
                fontSize: '30px',
              }}
            />
          </Link>
        )}
      </div>
      <nav className={`navbar ${burgerOpen ? 'open' : ''}`}>
        <div className="navlink-wrap">
          <ul className="navlink">
            <div>
              <li className="logo">CHOCH</li>
              {user ? (
                <li className="navlink-item lk">
                  <Link href={ROUTES.ACCOUNT_HOME}>
                    <p>Личный кабинет</p>
                  </Link>
                </li>
              ) : null}
              <Link href="/">
                <li className="navlink-item">Главная</li>
              </Link>
              <li className="navlink-item">Каталог</li>
              <li className="navlink-item">О нас</li>
              {user ? (
                <li className="navlink-item lk">
                  <p onClick={handleLogout}>Выйти</p>
                </li>
              ) : null}
              <li className="navlink-item"></li>
            </div>
            <div>
              <div className="navlink-item item-link-btn">
                {user ? (
                  <div className="profile">
                    <Link href={ROUTES.ACCOUNT_HOME}>
                      <p>
                        <SlUser style={{ marginRight: '5px' }} /> Личный кабинет
                      </p>
                    </Link>
                    <p style={{ cursor: 'pointer' }} onClick={openCart}>
                      <FiShoppingCart style={{ marginRight: '5px' }} />
                      <span
                        style={
                          isCartPopupOpen
                            ? { color: '#ddd' }
                            : { color: '#000' }
                        }
                      >
                        Корзина
                      </span>
                      {isCartPopupOpen && <CartPopup />}
                    </p>
                    <p style={{ cursor: 'pointer' }} onClick={handleLogout}>
                      <MdOutlineLogout style={{ marginRight: '5px' }} />
                      Выйти
                    </p>
                  </div>
                ) : (
                  <Link href={ROUTES.SINGIN}>
                    <Button>Вход</Button>
                  </Link>
                )}
              </div>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
