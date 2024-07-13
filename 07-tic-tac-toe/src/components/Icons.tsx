import React, { PropsWithChildren } from "react";
import Icon from "@expo/vector-icons/FontAwesome";

type IconsProps = PropsWithChildren<{
  name: string;
}>;

export default function Icons({ name }: IconsProps) {
  switch (name) {
    case "circle":
      return <Icon name="circle-thin" size={48} color={"#0f0"} />;
      break;
    case "cross":
      return <Icon name="times" color={"#f0f"} size={48} />;
      break;

    default:
      break;
  }
}
