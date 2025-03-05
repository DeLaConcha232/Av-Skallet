/* eslint-disable react/prop-types */

import { Card } from "flowbite-react";

export default function Component(props) {
  return (
    <Card horizontal className="flex-shrink-0 bg-primary">
      <h5 className="text-lg font-Rubik text-background tracking-widest px-16">
        {props.title}
      </h5>
    </Card>
  );
}
