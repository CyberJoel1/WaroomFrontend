import { ChatBubbleLeftRightIcon, HandRaisedIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Image from 'next/image'
type Props = {}

const IndividualCommentExtern = (props: Props) => {
    return (
        <div className='w-full flex flex-row mb-2 justify-end'>

            <div className=' text-opacity-90 text-black ml-1 p-1 rounded-md pt-[5px] bg-slate-400 text-right px-3'>
                <p className='h-[0.9rem] text-sm font-bodyFont font-light mb-1'>Joel Velasco</p>
                <p className='min-h-text-[0.80rem]  text-justify text-base break-all h-auto'>Que linda casa !! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
            <div className='min-w-[55px] h-11 relative'>

                <Image src={'/foto1.jpg'} alt={'Hola'} fill className='rounded-full border-solid border-2 border-sky-100 cursor-pointer'></Image>
            </div>
        </div>
    )
}

export default IndividualCommentExtern