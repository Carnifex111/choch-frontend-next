import '@/styles/globals.css'
import '@/styles/elements/input.scss'
import '@/styles/elements/button.scss'
import '@/styles/auth/login.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
