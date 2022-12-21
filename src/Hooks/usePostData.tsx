import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

export interface PostDataProps {
  total_count: number
  items: [
    {
      title: string
      body: string
      created_at: string
      comments: number
      html_url: string
      number: string
      user: {
        login: string
      }
    },
  ]
}

interface PostContextProps {
  FormattedPostData: PostDataProps
  loadPostData: (query?: string) => Promise<void>
}

interface PostProviderProps {
  children: ReactNode
}

const PostContext = createContext<PostContextProps>({} as PostContextProps)

export function PostProvider({ children }: PostProviderProps) {
  const [FormattedPostData, setFormattedPostData] = useState<PostDataProps>(
    {} as PostDataProps,
  )

  async function loadPostData(query: string = '') {
    try {
      /* sem uso, retornando undefined */
      const userName = process.env.GITHUB_USERNAME
      const repoName = process.env.GITHUB_REPONAME
      console.log(userName, repoName)

      const response = await api.get('/search/issues', {
        params: {
          /* GabriellMatias/challenger-03-GitHub-Blog */
          q: `${query}repo:GabriellMatias/challenger-03-GitHub-Blog`,
        },
      })
      setFormattedPostData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadPostData()
  }, [])

  return (
    <PostContext.Provider value={{ FormattedPostData, loadPostData }}>
      {children}
    </PostContext.Provider>
  )
}
/* tipagem */
export function usePostData(): PostContextProps {
  const context = useContext(PostContext)
  return context
}
