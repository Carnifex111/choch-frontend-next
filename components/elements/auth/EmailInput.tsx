import { useState } from 'react'
import { IAuthPageInput } from '@/types/auth'

const EmailInput = ({ register, errors }: IAuthPageInput) => {
  const [hasValue, setHasValue] = useState(false)

  const handleInputChange = (e: any) => {
    setHasValue(e.target.value !== '')
  }

  return (
    <div className={`form-group ${hasValue ? 'filled' : ''}`}>
      <input
        {...register('email', {
          required: 'Введите Email',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: 'Неправильный Email!',
          },
        })}
        className="form-control"
        type="email"
        id="email"
        onChange={handleInputChange}
      />
      <label htmlFor="email" className={hasValue ? 'active' : ''}>
        Email
      </label>
      {errors.email && (
        <span className="error-message">{errors.email?.message}</span>
      )}
    </div>
  )
}

export default EmailInput
