// useUserAuth.js
import { useEffect, useState } from 'react'
import { checkUserAuthFx } from '@/app/api/auth'
import { IUser } from '@/types/auth'

const useUserCheckAuth = () => {
  const [user, setUser] = useState<IUser | null>(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await checkUserAuthFx('/users/login-check')
        setUser(userData)
      } catch (error) {
        console.error(error)
        setUser(null)
      }
    }

    fetchUser()
  }, [])

  return user
}

export default useUserCheckAuth
