import { getCartItemsFx, removeFromCartFx } from '@/app/api/shopping-cart'
import { setDisableCart } from '@/context/shopping-cart'
import { $user } from '@/context/user'
import { useStore } from 'effector-react'
import { MdDelete } from 'react-icons/md'
import { deleteItem } from '@/utils/shopping-cart'

const CartPopupItem = ({ courseName, coursePrice, partId, id }: any) => {
  const user = useStore($user)

  return (
    <>
      <div key={id} className="cart-popup-item">
        <>
          <div className="cart-popup-item-name">{courseName}</div>
          <div className="cart-popup-item-price">{coursePrice} ₽</div>
          <MdDelete
            onClick={() => deleteItem(partId, user)}
            className="cart-popup-item-icon-dlt"
          />
        </>
      </div>

      <span className="line"></span>
    </>
  )
}

export default CartPopupItem
