import {
  ChangeEvent,
  Children,
  cloneElement,
  ComponentProps,
  isValidElement,
} from "react"

const RadioGroup = ({
  name,
  value,
  onItemChange,
  className,
  children,
}: ComponentProps<"div"> & {
  name: string
  value: string
  onItemChange: (value: string) => void // eslint-disable-line no-unused-vars
}) => {
  return (
    <div data-slot="radio-group" className={`${className} flex flex-col gap-3`}>
      {Children.map(children, (child) => {
        if (
          isValidElement<
            ComponentProps<"div"> & {
              name: string
              selectedValue?: string
              value: string
              onChange: (value: string) => void // eslint-disable-line no-unused-vars
            }
          >(child) &&
          typeof child.props.value === "string"
        ) {
          return cloneElement(child, {
            name,
            selectedValue: value,
            onChange: () => onItemChange(child.props.value),
          })
        }
        return child
      })}
    </div>
  )
}

const RadioGroupItem = ({
  value,
  name,
  selectedValue,
  onItemChange,
  className,
  children,
}: ComponentProps<"div"> & {
  name: string
  selectedValue?: string
  value: string
  onItemChange: (value: string) => void // eslint-disable-line no-unused-vars
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onItemChange(event.target.value)
  }
  const id = `${name}-${value}`

  return (
    <div
      data-slot="radio-group-item"
      className={`${className} disabled:cursor-not-allowed disabled:opacity-50 flex items-center gap-2 cursor-pointer`}
    >
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={value === selectedValue}
        onChange={handleChange}
        className="accent-primary peer"
      />
      <label htmlFor={id} className="cursor-pointer peer-checked:text-primary">
        {children}
      </label>
    </div>
  )
}

export { RadioGroup, RadioGroupItem }
