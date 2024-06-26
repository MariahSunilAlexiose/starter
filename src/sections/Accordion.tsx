import { AccordionItem } from "@/components";

const Accordion = () => {
  return (
    <div className="w-full px-5">
      <AccordionItem
        trigger="Is it accessible?"
        content="Yes. It adheres to the WAI-ARIA design pattern."
      />
      <AccordionItem
        trigger="Is it accessible?"
        content="Yes. It adheres to the WAI-ARIA design pattern."
      />
      <AccordionItem
        trigger="Is it accessible?"
        content="Yes. It adheres to the WAI-ARIA design pattern."
      />
    </div>
  );
};

export default Accordion;
