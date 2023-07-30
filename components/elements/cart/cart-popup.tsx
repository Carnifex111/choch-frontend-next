import { useEffect, useState } from 'react'
import Button from '../button'
import CartPopupItem from './cart-item'
import Spinner from '../spinner'
import { useStore } from 'effector-react'
import { $shoppingCart, setTotalPrice } from '@/context/shopping-cart'
import { $totalPrice } from '@/context/shopping-cart'

const CartPopup = () => {
  const [isLoading, setIsLoading] = useState(false)

  const cartItems = useStore($shoppingCart)
  const totalPrice = useStore($totalPrice)
  const shoppingCart = useStore($shoppingCart)

  const handleCartClick = (event: any) => {
    event.stopPropagation()
  }

  useEffect(() => {
    setTotalPrice(
      shoppingCart.reduce(
        (defaultCount: any, item: any) => defaultCount + item.total_price,
        0
      )
    )
  }, [cartItems])

  const makePay = async () => {
    try {
    } catch (err) {}
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
        <div className="cart-popup-content-summ">Сумма: {totalPrice} ₽</div>
        {cartItems.length ? <Button>Приобрести</Button> : null}
      </div>
    </div>
  )
}

export default CartPopup
