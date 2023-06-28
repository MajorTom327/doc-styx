import { Link, NavLink, useLocation } from "@remix-run/react";
import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import type RouteEnum from "~/refs/enum/route";

import getRoute from "./getRoute";

type Props = {
  children: React.ReactNode;
  to: RouteEnum;
  className?: string;
  params?: Record<string, string>;
  nav?: boolean;
  end?: boolean;
  prefetch?: "intent" | "render" | "none" | "viewport";
  withSubmenu?: boolean;
};

export const DocLink: React.FC<Props> = ({
  children,
  to,
  params,
  className,
  prefetch,
  nav,
  end,
  withSubmenu,
}) => {
  const { pathname } = useLocation();
  const path = getRoute(to, params);

  const isCurrent = pathname.startsWith(path);

  if (nav) {
    return (
      <NavLink to={path} className={className} end={end}>
        {children}
        {withSubmenu &&
          (isCurrent ? (
            <FaChevronDown className="absolute right-4" />
          ) : (
            <FaChevronRight className="absolute right-4" />
          ))}
      </NavLink>
    );
  }
  return (
    <>
      <Link to={path} prefetch={prefetch} className={className}>
        {children}
      </Link>
    </>
  );
};

DocLink.defaultProps = {
  prefetch: "intent",
};

export default DocLink;
