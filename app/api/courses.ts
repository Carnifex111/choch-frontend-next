import { createEffect } from 'effector-next'
import api from '../axiosClient'
import { toast } from 'react-toastify'

export const getBestsellersOrNewCoursesFx = createEffect(
  async (url: string) => {
    const { data } = await api.get(url)

    return data
  }
)

export const getCoursesFx = createEffect(async (url: string) => {
  const { data } = await api.get(url)

  return data
})

export const getCourseFx = createEffect(async (url: string) => {
  const { data } = await api.get(url)

  return data
})

export const searchCoursesFx = createEffect(
  async ({ url, search }: { url: string; search: string }) => {
    const { data } = await api.post(url, { search })

    return data.rows
  }
)

export const getCourseByNameFx = createEffect(
  async ({ url, name }: { url: string; name: string }) => {
    try {
      const { data } = await api.post(url, { name })

      return data
    } catch (error) {
      toast.error((error as Error).message)
    }
  }
)
