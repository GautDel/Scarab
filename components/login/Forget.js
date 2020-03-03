import React from "react";
import Button from "@material-ui/core/Button";
import Logo from "../logo/Logo";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Forget = ({ classes }) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <Paper elevation={3} className={classes.paper}>
            <div className={classes.logo}>
              <Logo />
            </div>
            <form>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                color="primary"
                fullWidth={true}
                className={classes.input}
              />

              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                className={classes.button}
                size="large"
              >
                Change Password
              </Button>
            </form>
            <Grid container justify="space-between" className={classes.text}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body2"
                  align="center"
                  className={classes.linkCont}
                >
                  <Link href="/register">
                    <a className={classes.link}>Create Account</a>
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body2"
                  align="center"
                  className={classes.linkCont}
                >
                  <Link href="/register">
                    <a className={classes.link}>Login?</a>
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Forget;
