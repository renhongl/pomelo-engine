import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import { exampleListDetail } from "../config/global";
import Code from "./code";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Popover from "@material-ui/core/Popover";

export default class Example extends React.Component {
  state = {
    showCode: false,
    openSnack: true
  };

  toggleCodeView = e => {
    this.setState({ anchorEl: e.currentTarget }, () => {
      this.setState({
        showCode: !this.state.showCode
      });
    });
  };

  getCodeView() {
    const { selected } = this.props;
    try {
      let path = exampleListDetail[selected].codeView;
      const result = require(`../config/${path}.js`);
      return <Code content={result.default} />;
    } catch (error) {
      return null;
    }
  }

  handleClose = () => {
    this.setState({ openSnack: false });
  };

  openSnack = () => {
    this.setState({ openSnack: true });
  };

  handlePopoverClose = () => {
    this.setState({
      showCode: !this.state.showCode
    });
  };

  componentDidMount() {
    this.props.onNavClick(this.props.selected);
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
            {exampleList.map((item, index) => (
              <ListItem
                button
                key={item.name}
                selected={selected === index}
                onClick={() => {
                  this.handleClose();
                  onNavClick(index);
                  this.openSnack();
                }}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div className="example-content">
          <div className="default-example-view">Select to view example</div>
        </div>
        {this.state.showCode ? (
          <Popover
            id="simple-popper"
            anchorEl={this.state.anchorEl}
            open={this.state.showCode}
            onClose={this.handlePopoverClose}
            className="code-view-popper"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "right"
            }}
          >
            <h4>Example Resouce Code</h4>
            {this.getCodeView()}
          </Popover>
        ) : null}
        {this.getCodeView() ? (
          <Fab
            color="primary"
            aria-label="Add"
            className="code-view-btn"
            onClick={this.toggleCodeView}
          >
            <Icon>code</Icon>
          </Fab>
        ) : null}
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          onClose={this.handleClose}
          open={
            exampleListDetail &&
            exampleListDetail[selected] &&
            exampleListDetail[selected].desc &&
            this.state.openSnack
          }
          message={
            (exampleListDetail &&
              exampleListDetail[selected] &&
              exampleListDetail[selected].desc) ||
            ""
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </React.Fragment>
    );
  }
}
