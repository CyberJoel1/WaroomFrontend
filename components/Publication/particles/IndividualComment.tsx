import { ChatBubbleLeftRightIcon, HandRaisedIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Image from 'next/image'
type Props = {}

const IndividualComment = (props: Props) => {
    return (
        <div className='w-full  flex flex-row mb-2'>
            <div className='min-w-[55px] h-11 relative'>

                <Image src={'/foto1.jpg'} alt={'Hola'} fill className='rounded-full border-solid border-2 border-sky-100 cursor-pointer'></Image>
            </div>
            <div className=' text-opacity-90 text-black ml-1 p-1 rounded-md pt-[5px] bg-slate-300 px-3'>
                <p className='h-[0.9rem] text-sm font-bodyFont font-light mb-1'>Joel Velasco</p>
                <p className='min-h-text-[0.80rem]  text-justify text-base break-all h-auto'>Que linda casa</p>

            </div>
        </div>
    )
}

export default IndividualComment