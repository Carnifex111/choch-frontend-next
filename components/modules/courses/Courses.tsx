import { checkUserAuthFx } from '@/app/api/auth'
import { getCoursesFx } from '@/app/api/courses'
import Card from '@/components/elements/cart/card'
import CartButton from '@/components/elements/cart/cart-button'
import { $courses, setCourse } from '@/context/course'
import useUserCheckAuth from '@/hooks/useUserCheckAuth'
import { useStore } from 'effector-react'
import { forwardRef, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const Courses = forwardRef((props, ref: any) => {
  const coursesStore = useStore($courses)
  const user = useUserCheckAuth()
  const loadCourse = async () => {
    try {
      const data = await getCoursesFx('/course?limit=20&offset=0')

      setCourse(data)
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  useEffect(() => {
    loadCourse()
  }, [])

  return (
    <div ref={ref} className="courses-block">
      <div className="courses-block-title">Все курсы</div>
      <div className="courses-block-items">
        {coursesStore &&
          coursesStore.rows &&
          coursesStore.rows.map((item) => (
            <Card
              key={item.id}
              courseIcon={item.course_logo}
              title={item.course_name}
              price={`${item.price} ₽`}
              descr={item.you_learn}
              buttonText="Подробнее..."
              cartButton={user ? <CartButton /> : null}
            />
          ))}
      </div>
      <div className="courses-block-img">
        <img src="/img/stars.png" />
      </div>
    </div>
  )
})

export default Courses
