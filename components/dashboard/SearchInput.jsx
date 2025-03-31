import React from 'react'
import { Search } from 'lucide-react'; // Import History icon

export default function SearchInput() {
  return (
    <form>


    <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
        
        <Search className="w-4 h-4 text-gray-100 dark:text-white-400"/>

        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-30 py-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
    </div>
    </form>
  )
}
