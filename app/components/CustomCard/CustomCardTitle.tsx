import React from "react";
import { Card } from "react-daisyui";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const CustomCardTitle: React.FC<Props> = ({ children, className }) => {
  return <Card.Title className={className}>{children}</Card.Title>;
};

CustomCardTitle.defaultProps = {};

export default CustomCardTitle;
