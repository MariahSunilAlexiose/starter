import { Avatar, AvatarFallback, AvatarImage } from "@/cmp"
import {
  ChocolateCookiesImg,
  GrilledMushroomsImg,
  MushroomRisottoImg,
} from "@/img"

const Avatars = () => {
  return (
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
  )
}

export default Avatars
