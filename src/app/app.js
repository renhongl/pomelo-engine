import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { fade } from "@material-ui/core/styles/colorManipulator";

import { Game } from "../pomelo-engine/core";
import "../pomelo-engine/styles.css";
import "../style.css";
import { exampleList, exampleListDetail } from "./config/global";

import Example from "./component/example";
import Header from "./component/header";
import Home from "./component/home";
import Document from "./component/document";

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
    title: "",
    selected: -1,
    filter: "",
    page: "home",
    docNumber: "1"
  };
  onNavClick = index => {
    this.getExample(Number(index));
    this.setState({
      title: exampleListDetail[index].name,
      selected: index
    });
  };

  showExample() {
    let container = document.querySelector(".example-content");
    container.innerHTML = "";
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
    game.showFrames();
    game.run(60);
    this.game = game;
  }

  updateFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  getExample(index) {
    this.scene.clean();
    import(`../example/${exampleListDetail[index].path}.js`).then(example => {
      example.default(this.scene);
    });
  }

  changeDocNumber = num => {
    this.setState({
      docNumber: num
    });
  };

  changePage = index => {
    this.setState({
      selected: -1
    });
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
            if (this.game) {
              this.game.stop();
            }
            this.showExample();
          }
        );
        break;
      case 3:
        this.setState({
          page: "document"
        });
        break;
      case 4:
        window.location = "https://github.com/renhongl/pomelo-engine";
        break;
      default:
        break;
    }
  };

  render() {
    const { classes } = this.props;
    const { title, selected, filter, page, docNumber } = this.state;
    return (
      <div className="drawer-content">
        <CssBaseline />
        <Header
          title={title}
          selected={selected}
          filter={filter}
          page={page}
          classes={classes}
          updateFilter={this.updateFilter}
          changePage={this.changePage}
        />
        {page === "example" ? (
          <Example
            selected={selected}
            onNavClick={this.onNavClick}
            filter={filter}
            classes={classes}
            exampleList={exampleListDetail}
            changePage={this.changePage}
          />
        ) : page === "home" ? (
          <Home
            changePage={this.changePage}
            changeDocNumber={this.changeDocNumber}
          />
        ) : (
          <Document
            docNumber={docNumber}
            changeDocNumber={this.changeDocNumber}
          />
        )}
      </div>
    );
  }
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PermanentDrawerLeft);
