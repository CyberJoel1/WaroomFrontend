import { HomeIcon } from '@heroicons/react/24/solid'
import { Card } from 'flowbite-react'

import React from 'react'
import CardInmueble from '../Inmuebles/CardInmueble'

type Props = {}

const SectionInformation = (props: Props) => {
    return (
        <div className='mb-12'>
            <div className="w-full mb-12">
                {/*Aqui empieza el card */}
                <div className=' mb-5 flex lg:flex-row flex-col'>
                    <CardInmueble tipoChecked='/cheque.png' />
                    <div className='bg-white rounded-lg border border-gray-20 shadow-md dark:border-gray-700 dark:bg-gray-800 grow lg:ml-2  min-w-[160px]'>
                        <h2 className='text-center p-3 font-bodyFont'>Características</h2>
                        <div className='text-sm flex justify-center align-middle m-auto text-justify mb-3'>
                            <ul>
                            
                                <li className='flex flex-row'><HomeIcon className='w-5 mr-1'></HomeIcon> <p>3 Habitaciones</p></li>
                                <li className='flex flex-row'><HomeIcon className='w-5 mr-1'></HomeIcon> <p>200 m2</p></li>
                                <li className='flex flex-row'><HomeIcon className='w-5 mr-1'></HomeIcon> <p>3 Baños</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*Aqui termina el card */}
                {/*Aqui empieza el card */}
                <div className=' mb-5 flex lg:flex-row flex-col'>
                    <CardInmueble tipoChecked='/crossed.png' />
                    <div className='bg-white rounded-lg border border-gray-20 shadow-md dark:border-gray-700 dark:bg-gray-800 grow lg:ml-2  min-w-[160px]'>
                        <h2 className='text-center p-3 font-bodyFont'>Características</h2>
                        <div className='text-sm flex justify-center align-middle m-auto text-justify mb-3'>
                            <ul className=''>
                             
                                <li className='flex flex-row'><HomeIcon className='w-5 mr-1'></HomeIcon> <p>3 Habitaciones</p></li>
                                <li className='flex flex-row'><HomeIcon className='w-5 mr-1'></HomeIcon> <p>200 m2</p></li>
                                <li className='flex flex-row'><HomeIcon className='w-5 mr-1'></HomeIcon> <p>3 Baños</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/*Aqui termina el card */}
            </div>
        </div>
    )
}

export default SectionInformation