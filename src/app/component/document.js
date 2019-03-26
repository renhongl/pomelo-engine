import React from "react";
import * as global from "../config/global";
import Code from "./code";
import Nav from "./nav";

export default class Document extends React.Component {
  getDoc() {
    const { docNumber } = this.props;
    let nums = docNumber.split("-");
    let content = "";
    if (nums.length === 1) {
      content = global[global.docsDetail[nums[0]].content];
    } else {
      content = global[global.docsDetail[nums[0]].children[nums[1]].content];
    }
    return <Code content={content} />;
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
