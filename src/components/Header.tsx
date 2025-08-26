"use client"

import { useEffect, useState } from "react"

import Image from "next/image"
import Link from "next/link"

import { dark, light } from "@/context"
import {
  Bars3Icon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@/icons"
import { useTheme } from "@/providers"
import { fetchData } from "@/scripts/useFetchData"
import { CallsToActionProps, NavMenuProps } from "@/types"

import { Button, Switch } from "."

/* eslint-disable */
type MobileHeaderProps = {
  items: {
    name: string
    description?: string
    href: string
    icon: string
  }[]
  setMobileMenu: (mobileMenu: boolean) => void
  mobilePopover: boolean
  setMobilePopover: (mobilePopover: boolean) => void
}
/* eslint-enable */

const MobileHeader = ({
  items,
  setMobileMenu,
  setMobilePopover,
  mobilePopover,
}: MobileHeaderProps) => (
  <div className="lg:hidden">
    <div className="fixed inset-0 z-10" />
    <div className="bg-background fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-6 sm:w-[400px] sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
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
      <div className="mt-6 flow-root">
        <div className="space-y-2 py-6">
          <div className="-mx-3">
            <div
              onClick={() => setMobilePopover(!mobilePopover)}
              className="text-foreground hover:bg-accent flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base leading-7 font-semibold"
            >
              Product
              <Image
                src={ChevronDownIcon}
                alt="Chevron Down Icon"
                className={`text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 ${mobilePopover ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </div>
            {mobilePopover && (
              <div className="mt-2 space-y-2">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:bg-accent block rounded-lg py-2 pr-3 pl-6 text-sm leading-7 font-semibold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-foreground hover:bg-accent -mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold"
          >
            Features
          </a>
          <a
            href="#"
            className="text-foreground hover:bg-accent -mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-foreground hover:bg-accent -mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold"
          >
            Company
          </a>
        </div>
        <Button>
          Log in <span aria-hidden="true">&rarr;</span>
        </Button>
      </div>
    </div>
  </div>
)

const Header = () => {
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
      <nav
        className="mx-auto mt-12 mb-6 flex max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Global"
      >
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
        <div className="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <div
              className="text-foreground flex cursor-pointer items-center gap-x-1 text-sm leading-6 font-semibold"
              onClick={() => setClickedPopover(!clickedPopover)}
            >
              Product
              <Image
                src={ChevronDownIcon}
                alt="Chevron Down Icon"
                className={`text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200 ${clickedPopover ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </div>
            {clickedPopover && (
              <div className="bg-background absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group hover:bg-accent relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6"
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
                        <a
                          href={item.href}
                          className="text-foreground block font-semibold"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="text-foreground/80 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="divide-background bg-accent grid grid-cols-2 divide-x">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="hover:bg-muted-foreground/20 text-accent-foreground flex items-center justify-center gap-x-2.5 p-3 text-sm leading-6 font-semibold"
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
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-foreground text-sm leading-6 font-semibold"
          >
            Features
          </a>
          <a
            href="#"
            className="text-foreground text-sm leading-6 font-semibold"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-foreground text-sm leading-6 font-semibold"
          >
            Company
          </a>
        </div>
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
      </nav>
      {mobileMenu && (
        <MobileHeader
          items={[...products, ...callsToAction]}
          setMobileMenu={setMobileMenu}
          setMobilePopover={setMobilePopover}
          mobilePopover={mobilePopover}
        />
      )}
    </header>
  )
}

export default Header
