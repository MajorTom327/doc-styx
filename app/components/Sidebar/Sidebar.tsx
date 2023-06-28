import React from "react";
import { Drawer, Menu } from "react-daisyui";
import RouteEnum from "~/refs/enum/route";

import DocLink from "../DocLink/DocLink";
import SidebarSubmenu from "./SidebarSubmenu";

type Props = {
  children: React.ReactNode;
};

export const SidebarContent: React.FC = () => {
  return (
    <div className="border border-r-base-200 bg-secondary/25 text-secondary-content">
      <Menu className="p-4 overflow-y-auto w-80">
        <Menu.Item>
          <DocLink nav end to={RouteEnum.home}>
            Accueil
          </DocLink>
        </Menu.Item>
        <Menu.Item>
          <DocLink nav end to={RouteEnum.gettingStarted}>
            Démarrage
          </DocLink>
        </Menu.Item>
        <Menu.Item>
          <DocLink nav end to={RouteEnum.society}>
            Société
          </DocLink>
        </Menu.Item>
        <Menu.Item>
          <DocLink nav end to={RouteEnum.sheets} withSubmenu>
            Fiches
          </DocLink>
        </Menu.Item>
        <SidebarSubmenu base={RouteEnum.sheets}>
          <Menu>
            <Menu.Item>
              <DocLink nav end to={RouteEnum.sheetCivility}>
                Civility
              </DocLink>
            </Menu.Item>
            <Menu.Item>
              <DocLink nav end to={RouteEnum.sheetCremation}>
                Crémation
              </DocLink>
            </Menu.Item>
            <Menu.Item>
              <DocLink nav end to={RouteEnum.sheetServices}>
                Services
              </DocLink>
            </Menu.Item>
            <Menu.Item>
              <DocLink nav end to={RouteEnum.sheetPayment}>
                Paiements
              </DocLink>
            </Menu.Item>
          </Menu>
        </SidebarSubmenu>
        <Menu.Item>
          <DocLink nav to={RouteEnum.privacy}>
            Vie privée et transparence
          </DocLink>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export const Sidebar: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Drawer side={<SidebarContent />} mobile>
        <div className="flex flex-col gap-4 pt-2">{children}</div>
      </Drawer>
    </>
  );
};

Sidebar.defaultProps = {};

export default Sidebar;
