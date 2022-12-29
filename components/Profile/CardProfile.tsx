"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DocumentTextIcon, HomeIcon, WrenchIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { Rating } from 'flowbite-react'
type Props = {}

const CardProfile = (props: Props) => {
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(true);
    }, []);
    if (!render) {
        return null;
    }
    return (
        <div>
            <div className=' bg-white h-[350px] pt-4 m-auto md:m-0 drop-shadow-lg'>
                <div className='w-[42%] h-[110px] relative m-auto'>
                    <Image src={'/perfil.jpg'} alt={'Hola'} fill className='rounded-full border-solid border-2 border-black cursor-pointer'></Image>
                </div>
                <p className='text-center lg:text-xl text-sm font-bodyFont tracking-[.15em] pt-3 text-gray-600'>JOEL VELASCO</p>
                <p className='text-center text-sm font-bodyFont tracking-[.15em] pt-3 text-gray-600'>Cliente jvelasco</p>
                {/* <div className='flex justify-center'>
                    <Rating className='m-auto'>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            4.95 out of 5
                        </p>
                    </Rating>
                </div> */}
                <div className='flex flex-col divide-y divide-dashed mt-7 '>
                    <Link href={{
                        pathname: '/social',

                    }}>
                        <div className='w-full h-9 flex  items-center hover:bg-blue-500 hover:text-white cursor-pointer text-blue-600' >
                            <HomeIcon className='w-6 ml-8 fill-blue-600 stroke-white' ></HomeIcon><p className='pl-3 text-md md:text-sm lg:text-md'>Inicio</p>
                        </div>
                    </Link>
                    <div className='w-full h-9 flex  items-center hover:bg-blue-500 cursor-pointer hover:text-white text-blue-600'>
                        <WrenchIcon color='text-blue-600' className='w-6 ml-8 fill-blue-600 stroke-white' ></WrenchIcon><p className='pl-3 text-md md:text-sm lg:text-md'>Ajustes</p>
                    </div>
                    <div className='w-full h-9 flex  items-center hover:bg-blue-500 cursor-pointer hover:text-white text-blue-600'>
                        <DocumentTextIcon color='text-blue-600' className='w-6 ml-8 fill-blue-600 stroke-white'></DocumentTextIcon><p className='pl-3 text-md md:text-sm lg:text-md'>Chat</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardProfile