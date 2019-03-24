import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";

export default class Header extends React.Component {
  render() {
    const {
      classes,
      changePage,
      page,
      title,
      filter,
      updateFilter
    } = this.props;
    return (
      <AppBar
        position="fixed"
        className={page === "example" ? "example-header" : "normal-header"}
      >
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
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              value={filter}
              onChange={updateFilter}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
          </div>
          <Button
            color="inherit"
            onClick={() => changePage(2)}
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
