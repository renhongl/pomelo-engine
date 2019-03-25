import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const styles = theme => ({
  root: {
    width: "200px",
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
    position: "absolute",
    left: "20px",
    top: "20px"
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

class NestedList extends React.Component {
  state = {
    open: false
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  getDocNumber = e => {
    this.props.changeDocNumber(e.currentTarget.getAttribute("value"));
  };

  render() {
    const { classes, docNumber } = this.props;
    return (
      <List component="nav" className={classes.root}>
        <ListItem
          selected={"1" === docNumber}
          button
          value="1"
          onClick={this.getDocNumber}
        >
          <ListItemText primary="Installation" />
        </ListItem>
        <ListItem
          selected={"2" === docNumber}
          button
          value="2"
          onClick={this.getDocNumber}
        >
          <ListItemText primary="Get Started" />
        </ListItem>
        <ListItem button onClick={this.handleClick} value="3">
          <ListItemText primary="Full Docs" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              selected={"3-1" === docNumber}
              button
              className={classes.nested}
              value="3-1"
              onClick={this.getDocNumber}
            >
              <ListItemText primary="Core Concepts" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
