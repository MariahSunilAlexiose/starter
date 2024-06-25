import React from "react";

import { Avatar } from ".";
import Button from "./Button";

type Props = {
  title: string;
  image: string;
  description: string;
  content: string;
  footer: boolean;
};

const Card = ({ title, image, description, content, footer }: Props) => {
  return (
    <div className="flex flex-col justify-between rounded-xl border bg-card text-card-foreground shadow">
      <div className="flex-rpw flex items-center gap-2 space-y-1.5 p-6">
        <Avatar title={title} image={`/assets/images/${image}`} />

        <div>
          <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <p>{content}</p>
      </div>
      <div className="flex items-center justify-between p-6 pt-0">
        <Button title="View Recipe" />
        {footer && <p>Vegan!</p>}
      </div>
    </div>
  );
};

export default Card;
