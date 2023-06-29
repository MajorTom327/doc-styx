import classNames from "classnames";
import { defaultTo } from "ramda";
import type { ReactNode } from "react";
import React from "react";
import type RouteEnum from "~/refs/enum/route";



import DocLink from "../DocLink/DocLink";

type Props = {
  to: RouteEnum;
  shape?: "circle" | "square" | undefined;
  size?: "lg" | "md" | "sm" | "xs" | undefined;
  variant?: "outline" | "link" | undefined;
  color?:
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "info"
    | "success"
    | "warning"
    | "error"
    | undefined;
  wide?: boolean | undefined;
  fullWidth?: boolean | undefined;
  responsive?: boolean | undefined;
  animation?: boolean | undefined;
  loading?: boolean | undefined;
  active?: boolean | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean | undefined;

  children: ReactNode;
  prefetch?: "intent" | "render" | "none";
  className?: string;
  params?: Record<string, string>;
};

export const ButtonLink: React.FC<Props> = ({
  to,
  shape,
  size,
  variant,
  color,
  wide,
  fullWidth,
  responsive,
  animation,
  loading,
  active,
  disabled,
  startIcon,
  endIcon,
  children,
  prefetch,
  className,
  params,
}) => {
  const classes = classNames(
    "no-underline",
    "text-neutral",
    "btn",
    {
      "btn-lg": size === "lg",
      "btn-md": size === "md",
      "btn-sm": size === "sm",
      "btn-xs": size === "xs",
    },
    {
      "btn-circle": shape === "circle",
      "btn-square": shape === "square",
      "btn-outline": variant === "outline",
      "btn-link": variant === "link",
    },
    {
      "btn-primary text-primary-content": color === "primary",
      "btn-secondary text-secondary-content": color === "secondary",
      "btn-accent text-accent-content": color === "accent",
      "btn-info text-info-content": color === "info",
      "btn-success text-success-content": color === "success",
      "btn-warning text-warning-content": color === "warning",
      "btn-error text-error-content": color === "error",
      "btn-ghost text-neutral": color === "ghost",
    },
    {
      "btn-wide": wide,
      "btn-block": fullWidth,
      "btn-xs md:btn-sm lg:btn-md xl:btn-lg": responsive,
    },
    {
      "no-animation": !animation,
      "btn-active": active,
      "btn-disabled": disabled,
      loading: loading,
    },
    className
  );

  return (
    <DocLink
      to={to}
      params={params}
      className={classes}
      prefetch={defaultTo("intent", prefetch)}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </DocLink>
  );
};

ButtonLink.defaultProps = {};

export default ButtonLink;
