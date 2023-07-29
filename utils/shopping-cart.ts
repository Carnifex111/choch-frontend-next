import {
  addToCartFx,
  getCartItemsFx,
  removeFromCartFx,
} from '@/app/api/shopping-cart'
import { setDisableCart } from '@/context/shopping-cart'

export const deleteItem = async (partId: any, user: any) => {
  await removeFromCartFx(`/shopping-cart/remove/${partId}}`)
  const cartItems = await getCartItemsFx(`/shopping-cart/${user.userId}`)
  const partIdsInCart = cartItems.map((item: any) => item.partId)
  setDisableCart({ partId, disabled: partIdsInCart.includes(partId) })
}

export const addToCart = async (partId: any, user: any) => {
  const username: string = user.username
  await addToCartFx({ url: '/shopping-cart/add', username, partId })
  const cartItems = await getCartItemsFx(`/shopping-cart/${user.userId}`)
  const partIdsInCart = cartItems.map((item: any) => item.partId)
  setDisableCart({ partId, disabled: partIdsInCart.includes(partId) })
}
