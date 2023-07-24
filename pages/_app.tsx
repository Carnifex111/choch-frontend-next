import type { AppProps } from 'next/app'
import { withHydrate } from 'effector-next'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import NextNProgress from 'nextjs-progressbar'
import 'react-toastify/dist/ReactToastify.css'
import '@/styles/globals.css'
import '@/styles/elements/input.scss'
import '@/styles/elements/button.scss'
import '@/styles/auth/login.scss'
import '@/styles/elements/spinner.scss'
import '@/styles/modules/header.scss'
import '@/styles/modules/footer.scss'
import '@/styles/modules/mainBlock.scss'
import '@/styles/elements/card.scss'
import '@/styles/modules/lang.scss'
import '@/styles/modules/courses.scss'
import '@/styles/modules/question.scss'
import '@/styles/elements/accordion.scss'

const enhance = withHydrate()

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <NextNProgress />
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-right"
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          limit={1}
          theme="light"
        />
      </>
    )
  )
}

export default enhance(App as React.FC<AppProps>)
