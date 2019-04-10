import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default class Header extends React.Component {
  state = {
    anchorEl: null,
    open: false
  };

  componentDidMount() {
    this.setState({
      anchorEl: document.querySelector(".header-search input")
    });
  }

  handleClose = e => {
    this.setState({
      open: false
    });
  };

  handleOpen = e => {
    this.setState({
      open: true
    });
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.searchResult.length !== 0 &&
      JSON.stringify(nextProps.searchResult) !==
        JSON.stringify(this.props.searchResult)
    ) {
      this.setState({
        open: true
      });
    }
  }

  render() {
    const { anchorEl, open } = this.state;
    const {
      classes,
      changePage,
      page,
      title,
      filter,
      updateFilter,
      searchResult,
      onNavClick,
      changeDocNumber
    } = this.props;
    return (
      <AppBar
        position="fixed"
        className={page === "example" ? "example-header" : "normal-header"}
      >
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
        >
          <div style={{ width: "300px", height: "400px", padding: 10 }}>
            {searchResult.map((item, index) => {
              return (
                <Card
                  key={index}
                  className={classes.card}
                  style={{ marginTop: 10 }}
                >
                  <CardContent>
                    <Typography variant="h6" component="h6">
                      {item.name || item.title}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                      {item.type}
                    </Typography>
                    <Typography component="p">{item.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={e => {
                        if (item.type === "Example") {
                          changePage(2);
                          this.handleClose();
                          onNavClick(item.index);
                        } else {
                          changePage(3);
                          this.handleClose();
                          changeDocNumber(item.index);
                        }
                      }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </div>
        </Popover>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {page !== "example" ? (
              <Button
                color="inherit"
                onClick={() => changePage(1)}
                style={{ fontSize: 20 }}
              >
                Pomelo Engine
              </Button>
            ) : (
              title
            )}
          </Typography>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            className="example-header-menu"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={filter}
              onChange={e => {
                updateFilter(e);
                this.handleClose();
              }}
              className="header-search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <Button
            color="inherit"
            onClick={e => {
              if (page === "example") {
                e.stopPropagation();
                e.preventDefault();
              } else {
                changePage(2);
              }
            }}
            style={{ marginLeft: "5px" }}
          >
            Demos
          </Button>
          <Button color="inherit" onClick={() => changePage(3)}>
            Docs
          </Button>
          <Button color="inherit" onClick={() => changePage(4)}>
            Github
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
