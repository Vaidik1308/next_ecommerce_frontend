import { CardType } from '@/types/admin/dashboard';
import React from 'react'
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';



const Card = ({
    amount,
    value,
    heading,
    percent,
    color
}: CardType) => {
  return (
    <div className='bg-white p-5 w-1/4 shadow-md rounded-lg py-8 flex items-center justify-center gap-5'>
        <div>
            <h2 className=' capitalize text-[0.75rem] text-gray-500'>{heading}</h2>
            <p className='text-2xl font-bold'>{amount ? `₹${value}` :value}</p>
            {percent > 0 ? (
                <span className="text-green-500 flex items-center gap-1.5">
                <HiTrendingUp /> +{percent}%{" "}
                </span>
            ) : (
                <span className="text-red-500 flex items-center gap-1.5">
                <HiTrendingDown /> {percent}%{" "}
                </span>
            )}
        </div>
        <div
            className="relative size-[5rem] rounded-[50%] flex-none grid place-items-center bg-green-200 before:absolute before:size-[4rem] before:bg-white before:rounded-full"
            style={{
                background: `conic-gradient(
                ${color} ${(Math.abs(percent) / 100) * 360}deg,
                rgb(255, 255, 255) 0
            )`,
            }}
        >
            <span
                className='relative'
                style={{
                color,
                }}
            >
                {percent}%
            </span>
        </div>
    </div>
  )
}

export default Card