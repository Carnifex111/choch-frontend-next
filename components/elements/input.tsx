import { ForwardedRef, forwardRef } from 'react'

interface InputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  value?: string
  type: string
  label: string
  id: string
  error?: string
}

const Input = forwardRef(
  (
    { onChange, value, type, label, id, error }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="form-group">
        <input
          className={`form-control ${error ? 'is-invalid' : ''}`}
          type={type}
          value={value}
          onChange={onChange}
          id={id}
          ref={ref}
          required
        />
        <label htmlFor={id}>{label}</label>
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    )
  }
)

export default Input
