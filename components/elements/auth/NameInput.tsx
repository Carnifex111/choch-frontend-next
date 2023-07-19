import { useState } from 'react'
import { IAuthPageInput } from '@/types/auth'

const NameInput = ({ register, errors }: IAuthPageInput) => {
  const [hasValue, setHasValue] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== '')
  }

  return (
    <div className={`form-group ${hasValue ? 'filled' : ''}`}>
      <input
        {...register('name', {
          required: 'Введите никнейм',
          minLength: {
            value: 4,
            message: 'Минимум 4 символа',
          },
          maxLength: {
            value: 15,
            message: 'Не более 15 символов',
          },
        })}
        className="form-control"
        type="text"
        id="name"
        onChange={handleInputChange}
      />
      <label htmlFor="name" className={hasValue ? 'active' : ''}>
        Никнейм
      </label>
      {errors.name && (
        <span className="error-message">{errors.name?.message}</span>
      )}
    </div>
  )
}

export default NameInput
