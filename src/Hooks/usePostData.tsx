import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

export interface PostDataProps {
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}
interface PostContextProps {
  FormattedPostData: PostDataProps
  setFormattedPostData: (post: PostDataProps) => void
}
const PostContext = createContext<PostContextProps>({} as PostContextProps)

export function PostProvider(children: ReactNode) {
  const [FormattedPostData, setFormattedPostData] = useState<PostDataProps>(
    {} as PostDataProps,
  )
  async function loadPostData() {
    const PostUnformattedData = await api.get('/search/issues', {
      params: {
        q: 'user:GabriellMatias',
      },
    })
    const PostResponse = PostUnformattedData.data.items
    console.log(PostUnformattedData.data)

    const PostFormattedData: PostDataProps = {
      title: PostResponse.title,
      body: PostResponse.body,
      created_at: PostResponse.created_at,
      comments: PostResponse.comments,
      html_url: PostResponse.html_url,
      user: {
        login: PostResponse.user.login,
      },
    }

    setFormattedPostData(PostFormattedData)
  }
  useEffect(() => {
    loadPostData()
  }, [])

  return (
    <PostContext.Provider value={{ FormattedPostData, setFormattedPostData }}>
      {children}
    </PostContext.Provider>
  )
}
/* tipagem */
export function usePostData(): PostContextProps {
  const context = useContext(PostContext)
  return context
}
