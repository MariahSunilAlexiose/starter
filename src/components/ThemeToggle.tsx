"use client";

import Image from "next/image";

import { dark, light } from "@/context";
import { Moon, sun } from "@/icons";
import { useTheme } from "@/providers";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  };
  return (
    <div
      className="relative flex h-8 w-14 cursor-pointer items-center rounded-full bg-stone-50 p-1 dark:bg-stone-900"
      onClick={toggleTheme}
      style={{ transition: "background 0.3s ease-in-out" }}
    >
      <Image src={sun} alt="Sun Icon" />
      <div
        className="absolute h-7 w-7 transform rounded-full bg-stone-100 shadow-lg transition-transform duration-300 dark:bg-black"
        style={{
          transform: theme === dark ? "translateX(80%)" : "translateX(-8%)",
          transition: "transform 0.3s ease-in-out",
        }}
      ></div>
      <Moon fill={theme === dark ? "white" : "black"} />
    </div>
  );
};

export default ThemeToggle;
