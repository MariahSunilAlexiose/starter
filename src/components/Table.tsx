import { ComponentProps } from "react"

const TableHeader = ({ className, ...props }: ComponentProps<"thead">) => {
  return (
    <thead
      data-slot="table-header"
      className={`bg-accent [&_tr]:border ${className}`}
      {...props}
    />
  )
}

const TableBody = ({ className, ...props }: ComponentProps<"tbody">) => {
  return (
    <tbody
      data-slot="table-body"
      className={`border ${className}`}
      {...props}
    />
  )
}

const TableFooter = ({ className, ...props }: ComponentProps<"tfoot">) => {
  return (
    <tfoot
      data-slot="table-footer"
      className={`bg-muted/50 border font-medium ${className}`}
      {...props}
    />
  )
}

const TableRow = ({ className, ...props }: ComponentProps<"tr">) => {
  return (
    <tr
      data-slot="table-row"
      className={`hover:bg-muted/50 data-[state=selected]:bg-muted border transition-colors ${className}`}
      {...props}
    />
  )
}

const TableHead = ({ className, ...props }: ComponentProps<"th">) => {
  return (
    <th
      data-slot="table-head"
      className={`text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${className}`}
      {...props}
    />
  )
}

const TableCell = ({ className, ...props }: ComponentProps<"td">) => {
  return (
    <td
      data-slot="table-cell"
      className={`p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] ${className}`}
      {...props}
    />
  )
}

const TableCaption = ({ className, ...props }: ComponentProps<"caption">) => {
  return (
    <caption
      data-slot="table-caption"
      className={`text-muted-foreground mt-4 text-sm ${className}`}
      {...props}
    />
  )
}

const Table = ({ className, ...props }: ComponentProps<"table">) => {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={`w-full caption-bottom text-sm ${className}`}
        {...props}
      />
    </div>
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
