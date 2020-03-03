import Container from "@material-ui/core/Container";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  container: {
    height: "100vh"
  },
  input: {
    margin: "1rem 0"
  },
  paper: {
    padding: "1rem 1.5rem"
  },
  text: {
    margin: "1rem 0"
  }
});

const Login = () => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.container}
        >
          <Grid item xs={10} sm={6} md={4} lg={3}>
            <Paper elevation={3} className={classes.paper}>
              <form>
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  color="primary"
                  fullWidth={true}
                  className={classes.input}
                />
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  color="primary"
                  fullWidth={true}
                  className={classes.input}
                />
              </form>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.text}
              >
                <Grid item xs={12} md={6}>
                  <Typography variant="body2">
                    <Link href="/register">New User?</Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" align="right">
                    <Link href="/forgot">Forgot password?</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
