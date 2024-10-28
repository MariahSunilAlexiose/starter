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
  // Checks if fonts are loaded
  // useEffect(() => {
  //   document.fonts
  //     .load("12px SFDisplay")
  //     .then(() => {
  //       console.log("SFDisplay Font loaded successfully!");
  //     })
  //     .catch((error) => {
  //       console.error("SFDisplay Font failed to load:", error);
  //     });
  // }, []);
  // useEffect(() => {
  //   document.fonts
  //     .load("12px SFText")
  //     .then(() => {
  //       console.log("SFText Font loaded successfully!");
  //     })
  //     .catch((error) => {
  //       console.error("SFText Font failed to load:", error);
  //     });
  // }, []);
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
