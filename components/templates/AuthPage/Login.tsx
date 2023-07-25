import { singInFx } from '@/app/api/auth'
import EmailInput from '@/components/elements/auth/EmailInput'
import PasswordInput from '@/components/elements/auth/PasswordInput'
import Button from '@/components/elements/button'
import { setUser } from '@/context/user'
import { IInputs } from '@/types/auth'
import { showAuthError } from '@/utils/errors'
import ROUTES from '@/utils/routes.enum'
import Link from 'next/link'
import router from 'next/router'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FiHome } from 'react-icons/fi'

const Login = () => {
  const [spinner, setSpinner] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>()

  const onSubmit = async (data: IInputs) => {
    try {
      setSpinner(true)
      const response = await singInFx({
        url: '/users/login',
        email: data.email,
        password: data.password,
      })

      setUser(response.user)

      resetField('email')
      resetField('password')
    } catch (error) {
      showAuthError(error)
    } finally {
      setSpinner(false)
      router.push(ROUTES.ACCOUNT_HOME)
    }
  }

  return (
    <div className="login-form">
      <div className="home-page-link">
        <Link href="/">
          <FiHome style={{ fontSize: '30px' }} />
        </Link>
      </div>
      <form className="login-form-wrap" onSubmit={handleSubmit(onSubmit)}>
        <h2>Вход</h2>
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />

        <Button>{spinner ? <div className="spinner"></div> : 'Войти'}</Button>
        <Link href={ROUTES.SINGUP}>
          <h4 style={{ fontWeight: '300', cursor: 'pointer' }}>
            Нет аккаунта?{' '}
            <span style={{ textDecoration: 'underline' }}>
              Зарегистрироваться
            </span>
          </h4>
        </Link>
      </form>
    </div>
  )
}

export default Login
