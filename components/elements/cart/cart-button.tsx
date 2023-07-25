import { checkUserAuthFx } from '@/app/api/auth'
import { addToCartFx, getCartItemsFx } from '@/app/api/shopping-cart'
import {
  $disableCart,
  $shoppingCart,
  setDisableCart,
} from '@/context/shopping-cart'
import useUserCheckAuth from '@/hooks/useUserCheckAuth'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { BsFillCartPlusFill } from 'react-icons/bs'

const CartButton = ({ partId }: any) => {
  const user = useUserCheckAuth()
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
  }, [user, partId, shoppingCart])

  const handleAddToCat = async () => {
    const username: string = user.username
    addToCartFx({ url: '/shopping-cart/add', username, partId })
    setDisableCart({ partId, disabled: true })
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
        <div onClick={handleAddToCat} className="cart-button">
          <FiShoppingCart style={{ fontSize: '25px', paddingRight: '5px' }} />{' '}
          Добавить в корзину
        </div>
      )}
    </>
  )
}

export default CartButton
