'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { IconType } from 'react-icons';

type Props = {
    subLabel:string;
    icon: React.JSX.Element;
    pathname:string;
}

const SingleList = ({icon,subLabel,pathname}: Props) => {
    const path = usePathname();
  return (
    <Link className={`flex items-center justify-start  gap-8 hover:bg-[#E6F1FF] ${path.includes(pathname) ?" text-[#0073FF] bg-[#E6F1FF]": ""} rounded-lg p-2 m-2`} href={pathname}>
        {icon}
        <span>
            {subLabel}
        </span>
    </Link>
  )
}

export default SingleList