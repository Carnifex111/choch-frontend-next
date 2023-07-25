import { useEffect, useState } from 'react'
import Button from '../button'
import CartPopupItem from './cart-item'
import { toast } from 'react-toastify'
import { getCartItemsFx } from '@/app/api/shopping-cart'
import { IShoppingCartItem } from '@/types/shopping-cart'
import { checkUserAuthFx } from '@/app/api/auth'
import Spinner from '../spinner'

const CartPopup = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [cartItems, setCartItems] = useState<IShoppingCartItem[]>([])

  const handleCartClick = (event: any) => {
    event.stopPropagation()
  }

  useEffect(() => {
    loadCartItems()
  }, [])

  const loadCartItems = async () => {
    try {
      const userData = await checkUserAuthFx('/users/login-check')

      const cartItems = await getCartItemsFx(
        `/shopping-cart/${userData.userId}`
      )

      setCartItems(cartItems)
      setIsLoading(false)
    } catch (error) {
      toast.error((error as Error).message)
      setIsLoading(false)
    }
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
