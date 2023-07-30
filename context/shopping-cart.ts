import { createDomain, createEffect, createEvent, createStore } from 'effector'
import { getCartItemsFx } from '@/app/api/shopping-cart'
import { IShoppingCartItem } from '@/types/shopping-cart'

const shoppingCart = createDomain()

export const setShoppingCart = shoppingCart.createEvent<IShoppingCartItem[]>()
export const setTotalPrice = shoppingCart.createEvent<number>()
export const updateCartItemTotalPrice = shoppingCart.createEvent<{
  partId: number
  total_price: number
}>()

const updateTotalPrice = (
  cartItems: any,
  partId: number,
  total_price: number
) => {
  return cartItems.map((item: any) => {
    if (item.partId === partId) {
      return {
        ...item,
        total_price,
      }
    }

    return item
  })
}

export const setDisableCart = createEvent<{
  partId: string | number
  disabled: boolean
}>()

export const $shoppingCart: any = shoppingCart
  .createStore<IShoppingCartItem[]>([])
  .on(getCartItemsFx.doneData, (_, data) => data)
  .on(updateCartItemTotalPrice, (state, { partId, total_price }) => [
    ...updateTotalPrice(state, partId, total_price),
  ])
  .on(setShoppingCart, (_, shoppingCart) => shoppingCart)

export const $disableCart = shoppingCart
  .createStore<{ [partId: string]: boolean }>({})
  .on(setDisableCart, (state, { partId, disabled }) => ({
    ...state,
    [String(partId)]: disabled,
  }))

export const $totalPrice = shoppingCart
  .createStore<number>(0)
  .on(setTotalPrice, (_, value: number) => value)
