import { FiShoppingCart } from 'react-icons/fi'

const CartButton = () => {
  return (
    <div className="cart-button">
      <FiShoppingCart style={{ fontSize: '25px', paddingRight: '5px' }} />
      Добавить в корзину
    </div>
  )
}

export default CartButton
