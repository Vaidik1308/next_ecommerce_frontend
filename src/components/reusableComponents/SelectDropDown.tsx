import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type Props = {
  header:string
  data:{
    label:string;
    value:string;
  }[];
  selectedValue:string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>
}


export function SelectDropDown({selectedValue,setSelectedValue,data ,header}:Props) {
  return (
    <Select onValueChange={(value) => setSelectedValue(value)}>
      <SelectTrigger className="w-full">
        <SelectValue  placeholder={`${header}`} />
      </SelectTrigger>
      <SelectContent >
        <SelectGroup >
          {data.map((item,i) =>(
            <SelectItem  key={i} value={item.value}>{item.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
