import '../styles/global.css'
import type { AppProps } from 'next/app'
import { PostProvider } from '../Hooks/usePostData'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </PostProvider>
  )
}
