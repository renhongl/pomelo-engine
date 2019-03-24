import React from "react";
import { docs } from "../config/global";
import Code from "./code";

export default class Document extends React.Component {
  render() {
    return (
      <div className="normal-content">
        <Code content={docs} />
      </div>
    );
  }
}
