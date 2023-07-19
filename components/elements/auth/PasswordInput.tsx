import { useState } from 'react'
import { IAuthPageInput } from '@/types/auth'

const PasswordInput = ({ register, errors }: IAuthPageInput) => {
  const [hasValue, setHasValue] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== '')
  }

  return (
    <div className={`form-group ${hasValue ? 'filled' : ''}`}>
      <input
        {...register('password', {
          required: 'Введите пароль!',
          minLength: {
            value: 4,
            message: 'Минимум 4 символа!',
          },
          maxLength: {
            value: 20,
            message: 'Не более 20 символов!',
          },
        })}
        className="form-control"
        type="password"
        id="password"
        onChange={handleInputChange}
      />
      <label htmlFor="password" className={hasValue ? 'active' : ''}>
        Пароль
      </label>
      {errors.password && <span>{errors.password?.message}</span>}
    </div>
  )
}

export default PasswordInput
