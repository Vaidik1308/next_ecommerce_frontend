
import React from 'react'
import ProductPage from '@/components/admin/products/ProductPage'
import { productsData } from '@/lib/data/productData'

type Props = {}

const Products = (props: Props) => {
  
  return (
    <div className='flex flex-col p-5 '>
      <ProductPage productsData={productsData} />
    </div>
  )
}

export default Products