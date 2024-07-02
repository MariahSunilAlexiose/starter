"use client";

import { Switch } from "@/components";
import { dark, light } from "@/context";
import { moon, sun } from "@/icons";
import { useTheme } from "@/providers";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === dark ? light : dark);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Switch
        clickFn={toggleTheme}
        expr={theme === dark}
        img1={sun}
        img2={moon}
      />
    </main>
  );
}
