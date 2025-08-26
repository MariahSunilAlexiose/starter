"use client"

import { useState } from "react"

import Image from "next/image"

import { XMarkIcon } from "@/icons"

import { Button, Checkbox, Input, Label } from "."

const Dialog = () => {
  const [clicked, setClicked] = useState<boolean>(false)
  return (
    <div>
      <div className="justify-center" onClick={() => setClicked(true)}>
        <Button variant="outline">Edit Profile</Button>
      </div>
      {clicked && (
        <div className="open:animate-in open:fade-in-0 open:zoom-in-95 open:slide-in-from-left-1/2 open:slide-in-from-top-[48%] bg-background fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 sm:max-w-[425px] sm:rounded-lg">
          <div
            className="ring-offset-background open:bg-accent open:text-muted-foreground focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
            onClick={() => setClicked(!clicked)}
          >
            <Image src={XMarkIcon} alt="Close Icon" className="h-4 w-4" />
            <span className="sr-only">Close Icon</span>
          </div>
          <div className="flex flex-col space-y-1.5 text-center sm:text-left">
            <div className="text-lg leading-none font-semibold tracking-tight">
              Edit profile
            </div>
            <div className="text-muted-foreground text-sm">
              Make changes to your profile here. Click save when you&quot;re
              done.
            </div>
          </div>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                type="name"
                placeholder="Pedro Duarte"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                type="username"
                placeholder="@peduarte"
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-start sm:space-x-2 sm:pl-24">
              <Checkbox id="email" label="You Sure?" />
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
            <Button type="submit">Save changes</Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dialog
