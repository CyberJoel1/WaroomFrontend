"use client"
import React, { useEffect, useState } from 'react'
import SchemaPublication from '../../Publication/formatPublication/SchemaPublication'

type Props = {}

const SectionPublication = (props: Props) => {
    const [render, setRender] = useState(false);
  
    useEffect(() => {
      setRender(true);
   }, []);
   if (!render) {
    return null;
  }
  return (
    <div className='divide-y'>
    <div className='px-[1%] my-7'>
        <SchemaPublication title='Noticia #1' photo='/foto1.jpg' fechaCreacion={new Date()} comment={'Se vende esta casa'} />
    </div>
    
    <div className='px-[1%] my-7'>
        <SchemaPublication title='Noticia #1' photo='/foto1.jpg' fechaCreacion={new Date()} comment={'Se vende esta casa'} />
    </div>
    </div>
  )
}

export default SectionPublication