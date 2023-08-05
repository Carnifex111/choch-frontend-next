import { createEffect } from 'effector-next'
import api from '../axiosClient'
import { IAddUserToCourseFx, ICheckPayFx, IMakePayFx } from '@/types/order'

export const makePaymentFx = createEffect(
  async ({ url, amount, description }: IMakePayFx) => {
    const { data } = await api.post(url, { amount, description })

    return data
  }
)

export const checkPaymentFx = createEffect(
  async ({ url, paymentId, userId, courseIds }: ICheckPayFx) => {
    const { data } = await api.post(url, {
      paymentId,
      userId,
      courseIds,
    })

    return data
  }
)

export const addUserToCourseFx = createEffect(
  async ({ userId, courseIds }: IAddUserToCourseFx) => {
    const { data } = await api.post('/api/courses/enroll', {
      userId,
      courseIds,
    })

    return data
  }
)
