import { Tabs, ThemeToggle } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="p-10">
        <ThemeToggle />
      </div>
      <Tabs />
    </main>
  );
}
