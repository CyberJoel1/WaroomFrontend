import React from 'react'
import Image from 'next/image'
import FormLogin from '../../../components/Login/FormLogin'
import Link from 'next/link'



const page = async  () => {
  
  return (
    
    <div className='flex justify-center items-center'>
      <div className='rounded-l-lg w-5/6 h-[80%] lg:block hidden p-6 '>
        <Image src={'/Initial.svg'} width={520} height={8}
          alt="tailus logo" priority />
      </div>
      <div className='lg:rounded-l-none rounded-md w-full bg-gray-100 h-[80%] lg:w-3/6 p-[4%] pt-5'>
        <FormLogin />
      </div>
    </div>
  )
}

export default page