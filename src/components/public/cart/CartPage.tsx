import React from 'react'
import OrderSummary from './OrderSummary'
import CartList from './CartList'

type Props = {}

const CartPage = (props: Props) => {
  return (
    <div className='flex gap-2 justify-between w-full'>
      <CartList/>
      <OrderSummary/>
    </div>
  )
}

export default CartPage