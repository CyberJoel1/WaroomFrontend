
"use client"
import React, { Suspense, useState } from 'react'
import SchemaInsertPublication from '../../../components/Publication/formatInsertPublication/SchemaInsertPublication';
import SchemaPublication from '../../../components/Publication/formatPublication/SchemaPublication';


type Props = {}

const page = (props: Props) => {
  
  return (
    <>
    
    <div className='w-full bg-blue-600 h-[140px] grid grid-cols-1 place-items-center font-bold'>
      <h1 className='text-white text-6xl'>WAROOM</h1>
    </div>
    
    <div className='grid grid-cols-7'>
    <div className='md:col-start-3 md:col-end-6 col-span-7 bg-stone-100 rounded-lg mt-6 mb-3 drop-shadow-lg'>
    
    <SchemaInsertPublication/>
    
    </div>
    <div className='md:col-start-3 md:col-end-6 col-span-7 bg-stone-100 rounded-lg mt-6 mb-3 drop-shadow-lg'>
      <SchemaPublication title='Noticia #1' photo='/foto1.jpg' fechaCreacion={new Date()} comment={'Se vende esta casa'} />
    </div>
    <div className='md:col-start-3 md:col-end-6 col-span-7 bg-stone-100 rounded-lg pt-6 mb-3 drop-shadow-lg'>
      <SchemaPublication title='Noticia #1' photo='/foto1.jpg' fechaCreacion={new Date()} />
    </div>
    <div className='md:col-start-3 md:col-end-6 col-span-7 bg-stone-100 rounded-lg pt-6 mb-3 drop-shadow-lg'>
      <SchemaPublication title='Noticia #1' photo='/foto1.jpg' fechaCreacion={new Date()} />
    </div>
    <div className='md:col-start-3 md:col-end-6 col-span-7 bg-stone-100 rounded-lg pt-6 mb-3 drop-shadow-lg'>
      <SchemaPublication title='Noticia #1' photo='/foto1.jpg' fechaCreacion={new Date()} />
    </div>
    <div className='md:col-start-3 md:col-end-6 col-span-7 bg-stone-100 rounded-lg pt-6 mb-3 drop-shadow-lg'>
      <SchemaPublication title='Noticia #1' photo='/foto1.jpg' fechaCreacion={new Date()} />
    </div>
  </div>
  
  </>
  )
}

export default page