import { useLocation } from "@remix-run/react";
import React from "react";
import type RouteEnum from "~/refs/enum/route";

type Props = {
  base: RouteEnum;
  children: React.ReactNode;
};

export const SidebarSubmenu: React.FC<Props> = ({ children, base }) => {
  const { pathname } = useLocation();

  if (!pathname.startsWith(base)) {
    return null;
  }

  return <div className="pl-4">{children}</div>;
};

SidebarSubmenu.defaultProps = {};

export default SidebarSubmenu;
