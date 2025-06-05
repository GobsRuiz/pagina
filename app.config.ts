export default defineAppConfig({
  ui: {
    button: {
      compoundVariants: [
        {
          color: 'rose',
          variant: 'solid',
          class: 'focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-rose-500 hover:bg-rose-600 disabled:bg-rose-500 aria-disabled:bg-rose-500 dark:bg-rose-400 dark:hover:bg-rose-500 dark:disabled:bg-rose-400 dark:aria-disabled:bg-rose-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 dark:focus-visible:outline-rose-400 inline-flex items-center text-lg'
        },
        {
          color: 'gray',
          variant: 'solid',
          class: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:cursor-not-allowed aria-disabled:opacity-75 flex-shrink-0 font-medium rounded-md gap-x-2.5 px-3.5 py-2.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center text-lg'
        },
      ]
    }
  }
})
