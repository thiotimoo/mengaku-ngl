
import { useRouter } from 'next/navigation';
import React from 'react'
import prisma from '@/libs/prisma'

interface PageProps {
  params: {
    keyword: string;
  };
}

const Page: React.FC<PageProps> = async ({params}) => {
  const {keyword} = params;
  const decodedKeyword = decodeURI(keyword);
  const targetUser = await prisma.user.findUnique({
    where: {
      id: decodedKeyword,
    },
  })
  return (
    <div className='flex flex-col max-w-screen-sm m-auto w-full min-h-screen p-6 gap-3 justify-center'>
      <h3 className='font-semibold text-3xl'>mengaku ke</h3>
      <h3 className='font-medium text-lg bg-white text-black w-max px-1'>{targetUser?.name}</h3>
      <h3 className='font-semibold text-sm tracking-wider text-zinc-400'>Pesanmu akan dikirim secara anonim</h3>
      <textarea cols={40} rows={5} className="resize-none bg-white text-black shadow-lg rounded-lg p-3" placeholder='Write something here...'/>
      <button className='font-bold rounded-md p-3 bg-yellow-200 text-black transition-all duration-100 hover:bg-white'>Send</button>
    </div>
  )
}

export default Page