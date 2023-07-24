import { MdOutlineClose } from 'react-icons/md'

const CartPopupItem = ({ courseName, coursePrice }: any) => {
  return (
    <>
      <div className="cart-popup-item">
        <div className="cart-popup-item-name">{courseName}</div>
        <div className="cart-popup-item-price">{coursePrice} ₽</div>
        <MdOutlineClose className="cart-popup-item-icon-dlt" />
      </div>

      <span className="line"></span>
    </>
  )
}

export default CartPopupItem
