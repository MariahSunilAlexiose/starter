type Props = {
  type: string
  placeholder: string
  className?: string
}

const Input = ({ type, placeholder, className }: Props) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${className} border-input placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50`}
    />
  )
}

export default Input
