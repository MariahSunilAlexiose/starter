import { ThemeToggle } from "@/components";
import { Accordion, Cards } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-10">
        <ThemeToggle />
      </div>
      <Cards />
      <div className="flex w-full flex-col items-center pt-20">
        <Accordion />
      </div>
    </main>
  );
}
