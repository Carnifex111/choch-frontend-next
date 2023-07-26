import { addToCartFx, getCartItemsFx } from '@/app/api/shopping-cart'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { $user } from '@/context/user'
import {
  $disableCart,
  $shoppingCart,
  setDisableCart,
} from '@/context/shopping-cart'

const CartButton = ({ partId }: any) => {
  const user = useStore($user)
  const shoppingCart = useStore($shoppingCart)
  const disableCart = useStore($disableCart)

  useEffect(() => {
    const checkCartItem = async () => {
      if (user && partId) {
        const cartItems = await getCartItemsFx(`/shopping-cart/${user.userId}`)
        const partIdsInCart = cartItems.map((item: any) => item.partId)
        setDisableCart({ partId, disabled: partIdsInCart.includes(partId) })
      }
    }

    if (user && partId) {
      checkCartItem()
    }
  }, [])

  const addToCart = async () => {
    const username: string = user.username
    await addToCartFx({ url: '/shopping-cart/add', username, partId })
    const cartItems = await getCartItemsFx(`/shopping-cart/${user.userId}`)
    const partIdsInCart = cartItems.map((item: any) => item.partId)
    setDisableCart({ partId, disabled: partIdsInCart.includes(partId) })
  }

  return (
    <>
      {disableCart[partId] ? (
        <div className="cart-button-add">
          <BsFillCartPlusFill
            style={{ color: '#73cbf3', fontSize: '25px', paddingRight: '5px' }}
          />{' '}
          Товар в корзине
        </div>
      ) : (
        <div onClick={addToCart} className="cart-button">
          <FiShoppingCart style={{ fontSize: '25px', paddingRight: '5px' }} />{' '}
          Добавить в корзину
        </div>
      )}
    </>
  )
}

export default CartButton
