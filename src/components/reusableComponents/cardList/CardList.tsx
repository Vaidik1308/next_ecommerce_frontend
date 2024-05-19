import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { ReactNode } from 'react'

type Props = {
    heading:string;
    children:ReactNode;
    pathname:string;
    className:string;
}

const CardList = ({heading,children,pathname,className}: Props) => {
  return (
    <div className='w-full flex flex-col gap-2 px-5 '>
        <div className='w-full flex justify-between'>
            <h2 className='text-[1.5rem] font-light'>{heading}</h2>
            <Button variant={"link"} asChild>
                <Link href={pathname}>More</Link>
            </Button>
        </div>
        <div className={className}>
            {children}
        </div>
    </div>
  )
}

export default CardList