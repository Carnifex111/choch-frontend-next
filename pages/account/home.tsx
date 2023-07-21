import useRedirectByUserCheck from '@/hooks/useRedirectByUserCheck'
import AccountHome from '@/components/templates/AccountPage/accountHome'

const Home = () => {
  const { shouldLoadContent } = useRedirectByUserCheck()
  return <>{shouldLoadContent && <AccountHome />}</>
}

export default Home
