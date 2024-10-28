"use client";

import { Tabs } from "@/components";
import { useEffect } from "react";

export default function Home() {
  // Checks if fonts are loaded
  useEffect(() => {
    document.fonts
      .load("12px SFDisplay")
      .then(() => {
        console.log("SFDisplay Font loaded successfully!");
      })
      .catch((error) => {
        console.error("SFDisplay Font failed to load:", error);
      });
  }, []);
  useEffect(() => {
    document.fonts
      .load("12px SFText")
      .then(() => {
        console.log("SFText Font loaded successfully!");
      })
      .catch((error) => {
        console.error("SFText Font failed to load:", error);
      });
  }, []);
  return (
    <main className="flex flex-col items-center justify-between">
      <Tabs />
    </main>
  );
}
