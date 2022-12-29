'use client'
import React, { useEffect, useState } from 'react'
import CardProfile from '../../../../components/Profile/CardProfile'


import TabsProfile from '../../../../components/Profile/TabsProfile'

type Props = {}

const profilePage = (props: Props) => {

    return (
        <div className='bg-slate-50 h-screen grid grid-cols-8 gap-4 w-full max-h-screen md:overflow-hidden overflow-visible'>
            <div className='p-3 col-span-8 md:col-span-2  max-h-full'>
                <CardProfile/>
            </div>
            <div className='p-3 md:col-span-6 col-span-8 max-h-full '>
                <TabsProfile/>
            </div>
        </div>
    )
}

export default profilePage