import { useEffect, useState } from 'react'
import Button from '../button'
import CartPopupItem from './cart-item'
import Spinner from '../spinner'
import { useStore } from 'effector-react'
import { $shoppingCart, setTotalPrice } from '@/context/shopping-cart'
import { $totalPrice } from '@/context/shopping-cart'
import { makePaymentFx } from '@/app/api/payment'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { removeFromCartFx } from '@/app/api/shopping-cart'
import { $user } from '@/context/user'

const CartPopup = () => {
  const [isLoading, setIsLoading] = useState(false)

  const cartItems = useStore($shoppingCart)
  const totalPrice = useStore($totalPrice)
  const shoppingCart = useStore($shoppingCart)
  const user = useStore($user)
  const router = useRouter()

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
      const data = await makePaymentFx({
        url: '/payment',
        amount: `${totalPrice}`,
        description: '',
      })

      router.push(data.confirmation.confirmation_url)
      await removeFromCartFx(`/shopping-cart/removeAll/${user?.userId}`)
    } catch (err) {
      toast.error((err as Error).message)
    }
  }

  return (
    <div className="cart-popup">
      <div className="cart-popup-content" onClick={handleCartClick}>
        <div className="cart-popup-content-title" style={{ fontWeight: 700 }}>
          Корзина:
        </div>
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
          <p className="cart-null">Корзина пуста</p>
        )}
        <div className="cart-popup-content-summ">Сумма: {totalPrice} ₽</div>
        {cartItems.length ? (
          <Button className="popup-btn" onClick={makePay}>
            <p className="popup-btn-txt">Приобрести</p>
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default CartPopup
