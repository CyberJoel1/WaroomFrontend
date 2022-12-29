'use client'
import React, { MutableRefObject, use, useEffect, useRef } from 'react'
import HeaderInsertPublication from './HeaderInsertPublication'
import FooterInsertPublication from './FooterInsertPublication';
import InsertComment from '../particles/InsertComment';

import { useState } from 'react';
import ModalUtil from '../../../utils/ModalUtil';
import InsertPublication from '../particles/InsertPublication';

type Props = {}

const SchemaInsertPublication = (props: Props) => {
  const [data, setData] = useState(false);
  const [render, setRender] = useState(false);
  
  useEffect(() => {
    setRender(true);
 }, []);

  return (
    <>
      <div className='p-3'>
      {/* <HeaderInsertPublication/> */}
        <InsertPublication data={data} setData={setData} />
        <ModalUtil data={data} setData={setData}/>
        {/* <FooterInsertPublication/> */}
      </div>
      
      
    </>
  )
}

export default SchemaInsertPublication