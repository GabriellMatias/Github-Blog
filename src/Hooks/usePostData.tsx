import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../pages/api/api'

interface PostProviderProps {
  children: ReactNode
}
interface PostDataProps {
  title: string
  body: string
  created_at: string
  comments: number
  html_url: string
  user: {
    login: string
  }
}
const PostContext = createContext<PostDataProps>({} as PostDataProps)

export function PostProvider({ children }: PostProviderProps) {
  const [FormattedPostData, setFormattedPostData] = useState<PostDataProps>(
    {} as PostDataProps,
  )
  async function loadPostData() {
    const UnformattedPostData = await api.get<PostDataProps>('/search/issues', {
      params: {
        q: 'user:GabriellMatias',
      },
    })
    const response = UnformattedPostData.data
    
    setFormattedPostData({
      title: response.title,
      body: response.body,
      created_at: response.created_at,
      comments: response.comments,
      html_url: response.html_url,
      user: {
        login: response.user.login,
      },
    })
  }
  useEffect(() => {
    loadPostData()
  }, [])

  return (
    <PostContext.Provider value={FormattedPostData}>
      {children}
    </PostContext.Provider>
  )
}
/* tipagem */
export function usePostData(): PostDataProps {
  const context = useContext(PostContext)
  return context
}
