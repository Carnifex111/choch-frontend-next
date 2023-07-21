import Button from '@/components/elements/button'

const MainBlock = ({ scrollToLang }: any) => {
  return (
    <div className="main-block-wrap">
      <div className="main-block-left">
        <div className="main-block-left-title">IT - это про свободу!</div>
        <div className="main-block-left-paragraf">
          Начни учиться сегодня и открой для себя мир программирования! Если ты
          хочешь научиться создавать сайты, приложения или игры, то наши курсы
          по программированию – это именно то, что тебе нужно.
        </div>
        <div className="main-block-left-btn">
          <Button onClick={scrollToLang}>Начать кодить!</Button>
        </div>
      </div>
      <div className="main-block-right">
        <div className="main-block-right-img">
          <img src="/img/Rocket-main.png" alt="Ракета не прогрузилась =(" />
        </div>
      </div>
    </div>
  )
}

export default MainBlock
