import React from 'react'

type Props = {}

const Transactions = (props: Props) => {
  return (
    <div className='bg-white p-2 rounded-lg w-full flex flex-col justify-center flex-[3] items-center'>
        <h1 className='text-2xl tracking-widest uppercase font-extralight'>Top Transactions</h1>
    </div>
  )
}

export default Transactions