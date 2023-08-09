import { getUserCoursesFx } from '@/app/api/courses'
import Button from '@/components/elements/button'
import Card from '@/components/elements/cart/card'
import CartButton from '@/components/elements/cart/cart-button'
import WatchButton from '@/components/elements/watchButton'
import Header from '@/components/modules/header/header'
import { $user } from '@/context/user'
import { $userCourses, setUserCourse } from '@/context/userCourse'
import { useStore } from 'effector-react'
import { useEffect } from 'react'

const AccountHome = () => {
  const user = useStore($user)
  const userCourses = useStore($userCourses)
  const userId = user?.userId
  const url = '/users'

  useEffect(() => {
    if (userId) {
      getUserCoursesFx({ userId, url })
    }
  }, [userId])

  useEffect(() => {
    console.log(userCourses)
  }, [userCourses])

  return (
    <>
      <Header />
      <div className="home">
        <h2 className="home-title">Личный кабинет</h2>
        {userCourses.length ? (
          <div>
            <h3 className="home-subtitle">Мои курсы:</h3>
            <div className="home-wrap">
              {Array.isArray(userCourses) ? (
                userCourses.map((course, index) => (
                  <>
                    <Card
                      key={course.course.id}
                      courseIcon={course.course.course_logo}
                      title={course.course.course_name}
                      buttonText="Учиться!"
                      courseId={course.course.id}
                      link_to_page={`/account_course/${course.course.id}`}
                    />
                  </>
                ))
              ) : (
                <p>Загрузка курсов...</p>
              )}
            </div>
          </div>
        ) : (
          <div className="home-no-course">
            На данный момент вы еще не приобрели ни одного курса.
          </div>
        )}
      </div>
    </>
  )
}

export default AccountHome
