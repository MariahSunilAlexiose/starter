import React from "react"

type RadioGroupProps = {
  name: string
  value: string
  onChange: (value: string) => void // eslint-disable-line no-unused-vars
  className?: string
  children: React.ReactNode
}

function RadioGroup({
  name,
  value,
  onChange,
  className,
  children,
}: RadioGroupProps) {
  return (
    <div data-slot="radio-group" className={`${className} flex flex-col gap-3`}>
      {React.Children.map(children, (child) => {
        if (
          React.isValidElement<RadioGroupItemProps>(child) &&
          typeof child.props.value === "string"
        ) {
          return React.cloneElement(child, {
            name,
            selectedValue: value,
            onChange: () => onChange(child.props.value),
          })
        }
        return child
      })}
    </div>
  )
}

type RadioGroupItemProps = {
  value: string
  name?: string
  selectedValue?: string
  onChange: (value: string) => void // eslint-disable-line no-unused-vars
  className?: string
  children?: React.ReactNode
}

function RadioGroupItem({
  value,
  name,
  selectedValue,
  onChange,
  className,
  children,
}: RadioGroupItemProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
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
