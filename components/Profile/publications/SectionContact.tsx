import { Card } from 'flowbite-react'
import React from 'react'
import RowFriend from '../Friends/RowFriend'

type Props = {}

const SectionContact = (props: Props) => {
  return (
<div className="">
  <div className='w-[80%] m-auto'>
  <Card>
    <div className="mb-4 flex items-center justify-between">
      <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
        Amigos
      </h5>

    </div>
    <div className="flow-root">
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">

        <li className="py-3 sm:py-4">
          <RowFriend/>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="shrink-0">
              <img
                className="h-8 w-8 rounded-full"
                src="/perfil.jpg"
                alt="Bonnie image"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                Joel Velasco
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                joel_sec111997@hotmail.com
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a
                            href="#"
                            className="rounded-lg bg-blue-700 md:px-1 md:py-0 py-2 lg:py-2  text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Ir al perfil
                        </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </Card>
</div>
</div>
  )
}

export default SectionContact