import { singInFx } from '@/app/api/auth'
import EmailInput from '@/components/elements/auth/EmailInput'
import PasswordInput from '@/components/elements/auth/PasswordInput'
import Button from '@/components/elements/button'
import { IInputs } from '@/types/auth'
import { showAuthError } from '@/utils/errors'
import ROUTES from '@/utils/routes.enum'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

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
      await singInFx({
        url: '/users/login',
        email: data.email,
        password: data.password,
      })

      resetField('email')
      resetField('password')
    } catch (error) {
      showAuthError(error)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <div className="login-form">
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
