'use client'
import { SelectDropDown } from '@/components/reusableComponents/SelectDropDown'
import { SliderComp } from '@/components/reusableComponents/SliderComp'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'

type Props = {}

const FilterComp = (props: Props) => {
    const [search,setSearch] = useState<string>("")
    const [sort,setSort] = useState<string>("")
    const [maxPrice,setMaxPrice] = useState<number>(100000)
    const [category,setCategory] = useState<string>("")
    const [page,setPage] = useState<number>(1)
    console.log(sort);
    
    const data = [
        {
            label:"low to high",
            value:"asc"
        },
        {
            label:"high to low",
            value:"dsc"
        },
    ]
    const categories = [
        {
            label:"All",
            value:"all"
        },
        {
            label:"Footwear",
            value:"footwear"
        },
        {
            label:"Clothes",
            value:"clothes"
        },
        {
            label:"Electronics",
            value:"electronics"
        },
    ]
    console.log(maxPrice);
    
  return (
    <div className='w-full flex flex-col gap-4'>
        <h1 className='flex text-xl uppercase font-semibold'>filters</h1>
        <div className='mt-4'>
            <SelectDropDown selectedValue={sort} setSelectedValue={setSort} data={data} header='sort by price'  />
        </div>
        <div className='w-full flex flex-col gap-3'>
            <Label>Max Price</Label>
            <SliderComp className='w-full px-2' value={maxPrice} setValue={setMaxPrice}/>
        </div>
        <div className='mt-4'>
            <SelectDropDown selectedValue={category} setSelectedValue={setCategory} data={categories} header='Select Category'  />
        </div>
    </div>
  )
}

export default FilterComp