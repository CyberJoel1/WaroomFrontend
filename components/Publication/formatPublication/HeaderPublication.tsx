import React from 'react'
import Image from 'next/image'
import InfoPrincipal from '../particles/InfoPrincipal';
type Props = {
    comment?: string;
    date: Date;
    nameUser: string;
    photo?: string;
}

const HeaderPublication = (props: Props) => {
    const { comment, date, nameUser, photo } = props;
    const dia = (date.getDate().toString().length > 1)
        ? date.getDate().toString()
        : "0" + date.getDate().toString();

    const fecha = dia + "/" + date.getMonth() + "/" + date.getFullYear();

    return (
        <div className='px-2 py-2 rounded-t-lg'>

            <div className='w-full  flex flex-row mb-2'>
                <div className='w-11 h-11 relative'>

                    <Image src={photo || './foto1.jpg'} alt={'Hola'} fill className='rounded-full border-solid border-2 border-sky-200 cursor-pointer'></Image>
                </div>
                <div className=' text-opacity-90 text-black pl-2 pt-[5px]'>
                    <p className='h-[0.9rem] text-sm font-bodyFont font-light'>{nameUser}</p>
                    <p className='h-[0.9rem] text-[0.80rem] font-extralight'>{fecha.toString()}</p>

                </div>
            </div>
            <div className='my-1'>
                <p>{comment}</p>
            </div >
            <InfoPrincipal/>
        </div>
    )
}

export default HeaderPublication