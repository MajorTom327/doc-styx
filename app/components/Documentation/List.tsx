import classNames from "classnames";
import { isNilOrEmpty } from "ramda-adjunct";
import type { ReactNode } from "react";
import React from "react";
import { Button, Menu } from "react-daisyui";
import type RouteEnum from "~/refs/enum/route";

import DocLink from "../DocLink/DocLink";

type Props = {
  children: ReactNode | ReactNode[];
};

export const List: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Menu>{children}</Menu>
    </>
  );
};

type ListItemProps = {
  children: ReactNode;
  to?: RouteEnum;
  className?: string;
  params?: Record<string, string>;
};

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  to,
  params,
}) => {
  const classes = classNames(
    "normal-case text-left justify-start",
    {
      "cursor-default": isNilOrEmpty(to),
    },
    className
  );

  if (isNilOrEmpty(to))
    return (
      <>
        <Menu.Item>
          {/* <Button className={classes} color="ghost">
            {children}
          </Button> */}
          <div className={classes}>{children}</div>
        </Menu.Item>
      </>
    );
  return (
    <>
      <Menu.Item>
        <DocLink className={classes} to={to!} prefetch="none" params={params}>
          {children}
        </DocLink>
      </Menu.Item>
    </>
  );
};

List.defaultProps = {};

export default List;
