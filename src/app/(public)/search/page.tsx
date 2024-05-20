import Products from '@/components/public/search/Products'
import React from 'react'

type Props = {}

const SearchPage = (props: Props) => {
  return (
    <div className='w-full flex items-start '>
      <div className='p-1 flex-1 flex justify-center shadow-lg min-h-screen'>
        {/* filter functionality */}
        <h1>filter functionality</h1>
      </div>
      <div className='flex-[5]'>
        <Products/>
      </div>
    </div>
  )
}

export default SearchPage