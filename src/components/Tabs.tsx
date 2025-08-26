"use client"

import { JSX, useEffect, useState } from "react"

import { Accordion, Cards, RadioGroup, ToastButtons } from "@/containers"

import {
  Alert,
  Combobox,
  Dialog,
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
import Skeleton from "./Skeleton"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

type TabProps = {
  label: string
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
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

const tabComponents: Record<string, JSX.Element> = {
  cards: (
    <div className="mt-2 h-12">
      <Cards />
    </div>
  ),
  accordion: (
    <div className="mt-2 h-12">
      <Accordion />
    </div>
  ),
  alert: (
    <div className="mt-5">
      <Alert
        variant="default"
        title="Heads up!"
        description="You can add components to your app using the cli."
      />
    </div>
  ),
  "text-area": (
    <div className="mt-5">
      <TextArea placeholder="Type your message here." />
    </div>
  ),
  radio: (
    <div className="mt-5 flex justify-center">
      <RadioGroup />
    </div>
  ),
  dialog: (
    <div className="mt-5 flex justify-center">
      <Dialog />
    </div>
  ),
  combobox: (
    <div className="mt-5 flex justify-center">
      <Combobox />
    </div>
  ),
  button: (
    <div className="mt-5 flex flex-col items-center justify-center text-center">
      <p>On clicking, the corresponding toast is activated!</p>
      <ToastButtons />
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
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
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
}

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("cards")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
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
              "Button",
              "Table",
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
