import { HomeIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {}

const InfoPrincipal = (props: Props) => {
  return (
    <div className='flex flex-row items-center'>

    <div className='flex-1 h-[90%] my-3  mx-1  grid grid-cols-1 gap-4 place-items-center border-r-2 border-gray-300'>
      <div className='flex flex-row items-center self-center'>
        <HomeIcon className='w-5'></HomeIcon>
        <p className='pl-2 text-xs md:text-base'>2 Habitaciones</p>
      </div>

    </div>
    <div className='flex-1 h-[90%] my-3  mx-1  grid grid-cols-1 gap-4 place-items-center'>
      <div className='flex flex-row items-center self-center'>
        <HomeIcon className='w-5'></HomeIcon>
        <p className=' pl-2 text-xs md:text-base'>2 Baños</p>
      </div>
    </div>
    <div className='flex-1 h-[90%] my-3 mx-1  grid grid-cols-1 gap-4 place-items-center border-l-2 border-gray-300'>
      <div className='flex flex-row items-center self-center'>
        <HomeIcon className='w-5'></HomeIcon>
        <p className=' pl-2 text-xs md:text-base'>234 m²</p>
      </div>
    </div>
  </div>
  )
}

export default InfoPrincipal