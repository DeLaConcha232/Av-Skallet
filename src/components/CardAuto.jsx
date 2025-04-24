/* eslint-disable react/prop-types */

import { Card } from "flowbite-react";

export default function Component(props) {
  return (
    <Card horizontal className="flex-shrink-0 bg-primary">
      <h4 className="text-sm font-Rubik text-background tracking-widest px-16 md:text-lg">
        {props.title}
      </h4>
    </Card>
  );
}
