import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

interface ILesson {
  title: string
  url: string
}

interface ICourseContentViewerAccordion {
  title: string
  lessons: ILesson[]
}

const CourseContentViewerAccordion = ({
  title,
  lessons,
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
              <div className="viewer-lesson-wrap">
                <li className="viewer-lesson-title" key={index}>
                  <a
                    href={lesson.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {lesson.title}
                  </a>
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
