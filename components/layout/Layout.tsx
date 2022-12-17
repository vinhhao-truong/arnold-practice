import React from "react";
import ReactProps from "../../interfaces/ReactProps";
import getFileList from "../../utils/getFileList";
import { getClasses } from "../../utils/getProps";

const Layout: React.FC<ReactProps> = ({ className, style, children }) => {
  return (
    <div className={`${getClasses(className)}`} style={style}>
      {children}
    </div>
  );
};

export default Layout;
