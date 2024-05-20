import { latestProducts } from '@/lib/data/dummyData'
import { ProductProps } from '@/types/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Products = (props: Props) => {
  return (
    <div className='grid grid-cols-3 mx-auto w-[95%] gap-5'>
      {
        latestProducts.map((product,i) => (
          <Link  key={i} className='w-full flex flex-col items-center group justify-center gap-1  ' href={`/s?q=${product.slug}`}>
            <div className='relative h-48 w-80 overflow-hidden rounded-lg'>
                <Image src={product.image} alt='camera_img' fill className='object-cover hover:scale-125 duration-300 rounded-lg' />
            </div>
            <div className='w-full p-2 flex flex-col items-center  duration-300 rounded-b-md'>
                <h4 className='text-center text-sm group-hover:text-blue-500 duration-200'>{"realme P1 5G (Peacock Green, 128 GB)"}</h4>
                <div className='w-full flex gap-2 items-center justify-center'>

                <span className='text-sm font-bold'>{"Rs. 7,999"}</span>
                <span className='text-sm font-medium text-gray-500 line-through '>{product.price}</span>
                <span className='text-[12px] font-extrabold text-green-600'>{"12% off"}</span>
                </div>
            </div>
          </Link>
      
      ))
    }
  
      
    </div>
  )
}

export default Products