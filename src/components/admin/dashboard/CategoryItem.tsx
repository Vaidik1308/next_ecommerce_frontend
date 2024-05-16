import React from 'react'

interface CategoryItemProps {
    color: string;
    value: number;
    heading: string;
  }
  
  const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
    <div className="w-full flex  justify-between p-[1rem] items-center gap-1">
      <h5 className="tracking-widest font-[300]">{heading}</h5>
      <div className='w-[6rem] ml-auto bg-white rounded-[20px] h-[0.5rem] flex items-center gap-2'>
        <div
          style={{
            backgroundColor: color,
            width: `${value}%`,
          }}
          className='rounded-[20px] h-[100%]'
        ></div>
      </div>
      <span className='text-[0.8rem] font-[700]'>{value}%</span>
    </div>
  );

export default CategoryItem