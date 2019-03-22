import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Button from "@material-ui/core/Button";

import { Game } from "../pomelo-engine/core";
import "../pomelo-engine/styles.css";
import "../style.css";
import { renderBird } from "../example/birdExample";
import { renderSampleSprite } from "../example/sampleSprite";
import { renderBalls } from "../example/ballExample";
import config from "../example/config.json";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  titleName: {
    paddingLeft: "20px",
    color: "#404040"
  }
});

class PermanentDrawerLeft extends React.Component {
  state = {
    title: config[0],
    selected: 0,
    filter: "",
    page: "home"
  };
  onNavClick = index => {
    this.getExample(Number(index));
    this.setState({
      title: config[index],
      selected: index
    });
  };

  showExample() {
    let container = document.querySelector(".example-content");
    if (!container) {
      return;
    }
    let w = container.offsetWidth;
    let h = container.offsetHeight;
    let game = new Game({ container });
    this.scene = game.sceneManager.createScene({
      name: "title",
      x: 30,
      y: 10,
      w,
      h
    });
    // this.scene.setBGImg("images/bg.jpg", 0);
    game.showFrames();
    game.run(60);
    this.getExample(0);
  }

  updateFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  getExample(index) {
    this.scene.clean();
    switch (index) {
      case 0:
        renderSampleSprite(this.scene);
        break;
      case 1:
        renderBalls(this.scene);
        break;
      case 2:
        renderBird(this.scene);
        break;
      default:
        break;
    }
  }

  changePage = index => {
    switch (index) {
      case 1:
        this.setState({
          page: "home"
        });
        break;
      case 2:
        this.setState(
          {
            page: "example"
          },
          () => {
            this.showExample();
          }
        );
        break;
      case 3:
        window.location = "https://github.com/renhongl/pomelo-engine";
        break;
      default:
        break;
    }
  };

  render() {
    const { classes } = this.props;
    const { title, selected, filter, page } = this.state;
    return (
      <div className="drawer-content">
        <CssBaseline />
        <AppBar
          position="fixed"
          className={page === "example" ? "example-header" : "normal-header"}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              {page === "home" ? "Pomelo Engine" : title}
            </Typography>
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                value={filter}
                onChange={this.updateFilter}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
            <Button
              style={{ marginLeft: "5px" }}
              color="inherit"
              onClick={() => this.changePage(1)}
            >
              主页
            </Button>
            <Button color="inherit" onClick={() => this.changePage(2)}>
              例子
            </Button>
            <Button color="inherit" onClick={() => this.changePage(3)}>
              Github
            </Button>
          </Toolbar>
        </AppBar>
        {page === "example" ? (
          <React.Fragment>
            <Drawer
              className={classes.drawer}
              variant="permanent"
              classes={{
                paper: classes.drawerPaper
              }}
              anchor="left"
            >
              <div className={classes.toolbar}>
                <h2 className={classes.titleName}>Pomelo Engine</h2>
              </div>
              <Divider />
              <List>
                {config
                  .filter(item =>
                    item.toUpperCase().includes(filter.toUpperCase())
                  )
                  .map((text, index) => (
                    <ListItem
                      button
                      key={text}
                      selected={selected === index}
                      onClick={() => this.onNavClick(index)}
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
        ) : (
          <div>home page</div>
        )}
      </div>
    );
  }
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PermanentDrawerLeft);
