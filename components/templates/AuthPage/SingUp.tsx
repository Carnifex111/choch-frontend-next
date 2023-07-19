import { singUpFx } from '@/app/api/auth'
import EmailInput from '@/components/elements/auth/EmailInput'
import NameInput from '@/components/elements/auth/NameInput'
import PasswordInput from '@/components/elements/auth/PasswordInput'
import Button from '@/components/elements/button'
import { IInputs } from '@/types/auth'
import { useForm } from 'react-hook-form'

const SingUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>()

  const onSubmit = async (data: IInputs) => {
    try {
      const userData = await singUpFx({
        url: '/users/singup',
        username: data.name,
        password: data.password,
        email: data.email,
      })

      if (!userData) {
        return
      }

      resetField('email')
      resetField('name')
      resetField('password')
    } catch (error) {
      console.log('error')
    } finally {
      console.log('finally')
    }
  }

  return (
    <div className="login-form">
      <form className="login-form-wrap" onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <NameInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <Button>Регистрация</Button>
      </form>
    </div>
  )
}

export default SingUp
