"use client"

import { ReactNode, useContext, useEffect, useState } from "react"

import { dark, light, Theme, ThemeContext } from "@/context"

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ? dark : light
    }
    return light
  })

  useEffect(() => {
    const setSystemTheme = () => {
      const systemTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? dark
          : light
      setTheme(systemTheme)
    }

    setSystemTheme()
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    mediaQuery.addEventListener("change", setSystemTheme)

    return () => {
      mediaQuery.removeEventListener("change", setSystemTheme)
    }
  }, [])

  useEffect(() => {
    if (theme === dark) {
      document.documentElement.classList.add("dark")
      document.documentElement.setAttribute("data-theme", "dark")
      localStorage.setItem("theme", dark)
    } else {
      document.documentElement.classList.remove("dark")
      document.documentElement.setAttribute("data-theme", "light")
      localStorage.setItem("theme", light)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
