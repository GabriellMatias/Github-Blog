import Head from 'next/head'
import Link from 'next/link'

import { BsBoxArrowUpRight, BsCalendar, BsChevronLeft } from 'react-icons/bs'
import { FaComment, FaGithub } from 'react-icons/fa'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { usePostData } from '../../Hooks/usePostData'

import { formatDate } from '../../utils/formatDate'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

import ReactMarkdown from 'react-markdown'

export default function Post() {
  const { FormattedPostData } = usePostData()
  const { query } = useRouter()

  const currentPost = FormattedPostData.items?.find((post) => {
    return query.id === String(post.number)
  })
  if (!currentPost) {
    toast.error('Post Not Found!')
    return
  }
  console.log(typeof currentPost.body)
  /* STRING */

  return (
    <>
      <div className="flex flex-col items-center  ">
        <Head>
          <title>Github Blog | Post</title>
        </Head>
        <Header />
        <div className="bg-base-profile max-w-[864px] w-full h-[168px] rounded-md flex mt-[-4.4rem] mobile:max-w-[400px] mobile:h-[200px]">
          <div className="flex flex-col mx-8 w-full">
            <div className="text-base-title flex justify-between items-center mt-10">
              <Link href="/" legacyBehavior>
                <a
                  href=""
                  className="text-blue font-bold text-xs flex gap-2 items-center hover:underline"
                >
                  <BsChevronLeft />
                  BACK
                </a>
              </Link>
              <a
                href={currentPost.html_url}
                className="text-blue font-bold text-xs flex gap-2 items-center hover:underline"
              >
                GITHUB
                <BsBoxArrowUpRight />
              </a>
            </div>
            <h1 className="font-bold text-xl text-base-title mt-5 mb-2">
              {currentPost.title}
            </h1>
            <div className="flex gap-4 ">
              <span className="flex gap-2 items-center text-base-subtitle">
                <FaGithub className="text-base-label" />
                {currentPost.user.login}
              </span>
              <span className="flex gap-2 items-center text-base-subtitle">
                <BsCalendar className="text-base-label" />
                {formatDate(currentPost.created_at)}
              </span>
              <span className="flex gap-2 items-center text-base-subtitle">
                <FaComment className="text-base-label" />
                {currentPost.comments}
              </span>
            </div>
          </div>
        </div>

        <article className="max-w-[864px] w-full my-8 px-6 text-base-text">
          <ReactMarkdown>{currentPost.body}</ReactMarkdown>
          {/* ERRO DE MARKDOWN */}
        </article>
      </div>
      <Footer />
    </>
  )
}
