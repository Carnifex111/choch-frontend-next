import { checkUserAuthFx } from '@/app/api/auth'
import { getCartItemsFx } from '@/app/api/shopping-cart'

const updateCartItems = async ({ setIsLoading }: any) => {
  setIsLoading(true)
  try {
    const userData = await checkUserAuthFx('/users/login-check')
    const cartItems = await getCartItemsFx(`/shopping-cart/${userData.userId}`)
    cartItems(cartItems)
  } catch (error) {}
  setIsLoading(false)
}

export default updateCartItems
