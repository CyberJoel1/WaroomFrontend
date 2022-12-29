import React from 'react'
import Image from 'next/image'
import { ArrowLeftIcon, HeartIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import FormRegister from '../../../components/Login/FormRegister'
type Props = {}

const page = (props: Props) => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='lg:rounded-l-none rounded-md w-full bg-gray-100 h-[80%] p-[4%] pt-5'>
                    <FormRegister />
                </div>
            </div>
            <p className='text-center'>Regresar</p>
            <Link href='/login'>
                <div className='bg-blue-600 rounded-md w-[50px] p-[5px] flex justify-center items-center m-auto hover:bg-blue-800'>
                    <ArrowLeftIcon className='h-6 w-8 text-white' />
                </div>
            </Link>
        </>
    )
}

export default page