import { useState } from 'react'
import Button from '../button'
import CartPopupItem from './cart-item'

const CartPopup = () => {
  const [cartItems, setCartItems] = useState(true)
  const handleCartClick = (event: any) => {
    event.stopPropagation()
  }
  return (
    <div className="cart-popup">
      <div className="cart-popup-content" onClick={handleCartClick}>
        <div style={{ fontWeight: 700 }}>Корзина:</div>
        {cartItems ? (
          <>
            <span className="line"></span>
            <CartPopupItem courseName="Python start" coursePrice="999" />
            <CartPopupItem courseName="JS start" coursePrice="999" />
          </>
        ) : (
          <>
            <div style={{ color: '#ddd' }}>Корзина пуста</div>
          </>
        )}

        <div className="cart-popup-content-summ">Сумма: 0 ₽</div>
        <Button>Приобрести</Button>
      </div>
    </div>
  )
}

export default CartPopup
