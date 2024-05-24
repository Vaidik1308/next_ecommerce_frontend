import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const SingleCard = ({children}: Props) => {
  return (
    <div className='bg-white  rounded-md shadow-lg w-fit group '>
        <div className='w-full flex flex-col'>
        </div>
            {children}
    </div>
  )
}

export default SingleCard