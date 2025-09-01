import { ComponentProps } from "react"

import Image, { ImageProps } from "next/image"

const Avatar = ({ className, children, ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="avatar"
      className={`${className} relative flex size-8 shrink-0 overflow-hidden rounded-full`}
      {...props}
    >
      {children}
    </div>
  )
}

const AvatarImage = ({
  className,
  alt,
  ...props
}: Omit<ImageProps, "fill">) => {
  return (
    <div
      data-slot="avatar-image"
      className={`relative aspect-square size-full ${className}`}
    >
      <Image
        data-slot="avatar-image"
        alt={alt}
        fill
        className="object-cover"
        {...props}
      />
    </div>
  )
}

const AvatarFallback = ({
  className,
  children,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      data-slot="avatar-fallback"
      className={`${className} bg-muted-foreground/50 text-background flex size-full items-center justify-center rounded-full`}
      {...props}
    >
      {children}
    </div>
  )
}

export { Avatar, AvatarImage, AvatarFallback }
