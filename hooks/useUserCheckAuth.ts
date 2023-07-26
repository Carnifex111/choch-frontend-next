import { useEffect, useState } from 'react'
import { checkUserAuthFx } from '@/app/api/auth'
import { useStore } from 'effector-react'
import { $user } from '@/context/user'
import { setUser } from '@/context/user'

const useUserCheckAuth = () => {
  const user = useStore($user)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await checkUserAuthFx('/users/login-check')
        setUser(userData)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUser()
  }, [])

  return user
}

export default useUserCheckAuth
