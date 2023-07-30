import { updateCartItemFx } from '@/app/api/shopping-cart'
import { updateCartItemTotalPrice } from '@/context/shopping-cart'

export const updateTotalPrice = async (total_price: number, partId: number) => {
  const data = await updateCartItemFx({
    url: `/shopping-cart/total-price/${partId}`,
    payload: { total_price },
  })

  updateCartItemTotalPrice({ partId, total_price: data.total_price })
}
