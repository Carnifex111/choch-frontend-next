import { getCartItemsFx, removeFromCartFx } from '@/app/api/shopping-cart'
import { setDisableCart } from '@/context/shopping-cart'
import { $user } from '@/context/user'
import { useStore } from 'effector-react'
import { MdDelete } from 'react-icons/md'

const CartPopupItem = ({ courseName, coursePrice, partId, id }: any) => {
  const user = useStore($user)

  const deleteItem = async () => {
    await removeFromCartFx(`/shopping-cart/remove/${partId}}`)
    //await getCartItemsFx(`/shopping-cart/${user.userId}`)
    const cartItems = await getCartItemsFx(`/shopping-cart/${user.userId}`)
    const partIdsInCart = cartItems.map((item: any) => item.partId)
    setDisableCart({ partId, disabled: partIdsInCart.includes(partId) })
  }

  return (
    <>
      <div key={id} className="cart-popup-item">
        <>
          <div className="cart-popup-item-name">{courseName}</div>
          <div className="cart-popup-item-price">{coursePrice} ₽</div>
          <MdDelete onClick={deleteItem} className="cart-popup-item-icon-dlt" />
        </>
      </div>

      <span className="line"></span>
    </>
  )
}

export default CartPopupItem
