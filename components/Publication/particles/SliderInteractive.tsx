'use client'
import { Carousel } from 'flowbite-react'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

type Props = {
  size: string;
}

const SliderInteractive = (props: Props) => {
  const {size}= props;
  const router = useRouter();
  function transfer(): void { 
    router.push('/social/gallery');
  } 
  return (
    <div className={size.concat(' ')}>
     
          <Carousel slide={false} indicators={false} className=''>

            <Image src={'/foto1.jpg'} alt={''} width={500} height={500} className='!h-full' onDoubleClick={transfer}/>
            <Image src={'/foto1.jpg'} alt={''} width={500} height={500} className='!h-full'/>
            <Image src={'/foto1.jpg'} alt={''} width={500} height={500} className='!h-full'/>
            <Image src={'/foto1.jpg'} alt={''} width={500} height={500} className='!h-full'/>
            <Image src={'/foto1.jpg'} alt={''} width={500} height={500} className='!h-full'/>
            <Image src={'/foto1.jpg'} alt={''} width={500} height={500} className='!h-full'/>
          </Carousel>
    </div>
  )
}

export default SliderInteractive