import Head from 'next/head'
import { BsBoxArrowUpRight, BsCalendar, BsChevronLeft } from 'react-icons/bs'
import { FaComment, FaGithub } from 'react-icons/fa'
import { Header } from '../../components/Header'

export default function Post() {
  return (
    <div className="flex flex-col items-center ">
      <Head>
        <title>Github Blog | Post</title>
      </Head>
      <Header />
      <div className="bg-base-profile max-w-[864px] w-full h-[168px] rounded-md flex mt-[-4.4rem]">
        <div className="flex flex-col mx-8 w-full">
          <div className="text-base-title flex justify-between items-center mt-10">
            <a
              href=""
              className="text-blue font-bold text-xs flex gap-2 items-center hover:underline"
            >
              <BsChevronLeft />
              BACK
            </a>
            <a
              href=""
              className="text-blue font-bold text-xs flex gap-2 items-center hover:underline"
            >
              GITHUB
              <BsBoxArrowUpRight />
            </a>
          </div>
          <h1 className="font-bold text-xl text-base-title mt-5 mb-2">
            JavaSrcipt data types and data structure
          </h1>
          <div className="flex gap-4 ">
            <span className="flex gap-2 items-center text-base-subtitle">
              <FaGithub className="text-base-label" />
              GabrielMatias
            </span>
            <span className="flex gap-2 items-center text-base-subtitle">
              <BsCalendar className="text-base-label" />
              Ha 1 dia
            </span>
            <span className="flex gap-2 items-center text-base-subtitle">
              <FaComment className="text-base-label" />
              Comentarios
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
