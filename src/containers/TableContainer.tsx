"use client"

import { useEffect, useState } from "react"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/cmp"
import { fetchData } from "@/scripts/useFetchData"

type InvoiceProps = {
  invoice: string
  paymentStatus: string
  totalAmount: string
  paymentMethod: string
}

const TableContainer = () => {
  const [tableItems, setTableItems] = useState<InvoiceProps[]>([])
  useEffect(() => {
    const fetchOptions = async () => {
      const fetchedTableItems = await fetchData<InvoiceProps[]>("table")
      setTableItems(fetchedTableItems)
    }
    fetchOptions()
  }, [])
  return (
    <div className="max-w-2xl mx-auto">
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
  )
}

export default TableContainer
