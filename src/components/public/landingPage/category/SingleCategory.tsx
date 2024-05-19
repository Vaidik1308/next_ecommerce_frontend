import { Category } from '@/types/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    category:Category
}

const SingleCategory = ({category}: Props) => {
  return (
    <div className=' hover:bg-gray-100 duration-200 p-2 rounded-md'>
        <Link href={`/s?slug=${category.slug}`} className='flex flex-col items-center justify-center gap-1'>
            <div className='relative h-12 w-12 rounded-full flex justify-center items-center'>
                <Image src={category.image} alt={category.slug} className='object-cover rounded-full' fill />
            </div>
            <div>
                <p className='text-sm font-semibold'>{category.categoryName}</p>
            </div>
        </Link>
    </div>
  )
}

export default SingleCategory