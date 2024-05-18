import { Transaction } from '@/types/admin/dashboard'
import React from 'react'
import { DataTable } from '../table/data-table'
import { columns } from '@/app/(admin)/admin/transactions/columns'
type Props = {
    transactionsData:Transaction[]
}

const TransactionsPage = ({transactionsData}: Props) => {
  return (
    <div className='bg-white rounded-lg p-5 flex flex-col justify-start gap-10'>
        <h1 className='text-2xl font-bold'>Transactions</h1>
        <DataTable columns={columns} data={transactionsData} />
    </div>
  )
}

export default TransactionsPage