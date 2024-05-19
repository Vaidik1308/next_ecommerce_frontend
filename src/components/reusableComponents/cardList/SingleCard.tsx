import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode
}

const SingleCard = ({children}: Props) => {
  return (
    <div className='bg-white  rounded-md shadow-lg w-fit group '>
        <Link className='w-full flex flex-col ' href={"/"}>
            {children}
        </Link>
    </div>
  )
}

export default SingleCard