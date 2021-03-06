import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../components/header/Header";
import Appointment from "../components/appointments/Appointment";
import Quote from "../components/quote/Quote";
import Note from "../components/notes/Note";
import Todos from "../components/todos/Todos";
import Urgent from "../components/urgent/Urgent";

const styles = makeStyles({
  "@global": {
    "*::-webkit-scrollbar": {
      backgroundColor: "rgba(0, 0, 0, 0)",
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,0)"
    }
  }
});

const Index = () => {
  return (
    <Container maxWidth="lg">
      <Grid container direction="row" justify="space-between">
        <Grid item xs={12}>
          <Header />
        </Grid>

        <Grid item xs={12} md={4}>
          <Quote />
          <Appointment />
        </Grid>

        <Grid item xs={12} md={4}>
          <Todos />
        </Grid>

        <Grid item xs={12} md={3}>
          <Note />
          <Urgent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Index;
