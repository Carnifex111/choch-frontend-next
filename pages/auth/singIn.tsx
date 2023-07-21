import Login from '@/components/templates/AuthPage/Login'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'

const SingIn = () => {
  const { shouldLoadContent } = useRedirectByUserCheck(true)
  return <>{shouldLoadContent && <Login />}</>
}

export default SingIn
