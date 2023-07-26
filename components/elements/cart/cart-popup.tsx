import { useEffect, useState } from 'react'
import Button from '../button'
import CartPopupItem from './cart-item'
import { toast } from 'react-toastify'
import { getCartItemsFx } from '@/app/api/shopping-cart'
import { IShoppingCartItem } from '@/types/shopping-cart'
import { checkUserAuthFx } from '@/app/api/auth'
import Spinner from '../spinner'
import { useStore } from 'effector-react'
import { $shoppingCart } from '@/context/shopping-cart'
import { $user } from '@/context/user'

const CartPopup = () => {
  const [isLoading, setIsLoading] = useState(false)

  const cartItems = useStore($shoppingCart)

  const handleCartClick = (event: any) => {
    event.stopPropagation()
  }

  return (
    <div className="cart-popup">
      <div className="cart-popup-content" onClick={handleCartClick}>
        <div style={{ fontWeight: 700 }}>Корзина:</div>
        <span className="line"></span>
        {isLoading ? (
          <Spinner />
        ) : cartItems.length ? (
          cartItems.map((item) => (
            <>
              <CartPopupItem
                id={item.id}
                partId={item.partId}
                courseName={item.course_name}
                coursePrice={item.price}
              />
            </>
          ))
        ) : (
          'Корзина пуста'
        )}
        {/* <div className="cart-popup-content-summ">Сумма: {totalPrice} ₽</div> */}
        {cartItems.length ? <Button>Приобрести</Button> : null}
      </div>
    </div>
  )
}

export default CartPopup
