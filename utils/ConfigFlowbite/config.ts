export const jsonConfigStyle = {
  theme: {
    sidebar: {
      
      inner:
        "h-full font-sans font-semibold tracking-wide overflow-y-auto overflow-x-hidden rounded rounded-sm text-white dark:text-white py-4 px-3 bg-gray-800",
      base: "font-bodyFont h-full text-black bg-gray-800",
      item: {
        base: "flex items-center justify-center rounded-lg p-2 text-sm font-normal text-gray-400 hover:text-black hover:bg-gray-600 dark:text-white dark:hover:bg-gray-600",
        active: "bg-sky-700 dark:bg-gray-400",

        icon: {
          base: "h-6 w-6 flex-shrink-0 transition duration-75 group-hover:text-black",
        },
      },
      collapse: {
        button:
          "group flex w-full items-center rounded-lg p-2 text-base font-normal text-white transition duration-75 hover:bg-gray-600 dark:text-gray-900 dark:hover:bg-gray-600",
        label: {
          base: "ml-3 flex-1 whitespace-nowrap text-left text-white",
        },
      },
      
    },
    formControls: {
      textInput: {
        field: {
          input: {
            colors: {
              gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500",
            },
          },
        },
      },
    },
    carousel:{
      control:{
        base:'inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-200 group-hover:bg-blue-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-blue-500 dark:group-hover:bg-blue-300 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10'
      }
    },
    card:{
      base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 h-full',
      children: 'flex flex-col justify-center p-[13px]',
      horizontal: {
          off: 'flex-col',
          on: 'flex-col md:max-w-xl md:flex-row',
      },
      href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
      img: {
          base: 'h-[120px]',
          horizontal: {
              off: 'rounded-t-lg',
              on: 'w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
          },
      },
    }

  },
};
