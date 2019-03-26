import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { docsDetail } from "../config/global";

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
    open: true
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  getDocNumber = e => {
    this.props.changeDocNumber(e.currentTarget.getAttribute("value"));
  };

  getTitle = value => {
    value = value.split("-");
    let title = "";
    if (value.length === 1) {
      title = global[global.docsDetail[value[0]].title];
    } else {
      title = global[global.docsDetail[value[0]].children[value[1]].title];
    }
    return title;
  };

  render() {
    const { classes, docNumber } = this.props;
    return (
      <List component="nav" className={classes.root}>
        {Object.keys(docsDetail).map((value, i) => {
          if (docsDetail[value].children.length === 0) {
            return (
              <ListItem
                selected={value === docNumber}
                button
                key={i}
                value={value}
                onClick={this.getDocNumber}
              >
                <ListItemText primary={docsDetail[value].title} />
              </ListItem>
            );
          } else {
            return (
              <React.Fragment key={i}>
                <ListItem button onClick={this.handleClick} value={value}>
                  <ListItemText primary={docsDetail[value].title} />
                  {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {Object.keys(docsDetail[value].children).map(
                      (chilValue, index) => {
                        return (
                          <ListItem
                            selected={value + "-" + chilValue === docNumber}
                            button
                            key={index}
                            className={classes.nested}
                            value={value + "-" + chilValue}
                            onClick={this.getDocNumber}
                          >
                            <ListItemText
                              primary={
                                docsDetail[value].children[chilValue].title
                              }
                            />
                          </ListItem>
                        );
                      }
                    )}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          }
        })}
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NestedList);
