import React from "react";
import { Layout } from "antd";
import "./index.css";
import { DashBoardHeader, DashMenu, DashMenuItem } from "../../components";

const { Header, Sider, Content } = Layout;

const DashNavList = [
  {
    name: "dashboard",
    iconUrl: "/images/dashboard.svg",
    slug: "dashboard",
  },
  { name: "token center", iconUrl: "/images/coin.svg", slug: "/tokencenter" },
  { name: "donate", iconUrl: "/images/deposit.svg", slug: "/donate" },
  { name: "Withdraw", iconUrl: "/images/withdraw.svg", slug: "/withdraw" },
  { name: "reports", iconUrl: "/images/report.svg", slug: "/report" },
];

const DashBoardLayout = ({ username, children }) => {
  return (
    <Layout className="dashboard__container">
      <Header className="dash__header">
        <DashBoardHeader />
      </Header>
      <Layout className="main__dash">
        <Sider id="dash__nav">
          <div className="nav__container">
            <div className="spans_welcome">
              <span className="span__welcome">Welcome, </span>
              <span className="usernname_span">{username || "user"}</span>
            </div>
            <div>
              <DashMenu linkList={DashNavList} />
            </div>
          </div>
          <div className="down__nav">
            <DashMenuItem name="Log Out" iconUrl="/images/logout.svg" />
          </div>
        </Sider>
        <Content className="dash__content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
