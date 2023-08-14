import { getDataWatchCourse } from '@/app/api/courses'
import CourseContentViewerAccordion from '@/components/elements/CourseContentViewerAccordion'
import VideoPlayer from '@/components/elements/video-player'
import { setCourse } from '@/context/course'
import { $watchCourse } from '@/context/courseWatch'
import { $oneCourse } from '@/context/oneCourse'
import { useStore } from 'effector-react'
import { useEffect } from 'react'

const CourseContentViewer = ({ courseId }: { courseId: number }) => {
  const course = useStore($watchCourse)

  useEffect(() => {
    getDataWatchCourse({ courseId })
  }, [])

  return (
    <div className="viewer">
      <div className="viewer-left">
        <VideoPlayer
          className="video-player"
          poster={course.start_lesson_logo}
          linkToVideo={course.start_lesson}
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
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CourseContentViewer
