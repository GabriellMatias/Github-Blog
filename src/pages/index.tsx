import Head from 'next/head'
import { FaGithub } from 'react-icons/fa'
import { RiGroupLine, RiBuilding4Line } from 'react-icons/ri'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Header } from '../components/Header'
import { Cards } from '../components/Cards'

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center ">
        <Head>
          <title>Github Blog | Home</title>
        </Head>
        <Header />
        <main className="max-w-[864px]">
          <div className="bg-base-profile w-full h-[212px] rounded-md flex mt-[-4.4rem]">
            <img
              className="w-[148px] h-[148px] rounded my-8 ml-10"
              src="https://github.com/GabriellMatias.png"
              alt="Profile picture"
            />
            <div className="flex flex-col mx-8">
              <div className="text-base-title flex justify-between items-center mt-10 ">
                <h1 className="font-bold text-2xl">Gabriel Matias</h1>
                <a
                  href=""
                  className="text-blue font-bold text-xs flex gap-2 hover:underline"
                >
                  GITHUB
                  <BsBoxArrowUpRight />
                </a>
              </div>
              <p className="text-base-text mt-2 mb-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
                quia adipisci neque dicta in illo, nulla nihil ducimus enim? Sit
                facere tenetur
              </p>
              <div className="flex gap-4 ">
                <span className="flex gap-2 items-center text-base-subtitle">
                  <FaGithub className="text-base-label" />
                  GabrielMatias
                </span>
                <span className="flex gap-2 items-center text-base-subtitle">
                  <RiGroupLine className="text-base-label" />
                  AGU
                </span>
                <span className="flex gap-2 items-center text-base-subtitle">
                  <RiBuilding4Line className="text-base-label" />
                  Followers
                </span>
              </div>
            </div>
          </div>

          <div className="w-full mt-[72px] mb-3 flex items-center justify-between">
            <h1 className="text-base-subtitle text-lg font-bold ">
              Publications
            </h1>
            <span className="text-base-span text-sm">6 publications</span>
          </div>
          {/* olhar borda */}
          <input
            type="text"
            className="px-3 py-4 w-full bg-base-input rounded border border-base-border text-base-subtitle active:border-blue"
            placeholder="Search Content"
          />
          <section className="grid grid-cols-2 w-full mt-12 gap-8">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
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
