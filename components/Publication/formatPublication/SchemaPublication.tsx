"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import HeaderPublication from './HeaderPublication';
import FooterPublication from './FooterPublication';
import SliderInteractive from '../particles/SliderInteractive';
type Props = {
  title: string;
  photo?: string;
  comment?: string;
  fechaCreacion: Date;
}

const SchemaPublication = (props: Props) => {
  const [render, setRender] = useState(false);
  
  useEffect(() => {
    setRender(true);
 }, []);
  const { title, photo, comment, fechaCreacion } = props;
  return (
    <>

      <HeaderPublication comment={comment} date={fechaCreacion}
        nameUser={'Joel Velasco'} photo={photo} />
      {/* <div className='w-full h-[270px] relative mb-2'>

         <Image src={photo || './foto1.jpg'} alt={'Hola'} fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"></Image> 
              

      </div> */}
      
      <SliderInteractive size='h-56 sm:h-64 xl:h-80 2xl:h-96'/>
      
      <div className='pl-2'>
        <p> Publicación con 0 me gusta</p>
      </div>
      <FooterPublication />
    </>
  )
}

export default SchemaPublication