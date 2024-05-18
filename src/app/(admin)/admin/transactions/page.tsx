import TransactionsPage from '@/components/admin/transactions'
import { transactionsData } from '@/lib/data/datas'
import React from 'react'

type Props = {}

const Transactions = (props: Props) => {
  return (
    <div className='flex flex-col p-5  w-full'>
      <TransactionsPage transactionsData={transactionsData}/>
    </div>
  )
}

export default Transactions