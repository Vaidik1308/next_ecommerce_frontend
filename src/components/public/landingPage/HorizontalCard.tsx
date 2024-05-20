import Image from 'next/image'
import React from 'react'

type Props = {
    imageUrl:string
}

const HorizontalCard = ({imageUrl}: Props) => {
  return (
    <div className='relative h-60 w-full'>
        <Image src={imageUrl} alt='hshhs' fill/>
    </div>
  )
}

export default HorizontalCard