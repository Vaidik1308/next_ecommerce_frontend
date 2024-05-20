import React from 'react'
import SingleCartList from './SingleCartList'

type Props = {}

const CartList = (props: Props) => {
  return (
    <div className='flex-[2.5] overflow-y-auto h-[90vh] p-2 px-4 shadow-lg'>
      <h1 className='capitalize font-bold text-2xl my-2'>
            Cart
      </h1>
      <div className='my-2 mt-8 flex flex-col gap-4'>
        <SingleCartList/>
        <SingleCartList/>
        <SingleCartList/>
      </div>
    </div>
  )
}

export default CartList