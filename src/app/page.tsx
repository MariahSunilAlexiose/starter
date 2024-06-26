import { Input, Label, Separator, TextArea, ThemeToggle } from "@/components";
import { Accordion, Cards, RadioGroup } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-10">
        <ThemeToggle />
      </div>
      <Cards />
      <Separator styles="my-10" />
      <div className="flex w-full flex-col items-center">
        <Accordion />
      </div>
      <div className="my-10 w-1/2">
        <Label>Email</Label>
        <Input type="email" placeholder="Email" />
      </div>
      <TextArea placeholder="Type your message here." />
      <div className="py-10">
        <RadioGroup />
      </div>
    </main>
  );
}
