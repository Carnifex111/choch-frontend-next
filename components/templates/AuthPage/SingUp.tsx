import { singUpFx } from '@/app/api/auth'
import EmailInput from '@/components/elements/auth/EmailInput'
import NameInput from '@/components/elements/auth/NameInput'
import PasswordInput from '@/components/elements/auth/PasswordInput'
import Button from '@/components/elements/button'
import { IInputs } from '@/types/auth'
import { showAuthError } from '@/utils/errors'
import ROUTES from '@/utils/routes.enum'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

const SingUp = () => {
  const [spinner, setSpinner] = useState(false)
  const router = useRouter()
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>()

  const onSubmit = async (data: IInputs) => {
    try {
      setSpinner(true)
      singUpFx({
        url: '/users/singup',
        username: data.name,
        password: data.password,
        email: data.email,
      })

      resetField('email')
      resetField('name')
      resetField('password')
    } catch (error) {
      showAuthError(error)
    } finally {
      setSpinner(false)
      router.push(ROUTES.SINGIN)
    }
  }

  return (
    <div className="login-form">
      <form className="login-form-wrap" onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <NameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <Button>
          {spinner ? <div className="spinner"></div> : 'Регистрация'}
        </Button>
        <Link href={ROUTES.SINGIN}>
          {' '}
          <h4 style={{ fontWeight: '300', cursor: 'pointer' }}>
            Есть аккаунт?{' '}
            <span style={{ textDecoration: 'underline' }}>Войти</span>
          </h4>
        </Link>
      </form>
    </div>
  )
}

export default SingUp
