import SingUp from '@/components/templates/AuthPage/SingUp'
import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'

const SingIn = () => {
  const { shouldLoadContent } = useRedirectByUserCheck(true)

  return <>{shouldLoadContent && <SingUp />}</>
}

export default SingIn
