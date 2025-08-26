import Image, { StaticImageData } from "next/image"

type Props = {
  clickFn: () => void
  expr: boolean
  img1?: StaticImageData
  img2?: StaticImageData
}

const Switch = ({ clickFn, expr, img1, img2 }: Props) => {
  return (
    <button
      onClick={clickFn}
      style={{ transition: "background 0.3s ease-in-out" }}
      className="peer bg-input checked:bg-primary focus-visible:ring-ring focus-visible:ring-offset-background inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-xs transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
    >
      {img1 && <Image src={img1} alt="Icon" />}
      <span
        style={{
          transform: expr ? "translateX(85%)" : "translateX(0%)",
          transition: "transform 0.3s ease-in-out",
        }}
        className="bg-background pointer-events-none absolute block h-7 w-7 translate-x-0 rounded-full shadow-lg ring-0 transition-transform checked:translate-x-4"
      ></span>
      {img2 && (
        <div className="pl-2">
          <Image src={img2} alt="Icon" />
        </div>
      )}
    </button>
  )
}

export default Switch
