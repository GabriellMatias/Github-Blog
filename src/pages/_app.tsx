import '../styles/global.css'
import type { AppProps } from 'next/app'
import { PostProvider } from '../Hooks/usePostData'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostProvider>
      <Component {...pageProps} />
    </PostProvider>
  )
}
