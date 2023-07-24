import React from 'react'
import Button from '../button'

interface ICard {
  courseIcon: string
  title: string
  descr: string
  buttonText: string
  price?: string
  cartButton?: any
}

const Card = ({
  courseIcon,
  title,
  descr,
  buttonText,
  price,
  cartButton,
}: ICard) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <div className="card-item">
        <div className="card-item-wrap">
          <div className="card-item-lang">{courseIcon}</div>
          <div className="card-item-title">{title}</div>
          <div className="card-item-descr">{descr}</div>
          <div className="card-item-price">{price}</div>
          <div className="btn-card-group">
            <Button>{buttonText}</Button>
            {cartButton}
          </div>
        </div>
      </div>
    </li>
  )
}

export default Card
