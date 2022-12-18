import { useRouter } from "next/router";
import React from "react";
import ReactProps from "../../interfaces/ReactProps";
import getFileList from "../../utils/getFileList";
import { getClasses } from "../../utils/getProps";
import Navigation from "./Navigation";
import fs from "fs";

const Layout: React.FC<ReactProps> = ({ className, style, children }) => {
  const router = useRouter();
  const noNavRoute: boolean = ["/_error"].includes(router.route);

  return (
    <div className={`${getClasses(className)}`} style={style}>
      {!noNavRoute && <Navigation />}
      {children}
    </div>
  );
};

export default Layout;
