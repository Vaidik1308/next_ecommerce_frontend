
import React from 'react'
import SingleList from './SingleList'
import { IconType } from 'react-icons';

type SubHeading = {
    subLabel:string;
    icon:React.JSX.Element;
    pathname:string;
}
type Props = {
    label:string;
    subHeadings:SubHeading[]
}

const SidebarLists = ({label,subHeadings}: Props) => {
    
  return (
    <div className='flex flex-col ml-5'>
        <h2 className='text-gray-500 tracking-widest uppercase'>{label}</h2>
        <div className='flex flex-col '>
            {
                subHeadings.map((data,i) => (

                    <SingleList 
                        key={i} 
                        icon={data.icon} 
                        subLabel={data.subLabel} 
                        pathname={data.pathname}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default SidebarLists