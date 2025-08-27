import { Avatar, AvatarImage } from "./Avatar"
import Badge from "./Badge"
import Button from "./Button"

type Props = {
  title: string
  image: string
  description: string
  content: string
  footer: boolean
}

const Card = ({ title, image, description, content, footer }: Props) => {
  return (
    <div className="bg-card text-card-foreground flex flex-col justify-between rounded-xl border shadow-sm">
      <div className="flex flex-row items-center gap-2 space-y-1.5 p-6">
        <Avatar className="size-12">
          <AvatarImage src={`/assets/images/${image}`} alt={title} />
        </Avatar>
        <div>
          <h3 className="leading-none font-semibold tracking-tight">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <p>{content}</p>
      </div>
      <div className="flex items-center justify-between p-6 pt-0">
        <Button>View Recipes</Button>
        {footer && <Badge variant="accent">Vegan!</Badge>}
      </div>
    </div>
  )
}

export default Card
