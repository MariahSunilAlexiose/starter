"use client"

import { createContext, Dispatch, SetStateAction } from "react"

/* eslint-disable no-unused-vars */
export enum Theme {
  light = "light",
  dark = "dark",
}
/* eslint-enable no-unused-vars */

export const { light, dark } = Theme

type ThemeContextType = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: dark,
  setTheme: () => {},
})
