import FilterComp from '@/components/public/search/FilterComp'
import Products from '@/components/public/search/Products'
import React from 'react'

type Props = {}

const SearchPage = (props: Props) => {
  return (
    <div className='w-full flex items-start '>
      <div className='p-2  flex-[1.2] flex justify-center shadow-2xl py-8 min-h-fit rounded-r-lg ml-4'>
        {/* filter functionality */}
        <FilterComp/>
      </div>
      <div className='flex-[5]'>
        <Products/>
      </div>
    </div>
  )
}

export default SearchPage