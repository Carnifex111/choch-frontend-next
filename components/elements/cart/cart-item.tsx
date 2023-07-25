import { MdDelete } from 'react-icons/md'
import { removeItemFromCart } from '@/utils/shopping-cart'
import updateCartItems from '@/utils/updateCartItems'
import { useState } from 'react'

const CartPopupItem = ({ courseName, coursePrice, partId, id }: any) => {
  const [isLoading, setIsLoading] = useState(true)

  const deleteCartItem = async () => {
    try {
      await removeItemFromCart(partId)
      updateCartItems({ setIsLoading })
    } catch (error) {}
  }

  return (
    <>
      <div key={id} className="cart-popup-item">
        {isLoading ? (
          <>
            <div className="cart-popup-item-name">{courseName}</div>
            <div className="cart-popup-item-price">{coursePrice} ₽</div>
            <MdDelete
              onClick={deleteCartItem}
              className="cart-popup-item-icon-dlt"
            />
          </>
        ) : (
          'Курс удален'
        )}
      </div>

      <span className="line"></span>
    </>
  )
}

export default CartPopupItem
