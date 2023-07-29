import { IUser } from '@/types/auth'
import { createDomain } from 'effector-next'

const user = createDomain()

export const setUser = user.createEvent<IUser | null>()

export const $user = user
  .createStore<IUser | null>({} as IUser)
  .on(setUser, (_, user) => user)
