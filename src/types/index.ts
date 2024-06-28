export type Recipe = {
  id: string;
  title: string;
  image: string;
  description: string;
  content: string;
  vegan: boolean;
};

export type Radio = {
  title: string;
  value: string;
};

export type SelectProps = {
  title: string;
  value: string;
};

export type AccordionProps = {
  trigger: string;
  content: string;
};
