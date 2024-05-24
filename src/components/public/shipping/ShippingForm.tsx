'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { ChangeEvent,useState } from 'react'

type Props = {}

const ShippingForm = (props: Props) => {
    const [shippingInfo, setShippingInfo] = useState({
        address:"",
        city:"",
        state:"",
        country:"",
        pinCode:"",
    })
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setShippingInfo(prev => ({
            ...prev,[e.target.name]:e.target.value
        }))
    }

    console.log(shippingInfo);
    
  return (
    <div className='w-[100%] min-h-[80vh] flex justify-center items-center'>
        <div className='shadow-2xl rounded-lg min-h-[65vh] p-2 w-[35%] py-8  ' >
            <h1 className='flex flex-col items-center tracking-widest font-light justify-center text-3xl'>
                <span>SHIPPING</span>
                <span>ADDRESS</span>
            </h1>
            <form onSubmit={(e) => e.preventDefault()} className='flex flex-col items-center justify-center' action="">
                <div className='w-full flex justify-center items-center my-4'>
                    <Input 
                        type='text' 
                        placeholder='Address...'
                        className='border-gray-400 w-[85%] mx-auto'
                        value={shippingInfo.address}
                        onChange={handleChange}
                        name='address'
                    />
                </div>
                <div className='w-full flex justify-center items-center my-4'>
                    <Input 
                        type='text' 
                        placeholder='City'
                        className='border-gray-400 w-[85%] mx-auto'
                        value={shippingInfo.city}
                        onChange={handleChange}
                        name='city'
                    />
                </div>
                <div className='w-full flex justify-center items-center my-4'>
                    <Input 
                        type='text' 
                        placeholder='State'
                        className='border-gray-400 w-[85%] mx-auto'
                        value={shippingInfo.state}
                        onChange={handleChange}
                        name='state'
                    />
                </div>
                <div className='w-full flex justify-center items-center my-4'>
                    <Input 
                        type='text' 
                        placeholder='Pin Code'
                        className='border-gray-400 w-[85%] mx-auto'
                        value={shippingInfo.pinCode}
                        onChange={handleChange}
                        name='pinCode'
                    />
                </div>
                <div className='w-full flex justify-center items-center my-4'>
                    <Input 
                        type='text' 
                        placeholder='Country'
                        className='border-gray-400 w-[85%] mx-auto'
                        value={shippingInfo.country}
                        onChange={handleChange}
                        name='country'
                    />
                </div>
                <Button className='w-[85%]'>Pay Now</Button>
            </form>
        </div>
        
    </div>
  )
}

export default ShippingForm