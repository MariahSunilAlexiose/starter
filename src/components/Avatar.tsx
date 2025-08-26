import Image from "next/image"

type Props = {
  image?: string
  title: string
}

const Avatar = ({ image, title }: Props) => {
  return (
    <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
      {image ? (
        <Image
          src={image}
          alt={title}
          className="aspect-square h-full w-full"
          width={100}
          height={100}
        />
      ) : (
        <div className="bg-muted-foreground/20 flex h-full w-full items-center justify-center rounded-full">
          {title.slice(0, 2)}
        </div>
      )}
    </div>
  )
}

export default Avatar
