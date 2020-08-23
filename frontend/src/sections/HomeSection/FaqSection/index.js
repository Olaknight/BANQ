import React from "react";
import "./index.css";
import { SectionLayout, SubSectionLayout } from "../../../Layouts";
import { Collapse } from "antd";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const FaqSection = () => {
  return (
    <SectionLayout classname="faq__section">
      <SubSectionLayout>
        <h1 className="heading">Frequently asked questions</h1>
        <Collapse
          onChange={callback}
          expandIconPosition="right"
          bordered={false}
          accordion
          className="site-collapse-custom-collapse"
        >
          <Panel
            header="What is banq?"
            key="1"
            className="site-collapse-custom-panel"
            style={{ color: "white" }}
            id="my-panle"
          >
            <p className="accordion__p">
              Banq is a blockchain based donations bank which aims to ensure
              transperacy in the non-for profit industry and beyond. Banq is a
              decentralized digital bank for openly verifiable transactions
              which employs cryptography, open identity verification, blockchain
              technology and token economics to optimize the efficiency of the
              donations economy.
            </p>
          </Panel>
          <Panel
            header="How does it work?"
            key="2"
            className="site-collapse-custom-panel"
          >
            <p className="accordion__p">
              Everyone on the banq platform can perform equally the same thing
              on the platform, deposit token, transfer token, view transaction
              history, verify all transactions on the platform. • Deposit
              Tokens: Tokens are depositted on purchase directly from banq token
              center. • Transfer Tokens: All transations on banq involves
              transfer of tokens right from purchase of token, the token is
              transferred to the donor directly from the official banq account,
              subsequent transfer of donations are basically simple transfer of
              tokens. • View Transactions history: every participating node on a
              the banq network has banq history which is easilly verifiable by
              everyone on the platform. This functionality is made available on
              the officiatl transactions explorer window and individual account
              transaction history window.
            </p>
          </Panel>
          <Panel
            header="What is BNQ?"
            key="3"
            className="site-collapse-custom-panel"
          >
            <p className="accordion__p">
              BNQ is the only currency supported on the banq network although
              toq can be purchased by ny currencies including cryptocurrencies.
              Dollar has been chosen due to it popularity and stability over the
              years. Dollar is everywhere and where there’s no dollar, an
              equivalent amount of dollar in cryptocurrency could be acceptable.
            </p>
          </Panel>
          <Panel
            header="Who is uses banq?"
            key="3"
            className="site-collapse-custom-panel"
          >
            <p className="accordion__p">
              The banq platform is used by varieties of stakeholders which
              includes individual, companies, NGOs and Government agencies{" "}
            </p>
          </Panel>
        </Collapse>
      </SubSectionLayout>
    </SectionLayout>
  );
};

export default FaqSection;
