import { useRef } from 'react'
import Header from '../modules/header/header'
import MainBlock from '../modules/main/mainBlock'
import Lang from '../modules/lang/lang'
import Courses from '../modules/courses/Courses'
import Footer from '../modules/footer/footer'
import Question from '../modules/question/question'

const HomePage = () => {
  const langRef = useRef<HTMLDivElement>(null)
  const courseRef = useRef<HTMLDivElement>(null)

  const scrollTo = (nameRef: any) => {
    if (nameRef.current) {
      window.scrollTo({
        top: nameRef.current.offsetTop,
        behavior: 'smooth',
      })
    }
  }
  return (
    <>
      <Header />
      <div className="body_wrapper">
        <MainBlock scrollToLang={() => scrollTo(langRef)} />
        <Lang ref={langRef} scrollToCourse={() => scrollTo(courseRef)} />
        <Courses ref={courseRef} />
        <Question />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
