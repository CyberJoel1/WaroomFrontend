import React, { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { TextInput } from 'flowbite-react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
type Props = {
    setData: Dispatch<SetStateAction<boolean>>;
    data: boolean;
}


const InsertComment = (props: Props) => {

    return (
        <div className='w-full  flex flex-row mb-2'>
            <div className='w-11 h-11 relative'>

                <Image src={'/foto1.jpg'} alt={'Hola'} fill className='rounded-full border-solid border-2 border-sky-200 cursor-pointer'></Image>
            </div>
            <div className=' text-opacity-90 text-black ml-1 p-1 grow h-full font-sans'>
            <input type="text" id="last" name="last" placeholder='Escribe un comentario...' className='rounded-full w-full min-h-text-[0.80rem]  text-justify text-base break-all h-auto' />

            </div>
            <div className='w-fit p-2 text-center bg-slate-300 flex hover:bg-slate-400 cursor-pointer h-9 text-black rounded-lg'>
                <p className='self-center'>Publicar</p>
            </div>
        </div>
    )
}

export default InsertComment