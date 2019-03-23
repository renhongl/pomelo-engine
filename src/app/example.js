import React from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

export default class Example extends React.Component {
  render() {
    const {
      classes,
      filter,
      selected,
      onNavClick,
      config,
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
            {config
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
      </React.Fragment>
    );
  }
}
