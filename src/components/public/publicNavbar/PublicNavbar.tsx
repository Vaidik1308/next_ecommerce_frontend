import React from 'react'
// import SearchBar from './SearchBar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { LogInIcon } from 'lucide-react'
import { PiTrolleyFill } from 'react-icons/pi'
import { FaShopify } from 'react-icons/fa6'
import { GrOrderedList } from 'react-icons/gr'
import { Account } from './Account'
import { SearchBar } from './SearchBar'

type Props = {}



const PublicNavbar = (props: Props) => {

    let isAuthenticated = false
  return (
    <div className='w-[90%] mx-auto p-4 flex items-center justify-between'>
        <div className='flex items-center gap-5 w-[30%]'>
            {/* LOGO */}
            <div>
                <h1 className='text-2xl font-bold'>
                    LOGO
                </h1>
            </div>
            <div className='w-[75%]'>
                <SearchBar/>
            </div>
        </div>
        <div className='flex gap-2 justify-evenly'>
            {
                !isAuthenticated && (
                    <Button variant={"outline"} asChild>
                        <Link href={"/login"} className='flex items-center gap-2'>
                            <LogInIcon size={15}/>
                            <span>Login</span>
                        </Link>
                    </Button>
                )
            }
            <Button variant={"default"} asChild>
                <Link href={"/cart"} className='flex items-center gap-2'>
                    <PiTrolleyFill size={15}/>
                    <span>Cart</span>
                </Link>
            </Button>
            <Button variant={"secondary"} asChild>
                <Link href={"/orders"} className='flex items-center gap-2'>
                    <GrOrderedList size={15}/>
                    <span>Orders</span>
                </Link>
            </Button>
            <Button variant={"link"} asChild>
                <Link href={"/"} className='flex items-center gap-2'>
                    <FaShopify size={15}/>
                    <span>Become a Seller</span>
                </Link>
            </Button>
            <Account/>
        </div>
    </div>
  )
}

export default PublicNavbar