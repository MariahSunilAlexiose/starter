type Props = {
  placeholder: string
  className?: string
}

const TextArea = ({ placeholder, className }: Props) => {
  return (
    <textarea
      className={`${className} border-input placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50`}
      placeholder={placeholder}
    />
  )
}

export default TextArea
