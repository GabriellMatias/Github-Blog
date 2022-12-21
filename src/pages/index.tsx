import Head from 'next/head'
import { FaGithub } from 'react-icons/fa'
import { RiGroupLine, RiBuilding4Line } from 'react-icons/ri'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Header } from '../components/Header'
import { Cards } from '../components/Cards'
import { GetServerSideProps } from 'next'
import { api } from '../services/api'
import { usePostData } from '../Hooks/usePostData'
import { SearchInputForm } from '../components/SearchForm/SearchInput'

interface UserDataProps {
  userFormattedData: {
    avatar_url: string
    followers: number
    html_url: string
    name: string
    login: string
    company: string
    bio: string
  }
}

export default function Home({ userFormattedData }: UserDataProps) {
  const { FormattedPostData } = usePostData()

  return (
    <>
      <div className="flex flex-col items-center ">
        <Head>
          <title>Github Blog | Home</title>
        </Head>
        <Header />
        <main className="max-w-[864px] mobile:max-w-[500px]">
          <div className="bg-base-profile w-full h-[212px] rounded-md flex mt-[-4.4rem] mobile:flex-col mobile:h-[412px]">
            <img
              className="w-[148px] h-[148px] rounded my-8 ml-10"
              src={userFormattedData.avatar_url}
              alt="Profile picture"
            />
            <div className="flex flex-col justify-evenly mx-8 my-8 w-full mobile:my-2">
              <div className="text-base-title flex justify-between items-center mobile:justify-start mobile:gap-4">
                <h1 className="font-bold text-2xl">{userFormattedData.name}</h1>
                <a
                  href={userFormattedData.html_url}
                  className="text-blue font-bold text-xs flex gap-2 hover:underline"
                >
                  GITHUB
                  <BsBoxArrowUpRight />
                </a>
              </div>
              <p className="text-base-text mt-2 mb-6">
                {userFormattedData.bio}
              </p>
              <div className="flex gap-4 mobile:flex-col mobile:gap-1">
                <span className="flex gap-2 items-center text-base-subtitle">
                  <FaGithub className="text-base-label" />
                  {userFormattedData.login}
                </span>
                <span className="flex gap-2 items-center text-base-subtitle">
                  <RiGroupLine className="text-base-label" />
                  {userFormattedData.followers}
                </span>
                <span className="flex gap-2 items-center text-base-subtitle">
                  <RiBuilding4Line className="text-base-label" />
                  {userFormattedData.company}
                </span>
              </div>
            </div>
          </div>

          <SearchInputForm />

          <section className="grid grid-cols-2 w-full mt-12 gap-8 mobile:grid-cols-1 mobile:ml-3">
            {FormattedPostData.items?.map((post) => {
              return <Cards key={post.body} post={post} />
            })}
          </section>
        </main>
      </div>
      <div className="mt-20 bg-base-span w-full h-[1px]" />
      <footer className="m-5 flex items-center justify-end ">
        <span className="text-sm text-base-span ">
          Developer By GabriellMatias 👻
        </span>
      </footer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const userUnformattedData = await api.get('/users/GabriellMatias')
    const UserResponse = userUnformattedData.data
    const userFormattedData = {
      avatar_url: UserResponse.avatar_url,
      followers: UserResponse.followers,
      html_url: UserResponse.html_url,
      name: UserResponse.name,
      login: UserResponse.login,
      company: UserResponse.company,
      bio: UserResponse.bio,
    }
    return {
      props: {
        userFormattedData,
      },
    }
  } catch (error) {
    console.log(error)
  }

  return {
    props: {},
  }
}
