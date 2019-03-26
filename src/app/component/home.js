import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

export default class Home extends React.Component {
  render() {
    const { changePage, changeDocNumber } = this.props;
    return (
      <div className="normal-content">
        <div className="home-top">
          <h1>Pomelo Engine</h1>
          <p>A javascript library for develop 2d games.</p>
          <div>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => changePage(4)}
            >
              Download
              <Icon>vertical_align_bottom</Icon>
            </Button>
            <Button
              color="primary"
              size="large"
              style={{ marginLeft: 5 }}
              onClick={() => {
                changePage(3);
                changeDocNumber("2");
              }}
            >
              Get Started >
            </Button>
          </div>
        </div>
        <div className="home-bottom">
          <div className="home-bottom-nav">
            <Icon>cloud_download</Icon>
            <h4>Installation</h4>
            <div>Download this library by click download button.</div>
            <div>
              <code>$ npm install pomelo-engine</code>
              <br />
              <code>{`$ import { Game } from 'pomelo-engine'`}</code>
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => {
                changePage(3);
                changeDocNumber("1");
              }}
            >
              Read the installation docs >
            </Button>
          </div>
          <div className="home-bottom-nav">
            <Icon>book</Icon>
            <h4>Documentation</h4>
            <div>
              For pomelo engine, we have a full and clear documentation, you can
              get everything you want in this documentation.
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => {
                changePage(3);
                changeDocNumber("2");
              }}
            >
              Go to documentation >
            </Button>
          </div>
          <div className="home-bottom-nav">
            <Icon>ondemand_video</Icon>
            <h4>Demos</h4>
            <div>
              We have all kinds of demos for how to use this library, you can
              check code when you see a demo also.
            </div>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => changePage(2)}
            >
              View demos >
            </Button>
          </div>
        </div>
        <footer>Copyright &#169; pomelo</footer>
      </div>
    );
  }
}
