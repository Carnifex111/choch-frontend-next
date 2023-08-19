import { checkUserAuthFx } from '@/app/api/auth'
import {
  getCurrentLessonFx,
  getDataWatchCourse,
  getOneLesson,
  updateCurrentLessonFx,
} from '@/app/api/courses'
import CourseContentViewerAccordion from '@/components/elements/CourseContentViewerAccordion'
import VideoPlayer from '@/components/elements/video-player'
import { $watchCourse } from '@/context/courseWatch'
import { $selectedLesson, setSelectedLesson } from '@/context/current-lesson'
import { $user } from '@/context/user'
import { useStore } from 'effector-react'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const CourseContentViewer = ({ courseId }: { courseId: number }) => {
  const course = useStore($watchCourse)
  const selectedLesson = useStore($selectedLesson)

  const loadCurrentLesson = async () => {
    try {
      const userData = await checkUserAuthFx('/users/login-check')

      const currentLesson = await getCurrentLessonFx({
        userId: userData.userId,
        courseId,
      })

      const lesson = await getOneLesson({ lessonId: currentLesson })
      setSelectedLesson(lesson)
    } catch {}
  }

  const onLessonSelect = async (lesson: any) => {
    const userData = await checkUserAuthFx('/users/login-check')
    const userId = userData.userId
    const courseId = course.id
    const lessonId = lesson.id

    try {
      setSelectedLesson(lesson)
      updateCurrentLessonFx({ userId, courseId, lessonId })
    } catch (error) {
      toast.error((error as Error).message)
    }
  }

  useEffect(() => {
    getDataWatchCourse({ courseId })
    loadCurrentLesson()
  }, [])

  return (
    <div className="viewer">
      <div className="viewer-left">
        <VideoPlayer
          className="video-player"
          poster={course.start_lesson_logo}
          linkToVideo={
            selectedLesson ? selectedLesson.url : course.start_lesson
          }
        />
        <div className="viewer-left-materials">
          <div className="viewer-left-materials-title">
            <h2>Материалы урока:</h2>
            <ul>
              <li>
                <a
                  className="viewer-left-materials-item"
                  href="https://developer.mozilla.org/"
                >
                  Материал 1
                </a>
              </li>
              <li>
                <a
                  className="viewer-left-materials-item"
                  href="https://developer.mozilla.org/"
                >
                  Материал 2
                </a>
              </li>
              <li>
                <a
                  className="viewer-left-materials-item"
                  href="https://developer.mozilla.org/"
                >
                  Материал 3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="viewer-right">
        <div className="viewer-right-block-title">
          <h1>CHOCH | {course.course_name}</h1>
        </div>
        <div className="viewer-right-block-menu">
          {course &&
            course.modules &&
            course.modules.map((module, index) => (
              <CourseContentViewerAccordion
                key={index}
                title={module.title}
                lessons={module.lessons}
                onLessonSelect={onLessonSelect}
                selectedLesson={selectedLesson}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CourseContentViewer
