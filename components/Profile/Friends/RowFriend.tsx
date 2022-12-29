import React from 'react'

type Props = {}

const RowFriend = (props: Props) => {
    return (
        <div>
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
                        className="rounded-lg bg-red-700 md:px-1 md:py-0 py-2 lg:py-2  text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2"
                    >
                        Eliminar amigo
                    </a>
                    <a
                        href="#"
                        className="rounded-lg bg-blue-700 md:px-1 md:py-0 py-2 lg:py-2  text-center text-base font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Ir al perfil
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RowFriend