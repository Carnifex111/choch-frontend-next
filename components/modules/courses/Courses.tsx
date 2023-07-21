import Card from '@/components/elements/card'
import { forwardRef } from 'react'

const Courses = forwardRef((props, ref: any) => {
  return (
    <div ref={ref} className="courses-block">
      <div className="courses-block-title">Все курсы</div>
      <div className="courses-block-items">
        <Card
          courseIcon="Py"
          title="Python"
          descr="Стань крутым хацкером!"
          price="300 рублей"
          buttonText="Обучиться сейчас"
        />

        <Card
          courseIcon="Py"
          title="Python"
          descr="Стань крутым хацкером!"
          price="300 рублей"
          buttonText="Обучиться сейчас"
        />
        <Card
          courseIcon="Py"
          title="Python"
          descr="Стань крутым хацкером!"
          price="300 рублей"
          buttonText="Обучиться сейчас"
        />
        <Card
          courseIcon="Py"
          title="Python"
          descr="Стань крутым хацкером!"
          price="300 рублей"
          buttonText="Обучиться сейчас"
        />
        <Card
          courseIcon="Py"
          title="Python"
          descr="Стань крутым хацкером!"
          price="300 рублей"
          buttonText="Обучиться сейчас"
        />
        <Card
          courseIcon="Py"
          title="Python"
          descr="Стань крутым хацкером!"
          price="300 рублей"
          buttonText="Обучиться сейчас"
        />
      </div>
      <div className="courses-block-img">
        <img src="/img/stars.png" />
      </div>
    </div>
  )
})

export default Courses
