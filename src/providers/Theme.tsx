"use client";

import { ReactNode, useEffect, useState } from "react";

import { dark, light, Theme, ThemeContext } from "@/context";

type ThemeProviderProps = {
  children: ReactNode;
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ? dark : light;
    }
    return light;
  });
  useEffect(() => {
    const setSystemTheme = () => {
      const systemTheme =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? dark
          : light;
      setTheme(systemTheme === dark ? dark : light);
    };

    setSystemTheme();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", setSystemTheme);

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", setSystemTheme);
    };
  }, []);

  useEffect(() => {
    if (theme === dark) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", dark);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", light);
    }
  }, [theme]);

  return { theme, setTheme };
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, setTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
