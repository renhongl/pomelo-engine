import React from "react";
import { docsDetail } from "../config/global";
import Code from "./code";
import Nav from "./nav";

export default class Document extends React.Component {
  getDoc() {
    const { docNumber } = this.props;
    let nums = docNumber.split("-");
    let content = "";
    let path = "";
    if (nums.length === 1) {
      path = docsDetail[nums[0]].content;
    } else {
      path = docsDetail[nums[0]].children[nums[1]].content;
    }
    content = require(`../config/${path}.js`);
    return <Code content={content.default} />;
  }

  render() {
    const { changeDocNumber, docNumber } = this.props;
    return (
      <div className="normal-content">
        <Nav changeDocNumber={changeDocNumber} docNumber={docNumber} />
        {this.getDoc()}
      </div>
    );
  }
}
