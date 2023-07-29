import { getCourseFx } from '@/app/api/courses'
import { $oneCourse, setOneCourse } from '@/context/oneCourse'
import { IQueryParams } from '@/types/course'
import { useStore } from 'effector-react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Custom404 from '../404'
import Header from '@/components/modules/header/header'
import CourseIntro from '@/components/modules/coursePage/courseIntro'

const CoursePage = ({ query }: { query: IQueryParams }) => {
  const oneCourse = useStore($oneCourse)
  const [error, setError] = useState(false)

  useEffect(() => {
    loadOneCourse()
  }, [])

  const loadOneCourse = async () => {
    try {
      const data = await getCourseFx(
        `http://localhost:3000/course/find/${query.partId}`
      )

      if (!data) {
        setError(true)
        return
      }

      setOneCourse(data)
      console.log(data)
    } catch (error) {
      toast.error
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
        <Header />
        <CourseIntro />
      </>
      <br />
      <br />
    </>
  )
}

export async function getServerSideProps(context: { query: IQueryParams }) {
  return {
    props: { query: { ...context.query } },
  }
}

export default CoursePage
