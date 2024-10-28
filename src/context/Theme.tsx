"use client";

import { createContext } from "react";

/* eslint-disable no-unused-vars */
export enum Theme {
  light = "light",
  dark = "dark",
}
/* eslint-enable no-unused-vars */

export const { light, dark } = Theme;

type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: dark,
  setTheme: () => {},
});
