'use client'
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useState } from "react";

type SliderProps = React.ComponentProps<typeof Slider>
type CustomProps = {
  value:number;
  setValue: React.Dispatch<React.SetStateAction<number>>
}
type Props = SliderProps & CustomProps;

export function SliderComp({ value, setValue, className, ...props }: Props) {

  const [sliderValue, setSliderValue] = useState<number[]>([50]);

  const handleSliderChange = (value: number[]) => {
    setSliderValue(value);
    setValue(value[0]); // Assuming the slider returns a single value array
  };
  return (
    <Slider
      min={100}
      max={100000}
      value={sliderValue}
      onValueChange={handleSliderChange}
      onChange={() => setValue(value)}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}
