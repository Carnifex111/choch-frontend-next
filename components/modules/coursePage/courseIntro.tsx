import VideoPlayer from '../../elements/video-player'
import Button from '@/components/elements/button'
import Accordion from '@/components/elements/accordion'
import { $oneCourse } from '@/context/oneCourse'
import { useStore } from 'effector-react'
import { jsonparse } from '@/utils/jsonparse'
import { $user } from '@/context/user'
import Link from 'next/link'
import ROUTES from '@/utils/routes.enum'
import { $disableCart } from '@/context/shopping-cart'
import { addToCart, deleteItem } from '@/utils/shopping-cart'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'

const CourseIntro = ({}) => {
  const course = useStore($oneCourse)
  const user = useStore($user)
  const partId = course.id
  const disableCart = useStore($disableCart)
  const [isHovered, setIsHovered] = useState(false)

  const course_content = jsonparse(course.course_content)
  const you_learn = jsonparse(course.you_learn)
  const module_descr = jsonparse(course.module)
  const logo = jsonparse(course.images)

  return (
    <div className="intro">
      <div className="intro-wrap">
        <div className="intro-wrap-block-title">
          <div className="intro-wrap-block-title-left">
            <div className="intro-wrap-block-title-left-name">
              <h1>{course.course_name}</h1>
            </div>
            <div className="intro-wrap-block-title-left-descr">
              Краткое содержание курса:
            </div>
            <div className="intro-wrap-block-title-left-list">
              <ul>
                {course_content.map((item: any, i: any) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="intro-wrap-block-title-right">
            <div className="intro-wrap-block-title-right-img">
              <img src={course.start_lesson_logo} alt="" />
            </div>
            <div className="course-intro-wrap-block-title-price">
              {course.price} ₽
            </div>
            <div className="course-intro-wrap-block-title-pay">
              <Button>Купить</Button>
            </div>
          </div>
        </div>
        <div className="intro-wrap-block-video">
          <div className="intro-wrap-block-video-title">Стартовый урок</div>
          <VideoPlayer
            poster={course.start_lesson_logo}
            linkToVideo={course.start_lesson}
          />
        </div>
        <div className="intro-wrap-block-learn">
          <div className="intro-wrap-block-learn-list">
            <div className="intro-wrap-block-learn-title">
              Чему вы научитесь:
            </div>
            <ul>
              {you_learn.map((item: any, i: any) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="intro-wrap-block-materials">
          <div className="intro-wrap-block-materials-title">
            Содержание курса
          </div>
          <div className="intro-wrap-block-materials-descr">
            {module_descr.map((item: any, i: any) => (
              <Accordion title={`Модуль ${i + 1}`} content={item} />
            ))}
          </div>
        </div>
      </div>
      <div className="intro-aside">
        <div className="intro-aside-wrap">
          <div className="intro-aside-wrap-img">
            <img src={logo[0]} />
          </div>
          <div className="intro-aside-wrap-price">{course.price} ₽</div>
          <div className="intro-aside-wrap-btn">
            {user ? (
              <div>
                {disableCart[partId] ? (
                  <div
                    style={
                      isHovered
                        ? { border: '1px solid #BC5D58' }
                        : { border: '1px solid #73cbf3' }
                    }
                    className="cart-button-add"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered ? (
                      <div
                        onClick={() => deleteItem(partId, user)}
                        style={{
                          display: 'flex',
                          width: '100%',
                          justifyContent: 'center',
                        }}
                      >
                        <MdDelete
                          style={{
                            color: '#BC5D58',
                            fontSize: '25px',
                            paddingRight: '5px',
                          }}
                        />
                        <p
                          style={{
                            color: '#BC5D58',
                          }}
                        >
                          Удалить из корзины
                        </p>
                      </div>
                    ) : (
                      <>
                        <BsFillCartPlusFill
                          style={{
                            color: '#73cbf3',
                            fontSize: '25px',
                            paddingRight: '5px',
                          }}
                        />
                        Товар в корзине
                      </>
                    )}
                  </div>
                ) : (
                  <Button onClick={() => addToCart(partId, user)}>
                    Добавить в корзину
                  </Button>
                )}
              </div>
            ) : (
              <Link href={ROUTES.SINGIN}>
                <Button>Купить</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseIntro
