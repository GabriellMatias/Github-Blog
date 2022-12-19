import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../services/api'

export interface PostDataProps {
  items: [
    {
      title: string
      body: string
      created_at: string
      comments: number
      html_url: string
      user: {
        login: string
      }
    },
  ]
}

interface PostContextProps {
  FormattedPostData: PostDataProps
}

interface PostProviderProps {
  children: ReactNode
}

const PostContext = createContext<PostContextProps>({} as PostContextProps)

export function PostProvider({ children }: PostProviderProps) {
  const [FormattedPostData, setFormattedPostData] = useState<PostDataProps>(
    {} as PostDataProps,
  )

  const loadPostData = useCallback(async (query: string = '') => {
    try {
      const response = await api.get('/search/issues', {
        params: {
          /* `${query}%20repo:${process.env.GITHUB_USERNAME}/${process.env.GITHUB_REPONAME}` */
          q: 'user:GabriellMatias',
        },
      })
      setFormattedPostData(response.data)
    } catch (error) {
      console.log(error)
    }
  }, [])
  // async function loadPostData(query: string = '') {
  //   // const PostFormattedData: PostDataProps = {
  //   //   title: PostResponse.title,
  //   //   body: PostResponse.body,
  //   //   created_at: PostResponse.created_at,
  //   //   comments: PostResponse.comments,
  //   //   html_url: PostResponse.html_url,
  //   //   user: {
  //   //     login: PostResponse.user.login,
  //   //   },
  //   // }
  // }

  useEffect(() => {
    loadPostData()
  }, [loadPostData])

  return (
    <PostContext.Provider value={{ FormattedPostData }}>
      {children}
    </PostContext.Provider>
  )
}
/* tipagem */
export function usePostData(): PostContextProps {
  const context = useContext(PostContext)
  return context
}
