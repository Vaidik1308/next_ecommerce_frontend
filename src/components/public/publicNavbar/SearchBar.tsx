"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-dropdown-menu"
import { FaSearch } from "react-icons/fa"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function SearchBar() {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList className="w-full">
        <NavigationMenuItem className="w-full">
          <NavigationMenuTrigger className="w-full bg-gray-200 flex items-center justify-center gap-2"><FaSearch />Search</NavigationMenuTrigger>
          <NavigationMenuContent>
          <form className="w-[600px] p-5 flex flex-col gap-4" action="">
                <div className="flex flex-col gap-1">
                    <Label>Name of the Product </Label>
                    <Input 
                        className="focus-visible:outline-none focus-visible:ring-0
                        focus:border-black focus-visible:ring-ring focus-visible:ring-offset-0" 
                        type="text" 
                        placeholder="products, name , category" 
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Category</Label>
                    <Input 
                        className="focus-visible:outline-none focus-visible:ring-0
                        focus:border-black focus-visible:ring-ring focus-visible:ring-offset-0" 
                        type="text" 
                        placeholder="Mobile,Footwears,electronics,etc" 
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <Label>Sub-Category</Label>
                    <Input 
                        className="focus-visible:outline-none focus-visible:ring-0
                        focus:border-black focus-visible:ring-ring focus-visible:ring-offset-0" 
                        type="text" 
                        placeholder="shirt,phone,laptop,etc"
                    />
                </div>
            </form>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
