import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useStore } from 'effector-react'
import { toast } from 'react-toastify'
import { checkPaymentFx } from '@/app/api/payment'
import { removeFromCartFx } from '@/app/api/shopping-cart'
import Head from 'next/head'

const PaymentCheckPage = () => {
  const router = useRouter()
  const [paymentId, setPaymentId] = useState<string | null>(
    localStorage.getItem('paymentId')
  )
  const [userId, setUserId] = useState<string | null>(
    localStorage.getItem('userId')
  )
  const courseIdsString = localStorage.getItem('courses')

  useEffect(() => {
    const checkPaymentStatus = async () => {
      const retrievedArray: string[] = JSON.parse(courseIdsString || '[]')
      const numberArray: number[] = retrievedArray.map((item) => parseInt(item))
      try {
        console.log('Before checkPaymentFx call')
        const paymentCheck = await checkPaymentFx({
          url: '/payment/info',
          paymentId: paymentId,
          userId: userId,
          courseIds: numberArray,
        })
        console.log('After checkPaymentFx call')

        if (paymentCheck.status === 'succeeded') {
          toast.success('Всё готово! Добро пожаловать на обучение.')
          await removeFromCartFx(`/shopping-cart/removeAll/${userId}`)
          localStorage.removeItem('paymentId')
          localStorage.removeItem('userId')
          localStorage.removeItem('courses')
          router.push('/account/home')
        } else {
          toast.error(
            'Ошибка при проверке оплаты. Пожалуйста, свяжитесь с поддержкой.'
          )
          router.push('/account/home')
        }
      } catch (err) {
        toast.error((err as Error).message)
        router.push('/')
      }
    }

    checkPaymentStatus()
  }, [])

  return (
    <>
      <Head>
        <title>CHOCH | Проверка оплаты</title>
      </Head>
      <div className="payment-container">
        <div className="payment-text">
          <h1>
            <span className="fade-in" id="char1">
              П
            </span>
            <span className="fade-in" id="char2">
              р
            </span>
            <span className="fade-in" id="char3">
              о
            </span>
            <span className="fade-in" id="char4">
              в
            </span>
            <span className="fade-in" id="char5">
              е
            </span>
            <span className="fade-in" id="char6">
              р
            </span>
            <span className="fade-in" id="char7">
              к
            </span>
            <span className="fade-in" id="char8">
              а
            </span>
            <span className="fade-in" id="char9">
              {' '}
            </span>
            <span className="fade-in" id="char10">
              о
            </span>
            <span className="fade-in" id="char11">
              п
            </span>
            <span className="fade-in" id="char12">
              л
            </span>
            <span className="fade-in" id="char13">
              а
            </span>
            <span className="fade-in" id="char14">
              т
            </span>
            <span className="fade-in" id="char15">
              ы
            </span>
            <span className="fade-in" id="char16">
              .
            </span>
            <span className="fade-in" id="char17">
              .
            </span>
            <span className="fade-in" id="char18">
              .
            </span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default PaymentCheckPage
