import CardList from '@/components/reusableComponents/cardList/CardList'
import React from 'react'
import SingleCategory from './SingleCategory'
import { categories } from '@/lib/data/dummyData'

type Props = {}

const Categories = (props: Props) => {
  return (
    <div className='w-[95%] mx-auto flex items-center justify-center gap-12  '>
        {
          categories.map((category,i) => (
            <SingleCategory key={i} category={category}/>
          ))
        }
    </div>
  )
}

export default Categories