import Container from "@material-ui/core/Container";
import Login from "../components/login/Login";
import NewUser from "../components/login/NewUser";
import Forget from "../components/login/Forget";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  container: {
    height: "100vh"
  },
  input: {
    margin: "1rem 0"
  },
  paper: {
    padding: "1rem 1.5rem",
    margin: "2rem 0"
  },
  text: {
    margin: "1rem 0"
  },
  logo: {
    width: "40%",
    padding: "3rem 0",
    margin: "auto"
  },
  linkCont: {
    marginBottom: "1rem"
  },
  link: {
    textDecoration: "none",
    color: "#536dfe",
    fontWeight: "bold"
  },
  button: {
    margin: "1rem 0"
  }
});

const index = () => {
  const classes = styles();

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        {/* <Login classes={classes} /> */}
        <Forget classes={classes} />
        {/* <NewUser classes={classes} /> */}
      </Container>
    </>
  );
};

export default index;
