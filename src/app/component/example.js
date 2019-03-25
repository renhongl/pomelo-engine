import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import { ballCode, birdExampleCode, sampleSpriteCode } from "../config/global";
import Code from "./code";

export default class Example extends React.Component {
  state = {
    showCode: false
  };

  toggleCodeView = () => {
    this.setState({
      showCode: !this.state.showCode
    });
  };

  getCodeView() {
    const { selected } = this.props;
    switch (selected) {
      case 0:
        return <Code content={sampleSpriteCode} />;
      case 1:
        return <Code content={ballCode} />;
      case 2:
        return <Code content={birdExampleCode} />;
      default:
        <Code content={ballCode} />;
    }
  }

  render() {
    const {
      classes,
      filter,
      selected,
      onNavClick,
      exampleList,
      changePage
    } = this.props;
    return (
      <React.Fragment>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
        >
          <div className="example-page-header">
            <Button
              color="primary"
              onClick={() => changePage(1)}
              style={{ fontSize: 20 }}
            >
              Pomelo Engine
            </Button>
          </div>
          <Divider />
          <List>
            {exampleList
              .filter(item => item.toUpperCase().includes(filter.toUpperCase()))
              .map((text, index) => (
                <ListItem
                  button
                  key={text}
                  selected={selected === index}
                  onClick={() => onNavClick(index)}
                >
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
          </List>
        </Drawer>
        <main className="example-content" />
        {this.state.showCode ? (
          <div className="code-view">
            <h4>Example Resouce Code</h4>
            {this.getCodeView()}
          </div>
        ) : null}
        <Fab
          color="primary"
          aria-label="Add"
          className="code-view-btn"
          onClick={this.toggleCodeView}
        >
          <Icon>code</Icon>
        </Fab>
      </React.Fragment>
    );
  }
}
