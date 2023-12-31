import Link from 'next/link'

const Custom403 = () => {
  return (
    <>
      <div className="flex-container">
        <div className="text-center">
          <h1>
            <span className="fade-in" id="digit1">
              Ч
            </span>
            <span className="fade-in" id="digit2">
              О
            </span>
            <span className="fade-in" id="digit3">
              Ч
            </span>
          </h1>
          <h3 className="fadeIn">У вас нет доступа к данному курсу</h3>
          <Link href="/">
            <button type="button" className="btn-404" name="button">
              Вернуться на главную
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Custom403
