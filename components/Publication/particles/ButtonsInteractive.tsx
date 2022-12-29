import { ChatBubbleLeftRightIcon, HandRaisedIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const ButtonsInteractive = (props: Props) => {
  return (
    <div className='flex items-center h-[35px]'>

    <div className='flex-1 cursor-pointer rounded-lg h-[90%] my-3 hover:bg-slate-300 mx-1  grid grid-cols-1 gap-4 place-items-center'>
      <div className='flex flex-row items-center self-center'>
        <HandRaisedIcon className='w-5'></HandRaisedIcon>
        <p className=' pl-2'>Me gusta</p>
      </div>

    </div>
    <div className='flex-1 cursor-pointer rounded-lg h-[90%] my-3 hover:bg-slate-300 mx-1  grid grid-cols-1 gap-4 place-items-center'>
      <div className='flex flex-row items-center self-center'>
        <ChatBubbleLeftRightIcon className='w-5'></ChatBubbleLeftRightIcon>
        <p className=' pl-2'>Comentar</p>
      </div>
    </div>
  </div>
  )
}

export default ButtonsInteractive