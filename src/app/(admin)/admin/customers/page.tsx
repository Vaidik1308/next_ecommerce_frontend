import CustomersPage from '@/components/admin/customers'
import { customersData } from '@/lib/data/datas'
import React from 'react'

type Props = {}

const Customers = (props: Props) => {
  return (
    <div className='flex flex-col p-5 w-full'>
        <CustomersPage customersData={customersData}/>
    </div>
  )
}

export default Customers