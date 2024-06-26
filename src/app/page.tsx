import {
  Alert,
  Checkbox,
  Input,
  Separator,
  TextArea,
  ThemeToggle,
} from "@/components";
import { Accordion, Cards, RadioGroup } from "@/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="p-10">
        <ThemeToggle />
      </div>
      <Cards />
      <Separator styles="my-10" />
      <Alert
        variant="default"
        title="Heads up!"
        description="You can add components to your app using the cli."
      />
      <div className="flex w-full flex-col items-center">
        <Accordion />
      </div>
      <div className="my-10 w-1/2">
        <Checkbox id="email" label="Email" />
        <Input type="email" placeholder="Email" />
      </div>
      <TextArea placeholder="Type your message here." />
      <div className="py-10">
        <RadioGroup />
      </div>
    </main>
  );
}
