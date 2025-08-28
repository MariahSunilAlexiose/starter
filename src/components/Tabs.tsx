"use client"

import { JSX, useEffect, useState } from "react"

import Image from "next/image"

import { Cards } from "@/containers"
import {
  CheckCircleIcon,
  CheckIcon,
  ChevronUpDownIcon,
  ExclamationTriangleIcon,
} from "@/icons"
import {
  ChocolateCookiesImg,
  GrilledMushroomsImg,
  MushroomRisottoImg,
} from "@/img"
import { useToast } from "@/providers"
import { fetchData } from "@/scripts/useFetchData"
import { AccordionProps, SelectProps } from "@/types"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertTitle,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Checkbox,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  Skeleton,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TextArea,
} from "."

type TabProps = {
  label: string
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export type InvoiceProps = {
  invoice: string
  paymentStatus: string
  totalAmount: string
  paymentMethod: string
}

const TabTrigger = ({ label, activeTab, setActiveTab }: TabProps) => {
  const normalizedLabel = label.toLowerCase().replace(/\s+/g, "-")
  return (
    <div
      className={`${
        activeTab === normalizedLabel
          ? "bg-background text-foreground shadow-sm"
          : ""
      } ring-offset-background focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50`}
      onClick={() => setActiveTab(normalizedLabel)}
    >
      {label}
    </div>
  )
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("cards")
  const [loading, setLoading] = useState(true)
  const [accordionItems, setAccordionItems] = useState<AccordionProps[]>([])
  const [tableItems, setTableItems] = useState<InvoiceProps[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { addToast } = useToast()
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [options, setOptions] = useState<SelectProps[]>([])
  const [selected, setSelected] = useState<string>("comfortable")

  const filteredOptions = options.filter((option) =>
    option.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    const fetchOptions = async () => {
      const newOptions = await fetchData<SelectProps[]>("select_options")
      setOptions(newOptions)
    }
    fetchOptions()
  }, [])

  const tabComponents: Record<string, JSX.Element> = {
    cards: (
      <div className="mt-2 h-12">
        <Cards />
      </div>
    ),
    accordion: (
      <div className="mt-2 justify-center flex ">
        <Accordion className="w-3xl">
          {accordionItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <AccordionItem key={index}>
                <AccordionTrigger
                  isOpen={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent
                  isOpen={isOpen}
                  className="flex flex-col gap-4 text-balance"
                >
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    ),
    alert: (
      <div className="flex justify-center mt-5">
        <div className="flex flex-col max-w-3xl items-center gap-4">
          <Alert>
            <Image
              src={CheckCircleIcon}
              alt="Check Circle Icon"
              width={25}
              height={25}
              className="w-6 h-6"
            />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <Image
              src={ExclamationTriangleIcon}
              alt="Exclamation Triangle Icon"
              width={25}
              height={25}
              className="w-6 h-6"
            />
            <AlertTitle>Unable to process your payment.</AlertTitle>
            <AlertDescription>
              <p>Please verify your billing information and try again.</p>
              <ul className="list-inside list-disc text-sm">
                <li>Check your card details</li>
                <li>Ensure sufficient funds</li>
                <li>Verify billing address</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </div>
    ),
    avatar: (
      <div className="flex justify-center mt-5">
        <div className="flex flex-row flex-wrap items-center gap-12">
          <Avatar>
            <AvatarImage src={ChocolateCookiesImg} alt="Chocolate Cookies" />
            <AvatarFallback>CC</AvatarFallback>
          </Avatar>
          <Avatar className="rounded-lg!">
            <AvatarImage src={GrilledMushroomsImg} alt="Grilled Mushrooms" />
            <AvatarFallback>GM</AvatarFallback>
          </Avatar>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarFallback>CC</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src={MushroomRisottoImg} alt="Mushroom Risotto" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src={ChocolateCookiesImg} alt="Chocolate Cookies" />
              <AvatarFallback>CC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    ),
    "text-area": (
      <div className="mt-5">
        <TextArea placeholder="Type your message here." />
      </div>
    ),
    radio: (
      <div className="mt-5 flex justify-center">
        <RadioGroup name="radio" value={selected} onChange={setSelected}>
          {options.map((option) => (
            <RadioGroupItem
              value={option.value}
              name="radio"
              selectedValue={selected}
              onChange={setSelected}
              key={option.value}
              className="flex items-center gap-3"
            >
              {option.title}
            </RadioGroupItem>
          ))}
        </RadioGroup>
      </div>
    ),
    dialog: (
      <div className="mt-5 flex flex-col items-center gap-5 justify-center">
        <p>Contains Dialog with Label, Input and Checkbox component</p>
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 py-2">
                <div className="flex flex-col gap-3">
                  <Label htmlFor="name-1">Name</Label>
                  <Input
                    type="name"
                    placeholder="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label htmlFor="username-1">Username</Label>
                  <Input
                    type="username"
                    placeholder="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="toggle" disabled />
                  <Label
                    htmlFor="toggle"
                    className="text-sm text-muted-foreground"
                  >
                    Email notifications (disabled)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" defaultChecked />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the terms and conditions
                  </Label>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    ),
    combobox: (
      <div className="mt-5 flex flex-col gap-5 items-center justify-center">
        <p>Contains Popover and Command component with Search feature</p>
        <Popover>
          <PopoverTrigger onClick={() => setOpen(!open)}>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="justify-between"
            >
              {searchTerm
                ? options.find(
                    (option) => option.value === searchTerm.toLowerCase()
                  )?.title
                : "Select option..."}
              <Image
                src={ChevronUpDownIcon}
                alt="Chevron Up Down Icon"
                className="opacity-50"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent isOpen={open} className="w-[200px] p-0">
            <CommandGroup>
              <CommandInput
                placeholder="Search option..."
                className="h-9"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <CommandList>
                {filteredOptions.length === 0 ? (
                  <CommandEmpty>No option found.</CommandEmpty>
                ) : (
                  <CommandGroup>
                    {filteredOptions.map((option) => (
                      <CommandItem
                        key={option.value}
                        value={option.title}
                        onSelect={(currentsearchTerm: string) => {
                          setSearchTerm(
                            currentsearchTerm === searchTerm
                              ? ""
                              : currentsearchTerm
                          )
                          setOpen(false)
                        }}
                      >
                        <Image
                          src={CheckIcon}
                          alt="Check Icon"
                          className={`${
                            searchTerm.toLowerCase() === option.value
                              ? "opacity-100"
                              : "opacity-0"
                          } size-5`}
                        />
                        {option.title}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </CommandList>
            </CommandGroup>
          </PopoverContent>
        </Popover>
      </div>
    ),
    "button-with-toast": (
      <div className="mt-5 flex flex-col items-center justify-center text-center">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Image
              src={CheckCircleIcon}
              alt="Check Circle Icon"
              width={25}
              height={25}
              className="w-6 h-6"
            />
          </Button>
          <Button variant="link">Link Default</Button>
          <Button variant="outline" size="sm">
            Small Outline
          </Button>
          <Button variant="accent" size="lg">
            Large Accent
          </Button>
        </div>
        <p>
          On clicking the below buttons, the corresponding toast is activated!
        </p>
        <>
          {loading ? (
            <div className="flex items-center justify-center gap-4 p-4">
              <Skeleton className="h-9 w-24 rounded p-1" />
              <Skeleton className="h-9 w-24 rounded p-1" />
              <Skeleton className="h-9 w-24 rounded p-1" />
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4 p-4">
              <Button
                variant="destructive"
                onClick={() =>
                  addToast("error", "Error", "The action has failed miserably!")
                }
              >
                Danger
              </Button>
              <Button
                variant="primary"
                onClick={() =>
                  addToast(
                    "info",
                    "Information",
                    "You have logged in successfully!"
                  )
                }
              >
                Info
              </Button>
              <Button
                variant="success"
                onClick={() =>
                  addToast(
                    "success",
                    "Success",
                    "It is successfully implemented!"
                  )
                }
              >
                Success
              </Button>
            </div>
          )}
        </>
      </div>
    ),
    table: (
      <div className="mt-5 max-w-2xl mx-auto">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableItems.map((item) => (
              <TableRow key={item.invoice}>
                <TableCell className="font-medium">{item.invoice}</TableCell>
                <TableCell>{item.paymentStatus}</TableCell>
                <TableCell>{item.paymentMethod}</TableCell>
                <TableCell className="text-right">{item.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    ),
    badge: (
      <div className="flex items-center justify-center mt-5 gap-2">
        <Badge>Badge</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="accent">Accent</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge
          className="h-5 min-w-5 rounded-full px-1 tabular-nums"
          variant="outline"
        >
          20+
        </Badge>
      </div>
    ),
  }

  useEffect(() => {
    const fetchOptions = async () => {
      const fetchedAccordionItems =
        await fetchData<AccordionProps[]>("accordion")
      setAccordionItems(fetchedAccordionItems)
      const fetchedTableItems = await fetchData<InvoiceProps[]>("table")
      setTableItems(fetchedTableItems)
    }
    fetchOptions()
  }, [])

  return (
    <div>
      {loading ? (
        <div className="justify-between pt-20">
          <Skeleton className="h-9 w-24 rounded p-1" />
        </div>
      ) : (
        <div className="pt-20">
          <div className="bg-muted-foreground/10 text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1">
            {[
              "Cards",
              "Accordion",
              "Alert",
              "Text Area",
              "Radio",
              "Dialog",
              "Combobox",
              "Button with Toast",
              "Table",
              "Badge",
              "Avatar",
            ].map((label) => (
              <TabTrigger
                key={label}
                label={label}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            ))}
          </div>
        </div>
      )}
      {loading ? (
        <Skeleton className="mx-auto mt-2 h-12 w-screen max-w-(--breakpoint-xl) p-1" />
      ) : (
        <>{tabComponents[activeTab]}</>
      )}
    </div>
  )
}

export default Tabs
