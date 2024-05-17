import { columns } from '@/app/(admin)/admin/products/columns'
import React from 'react'
import { DataTable } from '../table/data-table'
import { Product } from '@/types/admin/dashboard'

type Props = {
    productsData:Product[]
}

const ProductPage = ({productsData}: Props) => {
  return (
    <div className='bg-white rounded-lg p-5 flex flex-col justify-start gap-10'>
        <h1 className='text-2xl font-bold'>Products</h1>
        <DataTable columns={columns} data={productsData} />
    </div>
  )
}

export default ProductPage