import React from 'react'
import Card from './Card'
import GraphSection from './GraphSection'
import Inventory from './Inventory'
import GenderRatio from './GenderRatio'
import Transactions from './Transactions'

type Props = {}

const AdminDashboard = (props: Props) => {
  return (
    <div className='w-full flex flex-col gap-5'>
       <div className='w-full flex justify-evenly gap-5'>
        <Card 
          percent={40}
          amount={true}
          value={340000}
          heading="Revenue"
          color="rgb(0, 115, 255)"
        />
        <Card 
          percent={-14}
          value={400}
          color="rgb(0 198 202)"
          heading="Users"
        />
        <Card 
          percent={80}
          value={23000}
          color="rgb(255 196 0)"
          heading="Transactions"
        />
        <Card 
          percent={30}
          value={1000}
          color="rgb(76 0 255)"
          heading="Products"
        />
       </div> 
       <div className='w-full flex gap-5 '>
          <GraphSection/>
          <Inventory/>
       </div>
       <div className='w-full flex gap-5 '>
          <GenderRatio/>
          <Transactions/>
       </div>
    </div>
  )
}

export default AdminDashboard