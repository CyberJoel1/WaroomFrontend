"use client"
import { Tabs } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

import { HashtagIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import SectionPublication from './publications/SectionPublication'
import FormRegister from '../Login/FormRegister'
import SectionUpdate from './publications/SectionUpdate'
import SectionInformation from './publications/SectionInformation';
import SectionContact from './publications/SectionContact';
type Props = {}

const TabsProfile = (props: Props) => {
    const [render, setRender] = useState(false);
  
    useEffect(() => {
      setRender(true);
   }, []);
   if (!render) {
    return null;
  }
    return (

        <div className='bg-white h-full drop-shadow-lg overflow-auto max-h-screen'>
            <Tabs.Group
                aria-label="Tabs with icons"
                style="underline"
            >
                <Tabs.Item
                    title="PUBLICACIONES"
                    icon={UserCircleIcon}
                   
                >
                    <SectionPublication/>
                </Tabs.Item>
                <Tabs.Item
                    active={true}
                    title="ACTUALIZACIÓN DE DATOS"
                    icon={UserCircleIcon}
                >
                    <SectionUpdate/>
                </Tabs.Item>
                <Tabs.Item
                    title="INMUEBLES"
                    icon={UserCircleIcon}
                >
                    <SectionInformation/>
                </Tabs.Item>
                <Tabs.Item
                    title="AMIGOS"
                    icon={UserCircleIcon}
                >
                    <SectionContact />
                </Tabs.Item>
                <Tabs.Item
                    disabled={true}
                    title="Disabled"
                >
                    Disabled content
                </Tabs.Item>
            </Tabs.Group>
        </div>

    )
}

export default TabsProfile