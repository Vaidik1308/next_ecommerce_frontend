import React from 'react'
import DoughnutChart from '../charts/DoughnutChart'
import { BiMaleFemale } from 'react-icons/bi'


type Props = {}

const GenderRatio = (props: Props) => {
  return (
    <div className='flex-1 py-5 bg-white p-2 rounded-lg flex flex-col justify-center items-center relative gap-10'>
        <h1 className='text-2xl tracking-widest uppercase font-extralight'>Gender Ratio</h1>
        <DoughnutChart
            labels={["Female", "Male"]}
            data={[12, 19]}
            backgroundColor={[
            "hsl(340, 82%, 56%)",
            "rgba(53, 162, 235, 0.8)",
            ]}
            cutout={90}
        />
        <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[2rem] text-black'>
            <BiMaleFemale />
        </p>
    </div>
  )
}

export default GenderRatio