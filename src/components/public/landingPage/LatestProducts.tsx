import CardList from '@/components/reusableComponents/cardList/CardList'
import SingleCard from '@/components/reusableComponents/cardList/SingleCard'
import { latestProducts } from '@/lib/data/dummyData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const LatestProducts = (props: Props) => {
  return (
    <div>
        {/* Latest Products */}
        <CardList className="flex justify-evenly " pathname="/" heading="LATEST PRODUCTS">
          {
            latestProducts.map((product,i) => (
              <SingleCard key={i}>
                <Link href={`/s?q=${product.slug}`}>
                  <div className='relative h-48 w-48 overflow-hidden'>
                      <Image src={product.image} alt='camera_img' fill className='object-cover rounded-t-md hover:scale-125 duration-300' />
                  </div>
                  <div className='w-full p-2 flex flex-col items-center group-hover:bg-gray-200 duration-300 rounded-b-md'>
                      <h4 className='text-lg'>{product.name}</h4>
                      <p className='text-sm font-bold'> From Rs.{product.price}</p>
                  </div>
                </Link>
              </SingleCard>
            ))
          }
        </CardList>
      </div>
  )
}

export default LatestProducts