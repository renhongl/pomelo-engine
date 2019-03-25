import React from "react";
import { install, getStarted, coreConcept } from "../config/global";
import Code from "./code";
import Nav from "./nav";

export default class Document extends React.Component {
  getDoc() {
    const { docNumber } = this.props;
    let mapping = {
      "1": <Code content={install} />,
      "2": <Code content={getStarted} />,
      "3-1": <Code content={coreConcept} />
    };
    return mapping[docNumber];
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
