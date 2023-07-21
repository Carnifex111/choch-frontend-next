import Card from '@/components/elements/card'
import { forwardRef } from 'react'

const Lang = forwardRef(({ scrollToCourse }: any, ref: any) => {
  return (
    <div ref={ref} className="lang-block">
      <div className="lang-block-img">
        <img src="/img/planet-home.svg" />
      </div>
      <div className="lang-block-title">
        <h2>Новичок в программировании? Выбирай язык</h2>
        <p>Как говорят великие «Выбирая язык, ты выбираешь судьбу!»</p>
      </div>
      <div className="lang-block-items">
        <Card
          courseIcon="Py"
          title="Python"
          descr="Стань крутым хацкером!"
          price="Бесплатный курс!"
          buttonText="Выбрать язык!"
        />
        <Card
          courseIcon="JS + TS"
          title="JS + TS"
          descr="Сделай крутой сайт!"
          price="Бесплатный курс!"
          buttonText="Выбрать язык!"
        />
        <Card
          courseIcon="С#"
          title="С#"
          descr="Начни делать инди-игры!"
          price="Бесплатный курс!"
          buttonText="Выбрать язык!"
        />
      </div>
      <div className="all-course">
        <h3 onClick={scrollToCourse}>
          Знаешь что такое цикл?
          <br /> Тогда тебе в курсы для продвинутых!
        </h3>
      </div>
    </div>
  )
})

export default Lang
