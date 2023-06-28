import React from "react";
import RouteEnum from "~/refs/enum/route";

import { ButtonLink } from "../ButtonLink";

type Props = {};

export const Navbar: React.FC<Props> = () => {
  return (
    <>
      <div className="flex w-full items-center justify-start gap-2 font-sans px-4">
        <ButtonLink to={RouteEnum.home} color="ghost" className="normal-case">
          <h1 className="text-justify text-2xl font-semibold">
            Documentation de l'application Styx
          </h1>
        </ButtonLink>
      </div>
    </>
  );
};

Navbar.defaultProps = {};

export default Navbar;
