'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useEffect, useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { VscError } from 'react-icons/vsc'

type Props = {}

const OrderSummary = (props: Props) => {
  const [couponCode,setCouponCode] = useState<string>("")
  const [isValidCouponCode,setIsValidCouponCode] = useState<boolean | null>(null);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      if(Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    },1000)

    return () => {
      clearTimeout(timeOutId);
      setIsValidCouponCode(false)
    }
  },[couponCode])
  return (
    <div className='flex-[1.5] overflow-y-auto h-[90vh] p-2 px-4 shadow-lg justify-between min-h-[80vh] flex flex-col'>
      <div className='border-b-[2px] border-gray-300 pb-4'>
        <h1 className='capitalize font-bold text-2xl my-2'>
              Order Summary
        </h1>
        <div className='w-full flex flex-col gap-4'>
          <form className='flex items-center gap-1'>
            <Input 
              type='text' 
              value={couponCode} 
              onChange={(e) => setCouponCode(e.target
              .value)}
              placeholder='Apply Coupon...'
              className='outline-none uppercase'
            />
            <Button variant={"default"} type='submit'>Apply</Button>
          </form>
          {
            couponCode && (
              isValidCouponCode ? (
                <div className='flex items-start gap-2 flex-col'>
                  <span className='bg-green-200 shadow-lg p-1 px-2 rounded-lg flex items-center gap-1 text-green-600'>
                    <FaCheckCircle />
                    Coupon Applied!</span>
                  <span className='flex gap-1 items-center font-semibold text-gray-500'>
                    Rs. {"2000"} off using the <code className='font-bold px-2 shadow-lg uppercase text-black bg-gray-100 p-1 rounded-lg'>{couponCode}</code>
                  </span>
                </div>
              ) :  (
                <div className=' shadow-lg flex gap-1 items-center bg-red-200 p-1 px-2 rounded-lg w-fit'>
                  <VscError className='text-red-500'/>
                  <span className='text-red-500'>Invalid Coupon</span>
                </div>
              )
            )
          }
          <div className='bg-gray-100 p-2 px-4 rounded-lg shadow-md w-[80%]'>
            <div className='flex gap-1 items-center justify-between'>
              <p className='font-semibold'>Subtotal:</p>
              <span className='font-bold'>Rs. 4000</span>
            </div>
            <div className='flex gap-1 items-center justify-between text-gray-500'>
              <p className='font-semibold'>Shipping Charges:</p>
              <span className='font-bold'>Rs. 455</span>
            </div>
            <div className='flex gap-1 items-center justify-between text-gray-500'>
              <p className='font-semibold'>Tax:</p>
              <span className='font-bold'>Rs. 150</span>
            </div>
            <div className='flex gap-1 items-center justify-between text-green-500'>
              <p className='font-semibold'>Discount:</p>
              <span className='font-bold '>-Rs. 200</span>
            </div>
          </div>
          
        </div>
      </div>
      <div className='flex items-center justify-between py-4'>
        <div className=' shadow-lg flex gap-1 items-center bg-gray-100 p-3 px-8 rounded-lg'>
            <p className='text-xl uppercase font-semibold'>TOTAL:</p>
            <span className='font-extrabold text-[18px]'> Rs. 5000</span>
        </div>
        <Button variant={"default"} className='px-8 py-6 text-[18px]'>Confirm Order</Button>
      </div>
    </div>
  )
}

export default OrderSummary