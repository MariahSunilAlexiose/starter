import { Alert, Dialog, Separator, TextArea, ThemeToggle } from "@/components";
import { Accordion, Cards, RadioGroup } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-10">
        <ThemeToggle />
      </div>
      <Cards />
      <Separator className="my-10" />

      <div className="grid w-full grid-cols-2 grid-rows-1 items-center gap-4 pt-10">
        <Accordion />
        <div>
          <Alert
            variant="default"
            title="Heads up!"
            description="You can add components to your app using the cli."
          />
          <div className="flex justify-center gap-10 pt-5">
            <TextArea placeholder="Type your message here." />
          </div>
          <div className="grid grid-cols-2 grid-rows-1 pt-5">
            <RadioGroup />
            <Dialog />
          </div>
        </div>
      </div>
    </main>
  );
}
