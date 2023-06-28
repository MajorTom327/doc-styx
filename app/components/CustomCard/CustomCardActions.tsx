import classNames from "classnames";
import React from "react";
import { Card } from "react-daisyui";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const CustomCardActions: React.FC<Props> = ({ children, className }) => {
  const classes = classNames("flex gap-2", className);

  return (
    <>
      <Card.Actions className={classes}>{children}</Card.Actions>
    </>
  );
};

CustomCardActions.defaultProps = {};

export default CustomCardActions;
