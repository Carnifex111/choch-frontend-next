import { truncateString } from '@/utils/truncateString'
import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

interface ILesson {
  id: number
  title: string
  url: string
}

interface ICourseContentViewerAccordion {
  title: string
  lessons: ILesson[]
  onLessonSelect: (lesson: ILesson) => void
  selectedLesson: any
}

const CourseContentViewerAccordion = ({
  title,
  lessons,
  onLessonSelect,
  selectedLesson,
}: ICourseContentViewerAccordion) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          <AiFillCaretDown />
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {lessons.map((lesson, index) => (
              <div className="viewer-lesson-wrap" key={index}>
                <li
                  style={{ cursor: 'pointer' }}
                  className={
                    selectedLesson && lesson.id === selectedLesson.id
                      ? 'current-lesson'
                      : ''
                  }
                  onClick={() => onLessonSelect(lesson)}
                >
                  {truncateString(lesson.title, 25)}
                </li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default CourseContentViewerAccordion
