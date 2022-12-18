import Link from 'next/link'

export function Cards() {
  return (
    <Link
      href="/post"
      className=" bg-base-post w-[414px] h-[258px] rounded-xl hover:border-2 hover:border-base-label"
    >
      <div className="flex justify-between m-8">
        <h1 className="font-bold text-xl text-base-title w-[283px] ">
          JavaSrcipt data types and data structure
        </h1>
        <span className="text-sm text-base-span mt-1">Há 1 dia</span>
      </div>
      <div className="m-8">
        <p className="text-base text-base-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          ipsa totam! Numquam ipsam quo harum, eius optio odit doloremque totam
          ea, itaque voluptates delectus alias
        </p>
      </div>
    </Link>
  )
}
