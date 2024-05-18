import React from 'react'
import { DataTable } from '../table/data-table'
import { columns } from './columns'
import { Customer } from '@/types/admin/dashboard'

type Props = {
    customersData:Customer[]
}

const CustomersPage = ({customersData}: Props) => {
  return (
    <div className='bg-white rounded-lg p-5 flex flex-col justify-start gap-10'>
        <h1 className='text-2xl font-bold'>Customers</h1>
        <DataTable columns={columns} data={customersData} />
    </div>
  )
}

export default CustomersPage