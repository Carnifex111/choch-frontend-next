import { getCartItemsFx, removeFromCartFx } from '@/app/api/shopping-cart'
import { setDisableCart } from '@/context/shopping-cart'

export const deleteItem = async (partId: any, user: any) => {
  await removeFromCartFx(`/shopping-cart/remove/${partId}}`)
  const cartItems = await getCartItemsFx(`/shopping-cart/${user.userId}`)
  const partIdsInCart = cartItems.map((item: any) => item.partId)
  setDisableCart({ partId, disabled: partIdsInCart.includes(partId) })
}
