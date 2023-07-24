import Button from './button'

interface ICard {
  key: string | number
  courseIcon: string
  title: string
  descr: string
  buttonText: string
  price?: string
}

const Card = ({ key, courseIcon, title, descr, buttonText, price }: ICard) => {
  return (
    <li style={{ listStyle: 'none' }} key={key}>
      <div className="card-item">
        <div className="card-item-wrap">
          <div className="card-item-lang">{courseIcon}</div>
          <div className="card-item-title">{title}</div>
          <div className="card-item-descr">{descr}</div>
          <div className="card-item-price">{price}</div>
          <Button>{buttonText}</Button>
        </div>
      </div>
    </li>
  )
}

export default Card
