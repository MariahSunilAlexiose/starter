import { AccordionItem } from "@/components";

const Accordion = () => {
  return (
    <div className="w-6/12">
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
