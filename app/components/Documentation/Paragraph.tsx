import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  indent?: boolean;
  className?: string;
};

export const Paragraph: React.FC<Props> = ({ children, indent, className }) => {
  const classes = classNames(
    "text-justify py-2",
    { "indent-4": indent },
    className
  );

  return (
    <>
      <p className={classes}>{children}</p>
    </>
  );
};

Paragraph.defaultProps = {};

export default Paragraph;
