'use client';

import { Flowbite } from 'flowbite-react';
import { jsonConfigStyle } from '../utils/ConfigFlowbite/config';


export function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Flowbite
    theme={{
      ...jsonConfigStyle
    }}
  >
         
        {children}
   
    </Flowbite>
  );
}