import React from 'react'
import BarChart from '../charts/BarChart'

type Props = {}

const GraphSection = (props: Props) => {
  return (
    <div className='bg-white p-2 rounded-lg w-full flex flex-col justify-center flex-[3] items-center py-5'>
        <h1 className='text-2xl tracking-widest uppercase font-extralight'>Revenue & Transactions</h1>
        <div className='min-h-[60vh] w-full'>
          <BarChart
            data_2={[300, 144, 433, 655, 237, 755, 190]}
            data_1={[200, 444, 343, 556, 778, 455, 990]}
            title_1="Revenue"
            title_2="Transaction"
            bgColor_1="rgb(0, 115, 255)"
            bgColor_2="rgba(53, 162, 235, 0.8)"
          />
        </div>
    </div>
  )
}

export default GraphSection