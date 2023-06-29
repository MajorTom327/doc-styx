import { DateTime } from "luxon";
import React from "react";
import { Footer } from "react-daisyui";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Sidebar>
        <Navbar />
        <div className="px-4 min-h-screen">{children}</div>
        <Footer className="p-10 bg-secondary/20 text-secondary-content">
          <div>
            <Footer.Title>Services</Footer.Title>
            <a className="link link-hover">Styx ©️ 2017-{DateTime.local().year}</a>
          </div>
        </Footer>
      </Sidebar>
    </>
  );
};

Layout.defaultProps = {};

export default Layout;
