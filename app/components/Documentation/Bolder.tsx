import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Bolder: React.FC<Props> = ({ children }) => {
  return (
    <>
      <span className="font-semibold">{children}</span>
    </>
  );
};

Bolder.defaultProps = {};

export default Bolder;
