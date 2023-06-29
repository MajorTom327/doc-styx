import { Link, NavLink, useLocation } from "@remix-run/react";
import classNames from "classnames";
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

  const classes = classNames(
    {
      "text-primary underline": !nav,
    },
    className
  );

  if (nav) {
    return (
      <NavLink to={path} className={classes} end={end}>
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
      <Link to={path} prefetch={prefetch} className={classes}>
        {children}
      </Link>
    </>
  );
};

DocLink.defaultProps = {
  prefetch: "intent",
};

export default DocLink;
