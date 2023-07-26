import { createDomain, createEffect, createEvent, createStore } from 'effector'
import { getCartItemsFx } from '@/app/api/shopping-cart'
import { IShoppingCartItem } from '@/types/shopping-cart'

const shoppingCart = createDomain()

export const setDisableCart = createEvent<{
  partId: string
  disabled: boolean
}>()

export const $shoppingCart: any = shoppingCart
  .createStore<IShoppingCartItem[]>([])
  .on(getCartItemsFx.doneData, (_, data) => data)

export const $disableCart = shoppingCart
  .createStore<{ [partId: string]: boolean }>({})
  .on(setDisableCart, (state, { partId, disabled }) => ({
    ...state,
    [String(partId)]: disabled,
  }))
