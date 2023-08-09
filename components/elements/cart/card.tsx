import React from 'react'
import Button from '../button'
import Link from 'next/link'

interface ICard {
  courseIcon: string
  title: string
  buttonText?: string
  price?: string
  cartButton?: React.ReactNode
  courseId?: string | number
  link_to_page: string
}

const Card = ({
  courseIcon,
  title,
  buttonText,
  price,
  cartButton,
  courseId,
  link_to_page,
}: ICard) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <div className="card-item">
        <div className="card-item-wrap">
          <div className="card-item-lang">{courseIcon}</div>
          <div className="card-item-title">{title}</div>
          <br />
          <div className="card-item-price">{price}</div>
          <br />
          <div className="btn-card-group">
            <Link href={link_to_page ? link_to_page : ''}>
              <Button>{buttonText}</Button>
            </Link>
            {cartButton}
          </div>
        </div>
      </div>
    </li>
  )
}

export default Card
