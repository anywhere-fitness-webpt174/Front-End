import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    borderBottom: `2px solid black`,
    backgroundImage: `url(https://img4.goodfon.com/wallpaper/nbig/6/ef/dumbells-gym-fitness-1.jpg)`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    backgroundPosition: `left center`,
    height: `250px`,
  },
  toolbarTitle: {
    flexGrow: 1,
    fontWeight: 900,
    color: "#333453",
  },
  link: {
    margin: theme.spacing(12, 1.5),
  },
}));

export default function Nav(props) {
  const classes = useStyles();
  const [isToken, setToken] = useState(localStorage.getItem("token"));
  const history = useHistory();
  
  const logOut = (e) => {

    localStorage.clear()
    setToken(false)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          ></Typography>
          <nav className="nav">
            {isToken ? (
              <div>
                <RouterLink style={{ textDecoration: "none" }} to="/" onClick={logOut}>
                  <Button
                    href="#"
                    color="primary"
                    variant="contained"
                    className={classes.link}
                  >
                    Log Out
                  </Button>
                </RouterLink>
              </div>
            ) : (
              <div>
                <RouterLink style={{ textDecoration: "none" }} to="/signup">
                  <Button
                    href="#"
                    color="primary"
                    variant="contained"
                    className={classes.link}
                  >
                    Sign Up
                  </Button>
                </RouterLink>
                <RouterLink style={{ textDecoration: "none" }} to="/login">
                  <Button
                    href="#"
                    color="primary"
                    variant="contained"
                    className={classes.link}
                  >
                    Login
                  </Button>
                </RouterLink>
              </div>
            )}
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
