import { createEffect } from 'effector-next'
import { toast } from 'react-toastify'
import { ISignUpFx, ISignInFx } from '../../types/auth'
import api from '../axiosClient'
import { AxiosError } from 'axios'
import { HTTPStatus } from '@/constans'
import { setUser } from '@/context/user'

export const singUpFx = createEffect(
  async ({ url, username, password, email }: ISignUpFx) => {
    const { data } = await api.post(url, { username, password, email })

    if (data.warningMessage) {
      toast.warning(data.warningMessage)
      return
    }

    toast.success('Регистрация прошла успешно!')

    return data
  }
)

export const singInFx = createEffect(
  async ({ url, email, password }: ISignInFx) => {
    const { data } = await api.post(url, { email, password })

    toast.success('Вход выполнен!')

    return data
  }
)

export const logoutFx = createEffect(async (url: string) => {
  try {
    setUser(null)
    await api.get(url)
  } catch (error) {
    toast.error((error as Error).message)
  }
})

export const checkUserAuthFx = createEffect(async (url: string) => {
  try {
    const { data } = await api.get(url)

    return data
  } catch (error) {
    const axiosError = error as AxiosError

    if (axiosError.response) {
      if (axiosError.response.status === HTTPStatus.FORBIDDEN) {
        return false
      }
    }

    toast.error((error as Error).message)
  }
})
