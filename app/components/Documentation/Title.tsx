import classNames from "classnames";
import React from "react";


type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Title: React.FC<Props> = ({ children, className }) => {
  const classes = classNames("text-xl font-semibold mt-4", className);
  return (
    <>
      <div className={classes}>{children}</div>
    </>
  );
};

Title.defaultProps = {};

export default Title;
