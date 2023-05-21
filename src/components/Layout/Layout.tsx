import Header from "../Header";
import "./Layout.css";
import { LayoutProps } from "./Layout.types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
