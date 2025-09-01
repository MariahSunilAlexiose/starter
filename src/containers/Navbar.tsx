"use client"

import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/NavigationMenu"
import { dark, light } from "@/context"
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@/icons"
import { useTheme } from "@/providers"
import { fetchData } from "@/scripts/useFetchData"
import { CallsToActionProps, NavMenuProps } from "@/types"

import { Button, Switch } from "../components"

const MobileNavbar = ({
  items,
  setMobileMenu,
  setMobilePopover,
  mobilePopover,
}: {
  items: {
    name: string
    description?: string
    href: string
    icon: string
  }[]
  setMobileMenu: (mobileMenu: boolean) => void // eslint-disable-line no-unused-vars
  mobilePopover: boolean
  setMobilePopover: (mobilePopover: boolean) => void // eslint-disable-line no-unused-vars
}) => (
  <div className="lg:hidden">
    <div className="fixed inset-0 z-10" />
    <div className="bg-background fixed justify-start flex-col inset-y-0 right-0 z-10 overflow-y-auto p-6 w-60 ring-1 ring-gray-900/10">
      <div className="flex justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <Image
            className="h-8 w-auto"
            src="/favicon.ico"
            alt="Vercel Icon"
            width={10}
            height={10}
          />
        </a>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenu(false)}
        >
          <span className="sr-only">Close menu</span>
          <Image
            src={XMarkIcon}
            alt="Close Icon"
            className="h-6 w-6 cursor-pointer"
            aria-hidden="true"
          />
        </button>
      </div>
      <div className="mt-12 flow-root">
        <NavigationMenu className="flex-col items-start w-full gap-5">
          <NavigationMenuList className="flex-col w-full gap-3!">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                isOpen={mobilePopover}
                onClick={() => setMobilePopover(!mobilePopover)}
                className="w-full flex justify-between! items-center px-0! text-base!"
              >
                Product
              </NavigationMenuTrigger>
              <NavigationMenuContent
                isOpen={mobilePopover}
                className="mt-2 space-y-2"
              >
                {items.map((item) => (
                  <NavigationMenuLink
                    key={item.name}
                    href={item.href}
                    className="text-base! font-semibold -mx-2"
                  >
                    {item.name}
                  </NavigationMenuLink>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-base! font-semibold -mx-2"
              >
                Features
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-base! font-semibold -mx-2"
              >
                Marketplace
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                className="text-base! font-semibold -mx-2"
              >
                Company
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>

          <Button>
            Log in <span aria-hidden="true">&rarr;</span>
          </Button>
        </NavigationMenu>
      </div>
    </div>
  </div>
)

const Navbar = () => {
  const [clickedPopover, setClickedPopover] = useState<boolean>(false)
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)
  const [mobilePopover, setMobilePopover] = useState<boolean>(false)
  const [products, setProducts] = useState<NavMenuProps[]>([])
  const [callsToAction, setCallsToAction] = useState<CallsToActionProps[]>([])
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark)
  }

  useEffect(() => {
    const fetchOptions = async () => {
      const newProduct = await fetchData<NavMenuProps[]>("nav_menu")
      setProducts(newProduct)
      const newCallToAction =
        await fetchData<CallsToActionProps[]>("callsToAction")
      setCallsToAction(newCallToAction)
    }
    fetchOptions()
  }, [])

  return (
    <header className="bg-background">
      <NavigationMenu className="mx-auto mt-12 mb-6 !max-w-7xl !justify-between px-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-8 w-auto"
              src="/favicon.ico"
              alt="Vercel Icon"
              width={10}
              height={10}
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Image
              src={Bars3Icon}
              alt="Bars3 Icon"
              className="h-6 w-6 cursor-pointer"
              aria-hidden="true"
              onClick={() => setMobileMenu(!mobileMenu)}
            />
          </button>
        </div>

        <NavigationMenuList className="hidden lg:flex lg:gap-x-12">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className="text-foreground flex cursor-pointer items-center gap-x-1 text-sm leading-6 font-semibold"
              onClick={() => setClickedPopover(!clickedPopover)}
              isOpen={clickedPopover}
            >
              Product
            </NavigationMenuTrigger>
            <NavigationMenuContent
              isOpen={clickedPopover}
              className="w-96! p-0! border shadow absolute top-full "
            >
              <div className="p-4">
                {products.map((item) => (
                  <NavigationMenuLink
                    key={item.name}
                    className="group hover:bg-accent relative flex items-center gap-x-6 rounded-lg flex-row! p-4 text-sm leading-6"
                  >
                    <div className="bg-background group-hover:bg-background flex h-11 w-11 flex-none items-center justify-center rounded-lg">
                      <Image
                        alt="Product Icon"
                        src={`/assets/icons/${item.icon}`}
                        width={10}
                        height={10}
                        className="text-foreground h-6 w-6 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        href={item.href}
                        className="text-foreground block font-semibold"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="text-foreground/80 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </NavigationMenuLink>
                ))}
              </div>
              <div className="divide-background bg-accent grid grid-cols-2 divide-x">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="rounded-b-md hover:bg-muted-foreground/20 text-accent-foreground flex items-center justify-center gap-x-2.5 p-3 text-sm leading-6 font-semibold"
                  >
                    <Image
                      src={`/assets/icons/${item.icon}`}
                      alt="Icon"
                      className="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                      width={10}
                      height={10}
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle}>
              <Link href="/features">Features</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle}>
              <Link href="/marketplace">Marketplace</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle}>
              <Link href="/company">Company</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
          <Button>
            Log in <span aria-hidden="true">&rarr;</span>
          </Button>
          <Switch
            clickFn={toggleTheme}
            expr={theme === dark}
            img1={SunIcon}
            img2={MoonIcon}
          />
        </div>
      </NavigationMenu>

      {mobileMenu && (
        <MobileNavbar
          items={[...products, ...callsToAction]}
          setMobileMenu={setMobileMenu}
          setMobilePopover={setMobilePopover}
          mobilePopover={mobilePopover}
        />
      )}
    </header>
  )
}

export default Navbar
