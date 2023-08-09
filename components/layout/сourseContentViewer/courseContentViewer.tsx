import CourseContentViewerAccordion from '@/components/elements/CourseContentViewerAccordion'
import VideoPlayer from '@/components/elements/video-player'
import { $oneCourse } from '@/context/oneCourse'
import { useStore } from 'effector-react'

const courseData = {
  id: 1,
  modules: [
    {
      id: 1,
      title: 'Модуль 1',
      lessons: [
        {
          id: 1,
          title: 'Почему NestJS?',
          url: 'google.com',
        },
        {
          id: 1,
          title: 'Как устроен курс',
          url: 'google.com',
        },
        {
          id: 1,
          title: 'Обзор проекта',
          url: 'google.com',
        },
        {
          id: 1,
          title: 'Update - Обзор курсов',
          url: 'google.com',
        },
      ],
    },
  ],
}

const CourseContentViewer = () => {
  const lessons = courseData.modules[0].lessons
  const course = useStore($oneCourse)
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
          <h1>CHOCH | Frontend-разработчик</h1>
        </div>
        <div className="viewer-right-block-menu">
          <CourseContentViewerAccordion
            title="Модуль 1: Введение"
            lessons={lessons}
          />
          <CourseContentViewerAccordion
            title="Модуль 2: Настройка окружения"
            lessons={lessons}
          />
          <CourseContentViewerAccordion
            title="Модуль 3: Введение в Typescript"
            lessons={lessons}
          />
          <CourseContentViewerAccordion
            title="Модуль 4: Введение в модули"
            lessons={lessons}
          />
          <CourseContentViewerAccordion
            title="Модуль 5: Введение в контроллеры"
            lessons={lessons}
          />
          <CourseContentViewerAccordion
            title="Модуль 6: Введение в провайдеры"
            lessons={lessons}
          />
        </div>
      </div>
    </div>
  )
}

export default CourseContentViewer
