import { ThemeToggle } from "@/components";
import { Cards } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-10">
        <ThemeToggle />
      </div>
      <Cards />
    </main>
  );
}
