import { Button } from '@/components/ui/button'
import { Trash, Trash2, Trash2Icon, TrashIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BsTrash2Fill, BsTrash3Fill } from 'react-icons/bs'
import { FcShipped } from 'react-icons/fc'

type Props = {}

const SingleCartList = (props: Props) => {
  return (
    <div className='w-full p-2 border-b-[1px] border-solid border-gray-300 gap-4 flex items-center'>
        <div className='flex-[3] flex  gap-3'>
            <div className='relative h-24 w-40 overflow-hidden rounded-lg '>
                {/* image */}
                <Image className='object-cover  rounded-lg' src={"https://images.unsplash.com/photo-1588200908342-23b585c03e26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D"} alt='' fill/>
            </div>
            <div className='w-full flex flex-col gap-3'>
                {/* detail  */}
                <span className='uppercase'>
                    Electronics
                </span>
                <h2 className='font-bold capitalize text-xl'>
                    Native Instrument Lomplete Kontrol S88 Mk2
                </h2>
                <div className='gap-1 rounded-lg bg-green-200 w-fit p-2 flex items-center'>
                    <span className='text-green-600 font-semibold text-sm'>Free Shipping</span>
                    <FcShipped size={18}/>
                </div>
            </div>
        </div>
        <div className='flex-1  flex flex-col gap-4 border-l-[1px] border-gray-300'>
            <div className='flex gap-1 items-start justify-end'>
                <Button>-</Button>
                <div className='flex justify-center items-center size-10 border-[1px] border-gray-200 rounded-lg'>{"5"}</div>
                <Button variant={"outline"}>+</Button>
            </div>
            <div className='flex flex-col items-end'>
                <span className='line-through text-gray-400 font-semibold'>Rs.27000</span>
                <span className='font-bold'>Rs.25000</span>
            </div>
            <div className='flex justify-end items-center'>
                <Button variant={"secondary"}>
                    <BsTrash3Fill className='text-red-500' size={18}/>
                </Button>

            </div>
        </div>
    </div>
  )
}

export default SingleCartList