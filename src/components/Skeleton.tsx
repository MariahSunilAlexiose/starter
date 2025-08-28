type Props = {
  className: string
}

const Skeleton = ({ className, ...props }: Props) => {
  return (
    <div
      data-slot="skeleton"
      className={`${className} bg-primary/10 animate-pulse rounded-md`}
      {...props}
    />
  )
}

export default Skeleton
