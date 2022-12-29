import React from 'react'
import SliderInteractive from '../Publication/particles/SliderInteractive'
import Image from 'next/image'
import { PhotoIcon } from '@heroicons/react/24/solid';



type Props = {
    fondoGallery?: string;
}

const GalleryImages = ({fondoGallery='bg-black'}: Props) => {

   

    return (
        <>
            <div className={'h-screen min-h-[450px] '.concat(fondoGallery)}>
                <div className='grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 h-full'>
                    <div className='row-span-2 md:col-span-2 h-full'>
                        <SliderInteractive size={'h-full p-3'} />
                    </div>
                    <div className='row-span-1 md:col-span-1 h-full grid md:grid-rows-2 md:grid-cols-1 grid-rows-1'>
                        <div className='grid grid-cols-2 grid-rows-4  p-3'>
                            <div className='h-full col-span-1 row-span-3 rounded-md'>
                            <Image src={'/foto1.jpg'} alt={''} width={500} height={500} className='!h-full !w-full rounded-md' />
                            </div>
                            <div className='h-full col-span-1 row-span-3 rounded-md pl-2'>
                            <Image src={'/foto1.jpg'} alt={''} width={500} height={500} className='!h-full !w-full  rounded-md' />
                            </div>
                            <div className=' col-span-2'>
                                <p className='font-sans text-[15px] text-white text-sm hover:text-blue-600'>19/20</p>
                            </div>
                        </div>
                        <div className='hidden md:block'>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryImages


