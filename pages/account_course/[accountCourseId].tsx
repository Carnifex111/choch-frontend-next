import { getCourseFx, getUserCoursesFx } from '@/app/api/courses'
import { $oneCourse, setOneCourse } from '@/context/oneCourse'
import { IQueryParamsWatchCourse } from '@/types/course'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Custom404 from '../404'
import Head from 'next/head'
import { checkUserAuthFx } from '@/app/api/auth'
import { useRouter } from 'next/router'
import CourseContentViewer from '@/components/layout/сourseContentViewer/courseContentViewer'

const AccountCoursePage = ({ query }: { query: IQueryParamsWatchCourse }) => {
  const oneCourse = useStore($oneCourse)
  const [error, setError] = useState(false)
  const errorRouter = useRouter()
  const url = '/users'

  useEffect(() => {
    loadOneCourse()
  }, [])

  const loadOneCourse = async () => {
    try {
      const userData = await checkUserAuthFx('/users/login-check')
      const userCourses = await getUserCoursesFx({
        userId: userData.userId,
        url,
      })
      console.log(userData)
      const isEnrolled = userCourses.some(
        (course: any) => course.courseId == parseInt(query.accountCourseId)
      )

      console.log(isEnrolled)
      if (!isEnrolled) {
        errorRouter.push('/403')
        toast.error('Вы не записаны на данный курс')
        return
      }

      const data = await getCourseFx(
        `http://localhost:3000/course/find/${query.accountCourseId}`
      )

      if (!data) {
        setError(true)
        return
      }

      setOneCourse(data)
      console.log(data)
    } catch (error) {
      toast.error('Произошла ошибка при загрузке курса')
    }
  }

  return error ? (
    <Custom404 />
  ) : (
    <>
      <Head>
        <title>CHOCH | {oneCourse.course_name}</title>
      </Head>
      <>
        <CourseContentViewer courseId={parseInt(query.accountCourseId)} />
      </>
      <br />
      <br />
    </>
  )
}

export async function getServerSideProps(context: {
  query: IQueryParamsWatchCourse
}) {
  return {
    props: { query: { ...context.query } },
  }
}

export default AccountCoursePage
